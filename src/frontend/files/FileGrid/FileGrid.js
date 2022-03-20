import { Grid } from "@mui/material"
import FileCard from "./FileCard"

export default function FileGrid({ files }) {
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {files?.map((file) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={file?.name}>
          <FileCard file={file} />
        </Grid>
      ))}
    </Grid>
  )
}
