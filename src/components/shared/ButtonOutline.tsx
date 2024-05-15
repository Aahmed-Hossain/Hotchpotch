import { Button } from '@mui/material';
import React from 'react'


interface ButtonOutlineProps{
    children: React.ReactNode;
}

const ButtonOutline:React.FC<ButtonOutlineProps>  = ({children}) => {
  return (
    <Button
        sx={{
          font: "16px",
          textTransform: "capitalize",
          border: "1px solid #888",
          "&:hover": { borderColor: "#E1E1E2" },
          color: "white",
        }}
        variant="outlined"
      >
        {children}
      </Button>
  )
}

export default ButtonOutline