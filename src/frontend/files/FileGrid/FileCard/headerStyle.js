export default function headerStyle(theme) {
  return {
    wordWrap: "break-word",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.divider,
    },
    textDecoration: "none",
    color: theme.palette.text.primary,
  }
}
