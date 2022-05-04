import {
  TextField,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import React, { useState, useEffct } from "react";
import { Link, useNavigate } from "react-router-dom";

const Forms = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const Navigate = useNavigate();
  const navigate = useNavigate();
  const handleBtn = () => {
    const data = { Name, Email, Pass };
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    setName("");
    setEmail("");
    setPass("");
    Navigate("/");
  };

  //  useEffct(()=>{
  //      const auth=localStorage.getItem("user")
  //      if(auth){
  //        navigate("/")
  //      }
  //  })
  return (
    <>
      <Card style={{ maxWidth: 450,backgroundColor:"#95a5a6", padding: "20px 5px", margin: "12px auto" }}>
        <CardContent>
          <form>
            <Grid container>
              <Typography mb={3} variant="h5" color="secondary">
                Register
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
                  type="email"
                  placeholder="Enter first name"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  margin="normal"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                <Button mb={3} component={Link} to="/login" color="secondary">
                  AllReady/Login
                </Button>
              </Grid>

              <Button
                sx={{ marginTop: "6px" }}
                fullWidth
                onClick={handleBtn}
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
