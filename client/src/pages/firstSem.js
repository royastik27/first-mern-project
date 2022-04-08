import React from "react";

// MUI CARD
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red, blue } from "@mui/material/colors";
import { indigo } from "@mui/material/colors";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";

class HomeTask extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
              C
            </Avatar>
          }
          title="Hometask"
          subheader="Astik Roy - 05/04/2022"
        />
        <CardContent>
          {/* <Typography variant="subtitle1" color="text.secondary">
            This is HomeTask.
          </Typography> */}
          Your task is to read the following book as much pages as you can.
          During reading don't ever miss a SINGLE word. Deeply UNDERSTAND what
          is written. Moreover, you have to PRACTICE on Codeblocks. You will
          find the guidline to install Codeblocks in the book. If you face any
          problem during installation, follow youtube [ Try searching using the
          following keywords: 'how to install codeblocks on windows (or,
          whatever operating system you are using)' ].<br></br> If you don't
          have any computer, you can also practice using your android
          smartphone. CppDroid is one of the popular C/C++ IDEs for smartphone.
          Download and install it from{" "}
          <a
            href="https://play.google.com/store/apps/details?id=name.antonsmirnov.android.cppdroid"
            style={{ color: "brown" }}
          >
            Play Store
          </a>
          .<br></br>
          <b>
            <a href="/files/computer_programming.pdf">Download the book</a>
          </b>
          <br></br>
          <b>
            <a
              href="https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe/download"
              style={{ color: "dodgerblue" }}
            >
              Download Codeblocks
            </a>
          </b>
          <br></br>
          <i>Tips to be a good programmer:</i> Practice, practice and PRACTICE.
          <br></br>
          Happy coding 😉
        </CardContent>
      </Card>
    );
  }
}

export default function fristSem() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <HomeTask />
    </main>
  );
}
