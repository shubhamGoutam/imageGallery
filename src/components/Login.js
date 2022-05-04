import {
  TextField,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  const [Name, setName] = useState("");

  const [Pass, setPass] = useState("");

  const handleBtn = (e) => {
    e.prevent.default();
    const data = { Name, Pass };
    console.log(data);
  };
  return (
    <>
      <Card style={{ maxWidth: 450,backgroundColor:"#95a5a6", padding: "20px 5px", margin: "12px auto" }}>
        <CardContent>
          <form>
            <Grid container>
              <Typography pr={2} mb={2} color="secondary">
                Login User
              </Typography>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder="Enter first name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder="Enter password"
                  label="Passwaord"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  margin="normal"
                  value={Pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                <Button component={Link} to="/signin" color="secondary">
                  AllReady/SignIn
                </Button>
              </Grid>

              <Button
                sx={{ marginTop: "12px" }}
                fullWidth
                onClick={(e) => handleBtn(e)}
                color="secondary"
                type="submit"
                variant="contained"
              >
                Sign in
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Forms;
