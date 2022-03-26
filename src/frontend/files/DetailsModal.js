import {
  Box,
  Modal,
  Paper,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
} from "@mui/material"
import { useIntl, useTranslations } from "next-intl"
import prettyBytes from "pretty-bytes"
import CloseModalButton from "../shared/CloseModalButton"

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
}

export default function DetailsModal({ file, open, onClose }) {
  const {
    name,
    isDirectory,
    birthtime,
    modified,
    changed,
    accessed,
    size,
    extension,
  } = file
  const t = useTranslations("DetailsModal")
  const { formatDateTime } = useIntl()
  console.log(birthtime)

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow key={"name"}>
                <TableCell variant="head">{t("name")}</TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  sx={{ wordBreak: "break-all" }}
                >
                  {name}
                </TableCell>
              </TableRow>
              {!isDirectory && (
                <TableRow
                  key={"extension"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{t("extension")}</TableCell>
                  <TableCell align="right">{extension}</TableCell>
                </TableRow>
              )}
              <TableRow
                key={"size"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{t("size")}</TableCell>
                <TableCell align="right">{prettyBytes(size)}</TableCell>
              </TableRow>

              <TableRow
                key={`birthtime`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{t("birthtime")}</TableCell>
                <TableCell align="right">{formatDateTime(birthtime)}</TableCell>
              </TableRow>
              <TableRow
                key={"modified"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{t("modified")}</TableCell>
                <TableCell align="right">{formatDateTime(modified)}</TableCell>
              </TableRow>
              <TableRow
                key={"changed"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{t("changed")}</TableCell>
                <TableCell align="right">{formatDateTime(changed)}</TableCell>
              </TableRow>
              <TableRow
                key={"accessed"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{t("accessed")}</TableCell>
                <TableCell align="right">{formatDateTime(accessed)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <CloseModalButton onClose={onClose} />
      </Box>
    </Modal>
  )
}
