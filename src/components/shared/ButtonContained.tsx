import React from 'react';
import { Button } from "@mui/material";

interface ButtonContainedProps {
    children: React.ReactNode;
  }

const ButtonContained: React.FC<ButtonContainedProps> = ({children}) => {
  return (
    <Button
        sx={{
          color: "white",
          background: "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)",
          textTransform: "capitalize",
        }}
        variant="contained"
      >
        {children}
      </Button>
  )
}

export default ButtonContained