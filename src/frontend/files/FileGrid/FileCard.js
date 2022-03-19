import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "@mui/material/styles"
import { Card, CardHeader, Typography, Box } from "@mui/material"
import { Folder } from "@mui/icons-material"
import prettyBytes from "pretty-bytes"
import ActionButtons from "../ActionButtons"
import getBrowserLink from "../../utils/getBrowserLink"
import getDownloadLink from "../../utils/getDownloadLink"

const headerStyle = (theme) => ({
  wordWrap: "break-word",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.divider,
  },
  textDecoration: "none",
  color: theme.palette.text.primary
})

const actionsStyle = {
  display: "flex",
  paddingLeft: "16px",
  paddingBottom: "6px",
  paddingRight: "16px",
  justifyContent: "space-between",
  alignItems: "center",
}

export default function FileCard({ file }) {
  const { name, isDirectory, size, href } = file
  const router = useRouter()
  const theme = useTheme()

  // const handleClick = () => {
  //   if (isDirectory) {
  //     router.push(getBrowserLink(href))
  //   } else {
  //     window.open(getDownloadLink(href))
  //   }
  // }

  const cardHeaderProps = () => {
    if (!isDirectory) {
      return {
        component: "a",
        href: getDownloadLink(href),
        target: "_blank",
      }
    }
  }

  const renderCard = () => (
    <Card>
      <CardHeader
        sx={headerStyle(theme)}
        avatar={file.isDirectory && <Folder />}
        title={<Typography variant="body1">{name}</Typography>}
        {...cardHeaderProps()}
      />
      <Box sx={actionsStyle}>
        <Typography variant="body2" color="text.secondary">
          {prettyBytes(size)}
        </Typography>
        <ActionButtons file={file} />
      </Box>
    </Card>
  )

  return isDirectory ? (
    <Link href={getBrowserLink(href)}>{renderCard()}</Link>
  ) : (
    renderCard()
  )
}
