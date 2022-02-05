import fs from "fs/promises"
import path from "path/posix"
import concatPath from "./concatPath"

export default async function readDir(pathArr, locales) {
  const { absolutePath, relativePath } = concatPath(pathArr)

  try {
    const files = await fs.readdir(absolutePath)
    return Promise.all(
      files.map(async (name) => {
        const filePath = `${absolutePath}/${name}`
        const extension = path.extname(filePath)
        const stats = await readStats(filePath)
        const { birthtimeMs, mtimeMs, ctimeMs, atimeMs, size } = stats
        let details = {
          isDirectory: stats.isDirectory(),
          size,
          extension,
        }
        details = locales
          ? {
              ...details,
              birthtime: new Date(birthtimeMs).toLocaleDateString(locales),
              modified: new Date(mtimeMs).toLocaleDateString(locales),
              changed: new Date(ctimeMs).toLocaleDateString(locales),
              accessed: new Date(atimeMs).toLocaleDateString(locales),
            }
          : {
              ...details,
              birthtime: birthtimeMs,
              modified: mtimeMs,
              changed: ctimeMs,
              accessed: atimeMs,
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
