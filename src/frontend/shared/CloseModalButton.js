import { Box, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

export default function CloseModalButton({ onClose }) {
  return (
    <Box display="flex" justifyContent="center" sx={{ m: 1 }}>
      <Button variant="contained" onClick={onClose}>
        <CloseIcon />
        Close
      </Button>
    </Box>
  )
}
