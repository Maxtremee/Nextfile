import path from "path"

function getDownloadLink(href, isDirectory = false) {
  return !isDirectory ? encodeURI(path.join("/files/", href)) : encodeURI(path.join("/api/download/", href));
}

export default getDownloadLink
