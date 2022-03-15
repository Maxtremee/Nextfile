import fs from "fs/promises"
import fsSync from "fs"
import path from "path"
import archiver from "archiver"
import mime from "mime-types"

const dir = "files"

export default async function handler(req, res) {
  const filePath = path.join(dir, ...req.query.path)
  const fileDetails = await fs.stat(filePath)
  const fileName = path.basename(filePath)

  if (fileDetails.isDirectory()) {
    // if directory generate zip
    const zipName = `${fileName}.zip`
    const output = fsSync.createWriteStream(zipName)
    const archive = archiver("zip")

    archive.pipe(output)
    archive.directory(filePath, false)
    await archive.finalize()

    res.writeHead(200, {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${zipName}"; filename*="${fileName}"`,
    })
    const readStream = fsSync.createReadStream(zipName)
    readStream.pipe(res)
    fs.rm(zipName)
  } else {
    // if file just send it
    const mimeType = mime.contentType(fileName)
    res.writeHead(200, {
      "Content-Type": mimeType || "application/octet-stream; charset=utf-8",
      "Content-Length": fileDetails.size,
    })
    const readStream = fsSync.createReadStream(filePath)
    readStream.pipe(res)
  }
}
