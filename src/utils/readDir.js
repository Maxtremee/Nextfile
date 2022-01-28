import fs from "fs"
import concatPath from "./concatPath"

export default function readDir(pathArr) {
  const {absolutePath, relativePath} = concatPath(pathArr)
  
  try {
    const files = fs.readdirSync(absolutePath)
    return files.map((file) => ({
      name: file,
      path: `${relativePath}/${file}`,
      isDirectory: fs.lstatSync(`${absolutePath}/${file}`).isDirectory(),
    }))
  } catch (e) {
    return null
  }
}
