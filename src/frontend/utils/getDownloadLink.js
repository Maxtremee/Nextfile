import path from "path"

function getDownloadLink(href) {
  return encodeURI(path.join("/api/download/", href));
}

export default getDownloadLink
