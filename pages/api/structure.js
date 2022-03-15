import readDirectoryStructure from "../../src/utils/readDirectoryStructure"

export default async function handler (_req, res) {
  const structure = await readDirectoryStructure("")
  res.status(200).send(structure)
}