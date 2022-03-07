import { useRouter } from "next/router"
import path from "path"
import { Breadcrumbs, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { Box } from "@mui/system"
import HomeIcon from "@mui/icons-material/Home"
import GridViewIcon from "@mui/icons-material/GridView"
import ViewListIcon from "@mui/icons-material/ViewList"
import Link from "../shared/Link"

const optionsBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.04)",
}

const itemStyle = {
  margin: "16px",
}

export default function OptionsBar({ view, onChangeView }) {
  const { query } = useRouter()
  const { path: location } = query

  return (
    <Box sx={optionsBarStyle}>
      <Box sx={itemStyle}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <HomeIcon />
          </Link>
          {location &&
            location?.map((value, index) => (
              <Link
                key={path}
                underline="hover"
                color="inherit"
                href={path.join(...location?.slice(0, index + 1))}
              >
                {value}
              </Link>
            ))}
        </Breadcrumbs>
      </Box>
      <Box sx={itemStyle}>
        <ToggleButtonGroup
          value={view}
          onChange={onChangeView}
          exclusive
          aria-label="file view"
        >
          <ToggleButton value="grid" aria-label="grid view">
            <GridViewIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
