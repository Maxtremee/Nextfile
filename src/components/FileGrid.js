import PropTypes from "prop-types"
import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import FileCard from "./FileCard"

export default function FileGrid({ files }) {
  return (
    <Box sx={{ flexGrow: 1, margin: "30px" }}>
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {files &&
          files
            .sort((a) => (!a.details?.isDirectory ? 1 : -1))
            .map((file) => (
              <Grid item xs={3} key={file?.name}>
                <FileCard {...file} />
              </Grid>
            ))}
      </Grid>
    </Box>
  )
}

FileGrid.propTypes = {
  files: PropTypes.array,
}
