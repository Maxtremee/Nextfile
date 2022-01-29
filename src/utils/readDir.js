import fs from "fs/promises"
import concatPath from "./concatPath"

export default async function readDir(pathArr) {
  const { absolutePath, relativePath } = concatPath(pathArr)

  try {
    const files = await fs.readdir(absolutePath)
    return Promise.all(
      files.map(async (name) => {
        const stats = await readStats(`${absolutePath}/${name}`)
        const details = {
          isDirectory: stats.isDirectory(),
          birthtime: stats.birthtimeMs,
          modified: stats.mtimeMs,
          changed: stats.ctimeMs,
          accessed: stats.atimeMs,
          size: stats.size,
        }
        if (stats.isDirectory() || stats.isFile()) {
          return {
            name,
            path: relativePath,
            details,
          }
        }
        return null
      })
    )
  } catch (e) {
    return null
  }
}

async function readStats(filePath) {
  try {
    return await fs.stat(filePath)
  } catch {
    return null
  }
}
