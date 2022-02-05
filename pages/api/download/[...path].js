import fs from "fs/promises"
import fsSync from "fs"
import path from "path"
import archiver from "archiver"
import concatPath from "../../../src/utils/concatPath"

export default async function handler(req, res) {
  const { absolutePath } = concatPath(req.query.path)
  const fileDetails = await fs.stat(absolutePath)
  const fileName = path.basename(absolutePath)

  if (fileDetails.isDirectory()) {
    // generate zip
    const zipName = `${fileName}.zip`
    const output = fsSync.createWriteStream(zipName)
    const archive = archiver("zip")

    archive.pipe(output)
    archive.directory(absolutePath, false)
    await archive.finalize()

    res.writeHead(200, {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${zipName}"; filename*="${fileName}"`,
    })
    const readStream = fsSync.createReadStream(zipName)
    readStream.pipe(res)
    fs.rm(zipName)
  } else {
    // send file
    res.writeHead(200, {
      "Content-Type": "application/octet-stream; charset=utf-8",
      "Content-Disposition": `attachment; filename="${fileName}"; filename*="${fileName}"`,
      "Content-Length": fileDetails.size,
    })
    const readStream = fsSync.createReadStream(absolutePath)
    readStream.pipe(res)
  }
}
