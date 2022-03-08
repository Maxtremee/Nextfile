import readFolderStructure from "../../../src/utils/readFolderStructure"

export default async function handler(req, res) {
  let { path } = req.query
  try {
    const files = await readFolderStructure(path)
    res.status(200).json(JSON.stringify(files))
  } catch (e) {
    res.status(404).json()
  }
}
