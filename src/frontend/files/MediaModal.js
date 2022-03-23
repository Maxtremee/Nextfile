import { Box, Modal } from "@mui/material"
import CloseModalButton from "../shared/CloseModalButton"
import getDownloadLink from "../utils/getDownloadLink"
import getMediaType from "../utils/getMediaType"

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const videoStyle = {
  height: 500,
  width: 500,
}

export default function MediaModal({ file, open, onClose }) {
  const { name, href, extension } = file

  const [mediaType, extensionWoDot] = getMediaType(extension)

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        {mediaType === "image" && (
          <img
            src={getDownloadLink(href)}
            alt={name}
            width="100%"
            height="100%"
          />
        )}
        {mediaType === "video" && (
          <Box sx={videoStyle}>
            <video alt={name} width="100%" height="100%" controls>
              <source
                src={getDownloadLink(href)}
                type={`video/${extensionWoDot}`}
              />
            </video>
          </Box>
        )}
        {mediaType === "audio" && (
          <audio alt={name} controls>
            <source
              src={getDownloadLink(href)}
              type={`audio/${extensionWoDot}`}
            />
          </audio>
        )}
        <CloseModalButton onClose={onClose} />
      </Box>
    </Modal>
  )
}
