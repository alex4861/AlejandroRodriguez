import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import swift from "../images/swift.png";
import swiftui from "../images/swiftui.png";
import kotlin from "../images/kotlin.png";
import StarRating from "./StarRating";
import flutter from "../images/flutter.png";
import react from "../images/react.png";

const Technologies = () => {
  const classes = useStyles();

  const skills = [
    {
      year: "",
      src: swift,
      title: "Swift",
      stars: 5,
    },
    {
      year: "",
      src: swiftui,
      title: "Swift UI",
      stars: 4,
    },
    {
      year: "",
      src: kotlin,
      title: "Kotlin",
      stars: 3,
    },
    {
      year: "",
      src: flutter,
      title: "Flutter",
      stars: 4,
    },
    {
      year: "",
      src: react,
      title: "React js",
      stars: 2,
    },
  ];

  return (
    <Timeline align="left">
      {skills.map(({ year, src, title, stars }, index) => (
        <TimelineItem key={index} color = "#732240">
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent >
          <TimelineSeparator color = "red">
            <TimelineDot color="secondary">
              <img src={src} alt={title} className={classes.customlogo}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <StarRating stars={stars} />
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: "#732240",
  },
  customlogo: {
    width: "30px",
    objectFit: "cover",
  },
}));

export default Technologies;
