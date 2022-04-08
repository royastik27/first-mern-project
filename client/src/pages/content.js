import React from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

// MUI CARD
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

// COOKIE KATCHUP
const cookies = new Cookies();

if (cookies.get("favs") === undefined) {
  // console.log("cookie created");
  cookies.set("favs", "0,2", {
    path: "/",
    expires: new Date(Date.now() + 60 * 24 * 3600000),
  });
}

class MainContent extends React.Component {
  state = {
    data: { title: "", author: "", date: "", content: "" },
    favourite: false,
  };

  makeCookie() {
    console.log("Adding to favourites...");
    const val = this.state.favourite ? false : true;
    if (val) {
      // get id
      const id = parseInt(this.props.id);
      // make cookie
      // cookies;
    }
    this.setState({ favourite: val });
  }
  makeCookie = this.makeCookie.bind(this);

  async componentDidMount() {
    const id = parseInt(this.props.id);
    const response = await fetch(`/api/contents/${id}`);
    const data = await response.json();
    this.setState({ data: data.data });

    // GET COOKIE
    const cookie = cookies.get("favs");
    let favs = cookie.split(",");
    favs = favs.map((el) => parseInt(el));

    // CHANGE STATE
    if (favs.findIndex((el) => el === id) != -1)
      this.setState({ favourite: true });
  }

  render() {
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {this.state.data.author[0]}
            </Avatar>
          }
          title={this.state.data.title}
          subheader={this.state.data.author + " - " + this.state.data.date}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {this.state.data.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={this.makeCookie}
            style={this.state.favourite ? {} : { color: "pink" }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default function Content() {
  const params = useParams();
  return (
    <main style={{ padding: "1rem 0" }}>
      <MainContent id={params.id} />
    </main>
  );
}
