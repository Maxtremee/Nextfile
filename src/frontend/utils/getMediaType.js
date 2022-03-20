import imageExtensions from "image-extensions"
import videoExtensions from "video-extensions"
import audioExtensions from "audio-extensions"

export default function getMediaType(extension) {
  const extensionWoDot = extension.split(".")[1]

  if (imageExtensions.includes(extensionWoDot)) {
    return ["image", extensionWoDot]
  }
  if (videoExtensions.includes(extensionWoDot)) {
    return ["video", extensionWoDot]
  }
  if (audioExtensions.includes(extensionWoDot)) {
    return ["audio", extensionWoDot]
  }
  return [null, extensionWoDot]
}
