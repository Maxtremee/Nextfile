import path from "path/posix"

const dir = process.env.FOLDER

export default function concatPath(pathArr) {
  let relativePath = ''
  if (pathArr) {
    relativePath = path.join(...pathArr)
  }
  const absolutePath = `${dir}/${relativePath}`
  return {
    absolutePath,
    relativePath,
  }
}
