import { Box, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslations } from "next-intl"

export default function CloseModalButton({ onClose }) {
  const t = useTranslations("Shared")
  return (
    <Box display="flex" justifyContent="center" sx={{ m: 1 }}>
      <Button variant="contained" onClick={onClose}>
        <CloseIcon />
        {t('closeModal')}
      </Button>
    </Box>
  )
}
