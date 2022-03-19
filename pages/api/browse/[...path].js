import path from "path"
import readDirectory from "../../../src/backend/readDirectory"

export default async function handler(req, res) {
  const { path: filePath, withDetails } = req.query
  const files = await readDirectory(path.join(...filePath), withDetails)
  res.status(200).json(files)
}