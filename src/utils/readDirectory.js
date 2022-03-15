import fs from "fs/promises"
import path from "path/posix"
import getFolderSize from "get-folder-size"
import { mainDir } from "./constants"

function dateToLocale(date, locales) {
  if (locales) {
    return new Date(date).toLocaleDateString(locales)
  }
  return date
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
            const actualSize = details.isDirectory
              ? await getFolderSize.loose(path.join(mainDir, details.href))
              : size
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
            files.push(details)
          }
        }
        files.push(details)
      }
    } catch (e) {
      console.error(e)
    }
  } catch (e) {
    console.error(e)
  }
  return files.sort((a) => (a?.isDirectory ? -1 : 1))
}
