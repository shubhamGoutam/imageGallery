import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActionArea, CardHeader, Avatar, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styles.css";

const CardsApp = ({ items }) => {
  const d = new Date().toDateString();
  return (
    <>
      <Card
        className="card-container"
        sx={{ maxWidth: 445, marginTop: "10px", backgroundColor: "#485460" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#8e24aa" }} aria-label="recipe">
              {items.avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          sx={{ color: "white" }}
          title={items.name}
          subheader={d}
        />
        <CardActionArea>
          <Box className="cardImg">
            <CardMedia
              className="imge"
              component="img"
              height="340"
              image={items.image}
              alt={items.name}
            />
          </Box>
          <CardContent>
            <Typography variant="h6" sx={{ color: "white" }}>
              {items.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white" }}
              color="text.secondary"
            >
              Uploaded {d}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            component={Link}
            to={`/about/${items.id}`}
            size="large"
            variant="contained"
            color="secondary"
            fullWidth
          >
            View Detail
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardsApp;
