import {
  Box,
  Modal,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
} from "@mui/material"
import prettyBytes from "pretty-bytes"

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
}

export default function FileDetails({ file, open, onClose }) {
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
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow
                key={"name"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Name
                </TableCell>
                <TableCell align="right">{name}</TableCell>
              </TableRow>
              {!isDirectory && (
                <TableRow
                  key={"extension"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Extension
                  </TableCell>
                  <TableCell align="right">{extension}</TableCell>
                </TableRow>
              )}
              <TableRow
                key={"size"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Size
                </TableCell>
                <TableCell align="right">{prettyBytes(size)}</TableCell>
              </TableRow>

              <TableRow
                key={`birthtime`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Birthtime
                </TableCell>
                <TableCell align="right">{birthtime}</TableCell>
              </TableRow>
              <TableRow
                key={"modified"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Modified
                </TableCell>
                <TableCell align="right">{modified}</TableCell>
              </TableRow>
              <TableRow
                key={"changed"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Changed
                </TableCell>
                <TableCell align="right">{changed}</TableCell>
              </TableRow>
              <TableRow
                key={"accessed"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Accessed
                </TableCell>
                <TableCell align="right">{accessed}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  )
}
