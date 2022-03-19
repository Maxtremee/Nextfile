import { useState } from "react"
import { useRouter } from "next/router"
import { Box, IconButton, Tooltip } from "@mui/material"
import { Archive, MoreVert, Share } from "@mui/icons-material"
import DetailsModal from "./DetailsModal"
import getDownloadLink from "../utils/getDownloadLink"
import { defaultShareTooltipText } from "../constants"

export default function ActionButtons({ file }) {
  const { href, isDirectory } = file
  const router = useRouter()

  const [modalOpen, setModalOpen] = useState(false)
  const [shareText, setShareText] = useState(defaultShareTooltipText)

  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const downloadFolder = () => {
    router.push(getDownloadLink(href, true))
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`${location.host}${getDownloadLink(href, isDirectory)}`)
    setShareText("Link copied!")
  }

  return (
    <>
      <Box sx={{ display: "inline-block" }}>
        {isDirectory && (
          <Tooltip title="Download folder as zip">
            <IconButton onClick={downloadFolder}>
              <Archive />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip
          title={shareText}
          onClose={() => setShareText(defaultShareTooltipText)}
        >
          <IconButton onClick={copyLink}>
            <Share />
          </IconButton>
        </Tooltip>
        <Tooltip title="Details">
          <IconButton onClick={handleModalOpen}>
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Box>
      <DetailsModal file={file} open={modalOpen} onClose={handleModalClose} />
    </>
  )
}
