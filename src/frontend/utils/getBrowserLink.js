import path from "path"

function getBrowserLink(href) {
  return encodeURI(path.join('/browse/', href))
}

export default getBrowserLink