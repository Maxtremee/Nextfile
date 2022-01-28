const beginning = process.env.FOLDER

export default function concatPath(pathArr) {
  let relativePath = ''
  if(pathArr) {
    pathArr.forEach((element) => {
      relativePath = `${relativePath}/${element}`
    })
  }
  const absolutePath = `${beginning}/${relativePath}`
  return {
    absolutePath, relativePath
  }
}
