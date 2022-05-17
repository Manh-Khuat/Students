import { styled } from "@mui/material/styles";
import {
  AppBar,
  Button,
  Container,
  Grid,
  MenuItem,
  Modal,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import UpdateStudents from "./UpdateStudents";
import { Field, Form } from "react-final-form";

const DentailStudents = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const students = useSelector((state) => state.students.students);
  const dentailStudent = students.find((student) => {
    return student.studentcode == id;
  });

  const onSubmit = () => {};

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

  const subject = [
    {
      label: "Math",
      point: dentailStudent.math,
    },
    {
      label: "Chemistry",
      point: dentailStudent.chemistry,
    },
    {
      label: "English",
      point: dentailStudent.english,
    },
    {
      label: "Physics",
      point: dentailStudent.physics,
    },
  ];

  const average = Number(
    (Number(dentailStudent.math) +
      Number(dentailStudent.chemistry) +
      Number(dentailStudent.english) +
      Number(dentailStudent.physics)) /
      4
  );

  return (
    <Box sx={{ marginTop: "60px" }}>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              DENTAIL STUDENT
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, padding: "36px 180px" }}>
          <Grid container spacing={4} columns={12}>
            <Grid item xs={4}>
              <Item>Name</Item>
            </Grid>
            <Grid item xs={8}>
              <ItemInfo>{dentailStudent.name}</ItemInfo>
            </Grid>
            <Grid item xs={4}>
              <Item>Sex</Item>
            </Grid>
            <Grid item xs={8}>
              <ItemInfo>{dentailStudent.gender}</ItemInfo>
            </Grid>
            <Grid item xs={4}>
              <Item>Group</Item>
            </Grid>
            <Grid item xs={2}>
              <ItemInfo>{dentailStudent.group}</ItemInfo>
            </Grid>
            <Grid item xs={4}>
              <Item>Class</Item>
            </Grid>
            <Grid item xs={2}>
              <ItemInfo>{dentailStudent.class}</ItemInfo>
            </Grid>
            <Grid item xs={4}>
              <Item>Teacher</Item>
            </Grid>
            <Grid item xs={8}>
              <ItemInfo>{dentailStudent.teacher}</ItemInfo>
            </Grid>
            <Grid item xs={4}>
              <Item>Average</Item>
            </Grid>
            <Grid item xs={8}>
              <ItemInfo>
                <Form
                  onSubmit={onSubmit}
                  initialValues={{}}
                  render={({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                      <Field  className="subject-outline" component="select">
                        <option  value={average}>{`Average: ${average}`}</option>
                        <option  disabled value="1">{`Math: ${dentailStudent.math}`}</option>
                        <option disabled value="2">{`Chemistry: ${dentailStudent.chemistry}`}</option>
                        <option disabled value="3">{`English: ${dentailStudent.english}`}</option>
                        <option disabled value="4">{`Physics: ${dentailStudent.physics}`}</option>
                      </Field>
                    </form>
                  )}
                />
              </ItemInfo>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="space-between">
              <Link to="/">
                <Button variant="contained">BACK</Button>
              </Link>

              <Button onClick={handleOpen} variant="contained" disableElevation>
                UPDATE
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "20%",
                    padding: "48px",
                    boxShadow: "0 0 15px 5px #fff",
                    backgroundColor: "#fff",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Container>
                    <UpdateStudents
                      onClick={handleClose}
                      dentailStudent={dentailStudent}
                    />
                  </Container>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DentailStudents;
