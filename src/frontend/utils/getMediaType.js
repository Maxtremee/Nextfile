import imageExtensions from "image-extensions"
import videoExtensions from "video-extensions"

export default function getMediaType(extension) {
  const extensionWoDot = extension.split(".")[1]

  if (imageExtensions.includes(extensionWoDot)) {
    return ["image", extensionWoDot]
  }
  if (videoExtensions.includes(extensionWoDot)) {
    return ["video", extensionWoDot]
  }
  return [null, extensionWoDot]
}
