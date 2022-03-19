import fs from "fs/promises"
import path from "path/posix"
import getFolderSize from "get-folder-size"
import { mainDir } from "./constants"
import sortAlphabetically from "./sortAlphabetically"

function dateToLocale(date, locales) {
  if (locales) {
    return new Date(date).toLocaleDateString(locales)
  }
  return date
}

async function getDirectorySize(dirPath) {
  try {
    const size = await getFolderSize.strict(dirPath)
    return size
  } catch {
    try {
      const size = await getFolderSize.loose(dirPath)
      return size
    } catch {
      return 0
    }
  }
}

export default async function readDirectory(
  dirPath,
  withDetails = true,
  locales = null
) {
  const files = []
  try {
    const directory = await fs.opendir(path.join(mainDir, dirPath))
    try {
      for await (const dirent of directory) {
        let details = {
          name: dirent.name,
          isDirectory: dirent.isDirectory(),
          href: path.join(dirPath, dirent.name),
        }
        if (withDetails) {
          const extension = path.extname(details.href)
          try {
            const { birthtimeMs, mtimeMs, ctimeMs, atimeMs, size } =
              await fs.stat(path.join(mainDir, details.href))
            let actualSize = size
            if (details.isDirectory) {
              actualSize = await getDirectorySize(path.join(mainDir, details.href))
            }

            details = {
              ...details,
              size: actualSize,
              extension,
              birthtime: dateToLocale(birthtimeMs, locales),
              modified: dateToLocale(mtimeMs, locales),
              changed: dateToLocale(ctimeMs, locales),
              accessed: dateToLocale(atimeMs, locales),
            }
          } catch {
            continue
          }
        }
        files.push(details)
      }
    } catch (e) {
      console.error(e)
      return
    }
  } catch (e) {
    console.error(e)
    return
  }

  const directories = files.filter((a) => a?.isDirectory).sort(sortAlphabetically)
  const onlyFiles = files.filter((a) => !a?.isDirectory).sort(sortAlphabetically)
  
  return [...directories, ...onlyFiles]
}
