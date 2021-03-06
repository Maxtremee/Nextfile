import { styled } from "@mui/material/styles"
import { useAppContext } from "../AppContext"
import { drawerWidth } from "../constants"

const MainStyled = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

export default function Main({ children }) {
  const { drawerOpen } = useAppContext()

  return <MainStyled open={drawerOpen}>{children}</MainStyled>
}
