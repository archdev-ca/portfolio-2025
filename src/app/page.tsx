"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

const TimelineItems = [
  {
    dateStart: "",
    dateEnd: "",
    company: "",
    title: "",
  },
  {
    dateStart: "",
    dateEnd: "",
    company: "",
    title: "",
  },
];

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="sticky" elevation={0} color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Image src="/images/logo_75.png" width={50} height={50} alt="" />
            <Stack direction="row" alignItems="center" sx={{ ml: "auto" }}>
              <Button sx={{ color: "white" }} variant="link">
                About Me
              </Button>
              <Button sx={{ color: "white" }} variant="link">
                Work Experience
              </Button>
              <Button sx={{ color: "white" }} variant="link">
                Works
              </Button>
              <Button sx={{ color: "white" }} variant="link">
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <section>
          <Timeline>
            {TimelineItems.map((item, i) => (
              <TimelineItem>
                <TimelineOppositeContent>2024</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Datomar Labs</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </section>
      </Container>
    </Container>
  );
}
