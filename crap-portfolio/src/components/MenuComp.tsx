import { Box } from '@mui/material'
import React from 'react'

export const MenuComp = () => {
  return (
    <Box bgcolor="cyan" flex={1} p={2}
    sx={{ display:{ xs: "none", sm:"none", md: "block" } }}>
        <nav>
            Menu
        </nav>
    </Box>
  )
}
