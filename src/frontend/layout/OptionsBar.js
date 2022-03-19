import { useRouter } from "next/router"
import path from "path"
import { Breadcrumbs, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { Box } from "@mui/system"
import HomeIcon from "@mui/icons-material/Home"
import GridViewIcon from "@mui/icons-material/GridView"
import ViewListIcon from "@mui/icons-material/ViewList"
import Link from "../shared/Link"
import { useAppContext } from "../AppContext"

const optionsBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const itemStyle = {
  margin: "16px",
}

export default function OptionsBar() {
  const { query } = useRouter()
  const { path: location } = query
  const { view, setView } = useAppContext()

  const getRelativeHref = (index) =>
    path.join("/", ...location?.slice(0, index + 1))

  const setViewValue = (_event, value) => {
    if (value) {
      setView(value)
    }
  }

  return (
    <Box sx={optionsBarStyle}>
      <Box sx={itemStyle}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <HomeIcon />
          </Link>
          {location?.map?.((value, index) => (
            <Link
              key={getRelativeHref(index)}
              underline="hover"
              color="inherit"
              href={getRelativeHref(index)}
            >
              {value}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>
      <Box sx={itemStyle}>
        <ToggleButtonGroup
          value={view}
          onChange={setViewValue}
          exclusive
          aria-label="file view"
        >
          <ToggleButton value="list" aria-label="list view">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid view">
            <GridViewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}
