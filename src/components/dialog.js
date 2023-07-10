import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.png";
import NAME_INFO_MAP from "../constants/nameInfoMapper";
import formatMoney from "../utils/formatMonet";

const DialogModal = ({ closeHandler, open, item }) => {
  const getSpecialFormat = (key, value) => {
    switch (key) {
      case "lastDate":
        return new Date(value + "-23").toLocaleDateString();
      case "costM":
        return formatMoney(Number(value));
      case "estimatedCost":
        return formatMoney(Number(value));
      case "area":
        return `${value} m²`;
      default:
        return value;
    }
  };

  return (
    <Dialog open={open} sx={{ padding: 20 }} className="responsive-dialog">
      <img
        src={logo}
        style={{ margin: "0 auto", marginTop: 20 }}
        alt={"Dialog Logo"}
        width={100}
      />
      <DialogTitle>
        <Typography textAlign={"center"} fontSize={22}>
          <b>Ficha Descriptiva #{item ? item.id : null}</b>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TableContainer>
          <TableBody>
            {Object.keys(NAME_INFO_MAP).map((key) =>
              item && item[key] ? (
                <TableRow>
                  <TableCell sx={{ fontSize: 18 }} align="left">
                    <b>{NAME_INFO_MAP[key]}</b>
                  </TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">
                    {getSpecialFormat(key, item[key])}
                  </TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="error" variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
