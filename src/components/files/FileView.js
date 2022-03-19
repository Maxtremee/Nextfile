import { styled } from "@mui/material/styles"
import { useAppContext } from "../AppContext"
import FileGrid from "./FileGrid"
import FileList from "./FileList"

const ViewWrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

export default function FileView({ files }) {
  const { view } = useAppContext()
  
  return (
    <ViewWrapper>
      {view === "grid" ? <FileGrid files={files} /> : <FileList files={files} />}
    </ViewWrapper>
  )
}
