import React from 'react'
import { HeaderComp } from '../components/HeaderComp'
import { MenuComp } from '../components/MenuComp'
import { ContentComp } from '../components/ContentComp'
import { FooterComp } from '../components/FooterComp'
import { Box, Stack } from '@mui/material'

function Home() {
  return (
    <>
        <HeaderComp/>
        <div>
          <Box>
            <Stack direction="row" spacing={2} justifyContent="space-around">
              <MenuComp />
              <ContentComp />
              <FooterComp />
            </Stack>
          </Box>
        </div>
    </>
  )
}

export default Home