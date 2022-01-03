import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function HOME() {
  return (
    <Container component="main" >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h1">
            Hello Engineer
          </Typography>
          <Typography variant="h2"  align="left" color="primary">Azure Devops</Typography>
          {/* Setting the text to center with align prop */}
          <Typography align="left" color="primary" variant="h2">
            Jenkins
          </Typography>
          {/* Setting the text color to primary*/}
          <Typography color="primary" align="left" variant="h2">
            Ansible
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
