import {
  AppBar,
  Box,
  Container,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Form } from "react-final-form";

const AddStudents = () => {
  const onSubmit = () => {};
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ADD STUDENT
            </Typography>
          </Toolbar>
        </AppBar>
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Box>
                <Grid container columns={12}>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                      sx={{
                        width: '100%'
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-password-input"
                      label="Password1"
                      type="password1"
                      autoComplete="current-password"
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </Box>
            </form>
          )}
        />
      </Container>
    </Box>
  );
};

export default AddStudents;
