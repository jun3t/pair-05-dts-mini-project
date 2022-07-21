import { Box } from "@mui/system";
import { Container } from "@mui/system";
// import { Link } from "@mui/material";
// import Grid from "@mui/system/Unstable_Grid/Grid";

export default function Footer() {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 4 }}
        py={{ xs: 5, sm: 8 }}
        style={{backgroundColor:'#1976d2'}}
        color="white"
      >
        <Container maxWidth="lg">
          {/* <Grid container spacing={5}>
            <Grid xs={12} sm={4}>
              <Box>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid xs={12} sm={4}>
              <Box>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid xs={12} sm={4}>
              <Box>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid> */}
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Copyright &copy; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </>
  );
}