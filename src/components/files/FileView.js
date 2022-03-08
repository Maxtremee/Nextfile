import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { styled } from "@mui/material/styles"
import FileGrid from "./FileGrid"
import FileList from "./FileList"

const ViewWrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

export default function FileView({ folderStructure, view }) {
  const { query } = useRouter()
  const { path } = query
  const [directory, setDirectory] = useState(folderStructure)

  useEffect(() => {
    let newDirectory = folderStructure
    if (path) {
      path.forEach((value) => {
        const temp = newDirectory.find(({ name }) => name === value)
        newDirectory = temp.files
      })
    }
    setDirectory(newDirectory)
  }, [path, setDirectory, folderStructure])

  return (
    <ViewWrapper>
      {view === "grid" ? <FileGrid folderStructure={directory} /> : <FileList folderStructure={directory} />}
    </ViewWrapper>
  )
}
