import fileSystem from "fs"
import path from "path"
import concatPath from "../../../src/utils/concatPath"

export default function handler(req, res) {
  const { absolutePath } = concatPath(req.query.path)
  const fileName = path.basename(absolutePath)
  const stat = fileSystem.statSync(absolutePath)

  res.writeHead(200, {
    "Content-Type": 'application/octet-stream; charset=utf-8',
    "Content-Disposition": `attachment; filename="${fileName}"; filename*="${fileName}"`,
    "Content-Length": stat.size,
  })
  const readStream = fileSystem.createReadStream(absolutePath)
  readStream.pipe(res)
}
