import { useState } from "react"
import { Box, IconButton, Tooltip } from "@mui/material"
import { Archive, MoreVert, Share, Preview } from "@mui/icons-material"
import DetailsModal from "./DetailsModal"
import getDownloadLink from "../utils/getDownloadLink"
import MediaModal from "./MediaModal"
import getMediaType from "../utils/getMediaType"
import { useTranslations } from "next-intl"

export default function ActionButtons({ file }) {
  const { href, isDirectory, extension } = file
  const [mediaType] = getMediaType(extension)
  const t = useTranslations("ActionButtons")

  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [mediaModalOpen, setMediaModalOpen] = useState(false)
  const [shareText, setShareText] = useState(t("shareTooltip"))

  const handleDetailsModalOpen = () => setDetailsModalOpen(true)
  const handleDetailsModalClose = () => setDetailsModalOpen(false)
  const handleMediaModalOpen = () => setMediaModalOpen(true)
  const handleMediaModalClose = () => setMediaModalOpen(false)

  const downloadFolder = () => {
    window.open(getDownloadLink(href))
  }

  const copyLink = () => {
    navigator.clipboard.writeText(
      `${location.host}${getDownloadLink(href, isDirectory)}`
    )
    setShareText(t("linkCopied"))
  }

  return (
    <>
      <Box sx={{ display: "inline-block" }}>
        {isDirectory && (
          <Tooltip title={t("downloadFolderAsZip")}>
            <IconButton onClick={downloadFolder}>
              <Archive />
            </IconButton>
          </Tooltip>
        )}
        {mediaType && (
          <Tooltip title={t("preview")}>
            <IconButton onClick={handleMediaModalOpen}>
              <Preview />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip
          title={shareText}
          onClose={() => setShareText(t("shareTooltip"))}
        >
          <IconButton onClick={copyLink}>
            <Share />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("details")}>
          <IconButton onClick={handleDetailsModalOpen}>
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Box>
      <DetailsModal
        file={file}
        open={detailsModalOpen}
        onClose={handleDetailsModalClose}
      />
      <MediaModal
        file={file}
        open={mediaModalOpen}
        onClose={handleMediaModalClose}
      />
    </>
  )
}
