import fs from "fs/promises"
import path from "path/posix"
import { mainDir } from "./constants"

export default async function readDirectoryStructure(dir) {
  const absolutePath = path.join(mainDir, dir)
  try {
    let files = await fs.readdir(absolutePath, { withFileTypes: true })
    files = files
      .filter((file) => file.isDirectory())
      .map(({ name }) => ({ name, href: path.join(dir, name) }))
    return Promise.all(
      files.map(async (file) => ({
        ...file,
        directories: await readDirectoryStructure(path.join(dir, file.name)),
      }))
    )
  } catch (e) {
    console.error(e)
  }
}
