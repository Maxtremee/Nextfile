import fs from "fs/promises"
import path from "path/posix"

const dir = process.env.FOLDER

function dateToLocale(date, locales) {
  if (locales) {
    return new Date(date).toLocaleDateString(locales)
  }
  return date
}

async function readStats(filePath) {
  try {
    return await fs.stat(filePath)
  } catch {
    return null
  }
}

async function readDir(filePath, locales) {
  const absolutePath = path.join(dir, filePath)
  try {
    const files = await fs.readdir(absolutePath)
    return Promise.all(
      files.map(async (name) => {
        const fullPath = path.join(absolutePath, name)
        const extension = path.extname(fullPath)
        const stats = await readStats(fullPath)
        const { birthtimeMs, mtimeMs, ctimeMs, atimeMs, size } = stats

        if (stats.isDirectory() || stats.isFile()) {
          const fileDetails = {
            name,
            path: filePath,
            details: {
              size,
              extension,
              birthtime: dateToLocale(birthtimeMs, locales),
              modified: dateToLocale(mtimeMs, locales),
              changed: dateToLocale(ctimeMs, locales),
              accessed: dateToLocale(atimeMs, locales),
            },
            isDirectory: stats.isDirectory(),
          }
          if (stats.isDirectory()) {
            const files = await readDir(path.join(filePath, name), locales)
            return {
              ...fileDetails,
              files,
            }
          }
          return fileDetails
        }
        return null
      })
    )
  } catch (e) {
    return null
  }
}

export default async function readFolderStructure(pathArr, locales) {
  const relativePath = path.join(...pathArr)
  return await readDir(relativePath, locales)
}
