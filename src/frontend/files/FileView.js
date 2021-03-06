import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTranslations } from "next-intl"
import { useAppContext } from "../AppContext"
import FileGrid from "./FileGrid"
import FileList from "./FileList"

const ViewWrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

export default function FileView({ files }) {
  const { view } = useAppContext()
  const t = useTranslations("FileView")

  return (
    <ViewWrapper>
      {files.length && view === "grid" ? (
        <FileGrid files={files} />
      ) : (
        <FileList files={files} />
      )}
      {!files.length && (
        <Box display="flex" justifyContent="center">
          <Typography variant="h5">{t("emptyDirectory")}</Typography>
        </Box>
      )}
    </ViewWrapper>
  )
}
