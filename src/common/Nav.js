import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#F8FAFC" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Pacifico",
              color: "#212B36",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Naija Radio Stream
          </Typography>
          <Button
            disableRipple
            disabled
            disableFocusRipple
            disableTouchRipple
            sx={{ textTransform: "capitalize", color: "#212B36" }}
          >
            Loveday
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
