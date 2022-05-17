import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addStudent } from "../../../redux/features/studentSlice";

const AddStudents = () => {
  const dispatch = useDispatch()
  const onSubmit = () => {};
  const history = useNavigate()
  const handleCreateClick = (value) => {
    dispatch(addStudent({
      studentcode: value.studentcode,
        name: value.name,
        chemistry: Number(value.chemistry),
        class: value.class,
        english: Number(value.english),
        gender: value.gender,
        group: value.group,
        math: Number(value.math),
        physics: Number(value.physics),
        teacher: value.teacher,
    }))
    history('/')
  }
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
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Box sx={{ padding: "48px 100px" }}>
                <Grid alignItems="center" spacing={5} container columns={12}>
                <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Student code
                  </Grid>
                  <Grid item xs={7.65}>
                    <Field
                      name="studentcode"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Name
                  </Grid>
                  <Grid item xs={7.65}>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Gender
                  </Grid>
                  <Grid item xs={8}>
                    <Field name="gender" component="select">
                      <option />
                      <option value="Male">Male</option>
                      <option value="Gril">Gril</option>
                    </Field>
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Group
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="group" component="select">
                      <option />
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Field>
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={2}
                  >
                    Class
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="class" component="select">
                      <option />
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </Field>
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Teacher
                  </Grid>
                  <Grid item xs={7.65}>
                    <Field
                      name="teacher"
                      component="input"
                      type="text"
                      placeholder="Teacher"
                    />
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Math
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="math" component="select">
                      <option />
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Field>
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={2}
                  >
                    Physics
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="physics" component="select">
                      <option />
                      <option />
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Field>
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={3}
                  >
                    Chemistry
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="chemistry" component="select">
                      <option />
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Field>
                  </Grid>
                  <Grid
                    sx={{ fontSize: "20px", textAlign: "right" }}
                    item
                    xs={2}
                  >
                    English
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="english" component="select">
                      <option />
                      <option />
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Link className="link-outline" to="/">
                      <Button variant="contained">BACK</Button>
                    </Link>
                  </Grid>
                  <Grid textAlign="right" item xs={6}>
                    <Button  onClick={() => handleCreateClick(values)} variant="contained">CREATE</Button>
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
