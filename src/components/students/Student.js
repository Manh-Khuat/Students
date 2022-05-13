import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ListStudents from "./pages/ListStudents";
import NavBarStudent from "./pages/NavBarStudents";

const Student = () => {
  return (
    
      <Box sx={{marginTop: '60px'}}>
        <Container>
          <ListStudents />
        </Container>
      </Box>
    
  );
};

export default Student;
