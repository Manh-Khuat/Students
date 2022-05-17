import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { updateStudent } from "../../../redux/features/studentSlice";

const UpdateStudents = ({ dentailStudent, onClick }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#e4e0e0",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const ItemInfo = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const onSubmit = () => {};
  const handleUpdateClick = (value) => {
    dispatch(
      updateStudent({
        studentcode: dentailStudent.studentcode,
        name: dentailStudent.name,
        chemistry: value.chemistry || dentailStudent.chemistry,
        class: dentailStudent.class,
        english: value.english || dentailStudent.english,
        gender: dentailStudent.gender,
        group: dentailStudent.group,
        math: value.math || dentailStudent.math,
        physics: value.physics || dentailStudent.physics,
        teacher: dentailStudent.teacher,
      })
    );
    onClick();
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} rowSpacing={2} columns={12}>
              <Grid item xs={6}>
                <Item>Math</Item>
              </Grid>
              <Grid item xs={6}>
                <ItemInfo>
                  <Field className="subject" name="math" component="select">
                    <option value={dentailStudent.math}>
                      {dentailStudent.math}
                    </option>
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
                </ItemInfo>
              </Grid>
              <Grid item xs={6}>
                <Item>Chemistry</Item>
              </Grid>
              <Grid item xs={6}>
                <ItemInfo>
                  <Field
                    className="subject"
                    name="chemistry"
                    component="select"
                  >
                    <option value={dentailStudent.chemistry}>
                      {dentailStudent.chemistry}
                    </option>
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
                </ItemInfo>
              </Grid>
              <Grid item xs={6}>
                <Item>English</Item>
              </Grid>
              <Grid item xs={6}>
                <ItemInfo>
                  <Field className="subject" name="english" component="select">
                    <option value={dentailStudent.english}>
                      {dentailStudent.english}
                    </option>
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
                </ItemInfo>
              </Grid>
              <Grid item xs={6}>
                <Item>Physics</Item>
              </Grid>
              <Grid item xs={6}>
                <ItemInfo>
                  <Field className="subject" name="physics" component="select">
                    <option value={dentailStudent.physics}>
                      {dentailStudent.physics}
                    </option>
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
                </ItemInfo>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={onClick} variant="contained" disableElevation>
                  BACK
                </Button>
              </Grid>
              <Grid textAlign="right" item xs={6}>
                <Button
                  onClick={() => handleUpdateClick(values)}
                  variant="contained"
                  disableElevation
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      )}
    />
  );
};

export default UpdateStudents;
