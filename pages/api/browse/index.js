import readDirectory from "../../../src/backend/readDirectory"

export default async function handler(req, res) {
  const { withDetails } = req.query
  const files = await readDirectory('', withDetails)
  res.status(200).json(files)
}