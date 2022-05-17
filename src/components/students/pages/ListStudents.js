import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../../../redux/features/studentSlice";
import { Link } from "react-router-dom";

export default function ListStudents() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const handleDeleteClick = (value) => {
    dispatch(deleteStudent(value));
  };
  const search = useSelector((state) => state.students.search);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Student code</StyledTableCell>
            <StyledTableCell align="right">Teacher</StyledTableCell>
            <StyledTableCell align="right">Average</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {search
            ? students
                .filter((student) => {
                  return student.name.includes(search);
                })
                .map((stu) => {
                  return (
                    <StyledTableRow key={stu.studentcode}>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/student/${stu.studentcode}`}>
                          {stu.name}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {stu.studentcode}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {stu.teacher}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {(stu.math +
                          stu.chemistry +
                          stu.english +
                          stu.physics) /
                          4}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {Number(
                          (stu.math +
                            stu.chemistry +
                            stu.english +
                            stu.physics) /
                            4
                        ) > 5
                          ? "Pass"
                          : "Failed"}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          onClick={() => handleDeleteClick(stu.studentcode)}
                          variant="contained"
                          color="error"
                        >
                          Delete
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })
            : students.map((student) => (
                <StyledTableRow key={student.studentcode}>
                  <StyledTableCell component="th" scope="row">
                    <Link to={`/student/${student.studentcode}`}>
                      {student.name}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {student.studentcode}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {student.teacher}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {(student.math +
                      student.chemistry +
                      student.english +
                      student.physics) /
                      4}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {Number(
                      (student.math +
                        student.chemistry +
                        student.english +
                        student.physics) /
                        4
                    ) > 5
                      ? "Pass"
                      : "Failed"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => handleDeleteClick(student.studentcode)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
