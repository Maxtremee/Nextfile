import readDirectoryStructure from "../../src/backend/readDirectoryStructure"

export default async function handler (_req, res) {
  const structure = await readDirectoryStructure("")
  res.status(200).send(structure)
}