import { Box, Container, Stack, Button, IconButton, Badge} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function NavbarHome (props: any) {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(true);

  useEffect( () => {
    setCount(count + 1);
  }, [value]);

  return (
  <div className="format home_navbar">
  <Container>
  <Stack flexDirection={'row'} className='navbar_config' justifyContent={'space-between'}>

  <Box className='hover_line' >
  <img src='icons/Papay.svg' />
  </Box>

  <Stack className='navbar_links' flexDirection={'row'} justifyContent='space-evenly' alignItems={'center'}>
  <Box className='hover_line' onClick={props.setPath}>
  <NavLink to="/" activeClassName='underline'>Main Page</NavLink>
  </Box>
  <Box className='hover_line' onClick={props.setPath}>
  <NavLink to="/restaurant" activeClassName='underline'>Restaurants</NavLink>
  </Box>
  <Box className='hover_line' onClick={props.setPath}>
  <NavLink to="/orders" activeClassName='underline'>Order</NavLink>
  </Box>
  <Box className='hover_line' onClick={props.setPath}>
  <NavLink to="/community" activeClassName='underline'>Community</NavLink>
  </Box>
  <Box className='hover_line' onClick={props.setPath}>
  <NavLink to="/help" activeClassName='underline'>Help</NavLink>
  </Box>

  {/* SHOPPING CART */}
  <Box>
    <Box className='hover_line'>
      <IconButton aria-label='cart' id='basic_button' aria-controls={undefined} aria-haspopup='true' aria-expanded={undefined} />
      <Badge badgeContent={3} color='secondary'>
        <img src="/icons/shopping-cart.svg" alt="Shopping Cart" />
      </Badge>
    </Box>
  </Box>
  <Box>
  <Button className='hover-line' variant='contained' style={{width: '77pxpx', height: '36px', background: '#1976d2', color: '#fff'}}>SIGN UP</Button>
  </Box>
  </Stack>
  </Stack>

  {/* HEADER INFORMATION */}
  <Stack className='header_info'>
  <Stack justifyContent={'column'} style={{marginTop: '86px', marginLeft: '24px'}}>
  <Box className='welcom_icon'><img src="/icons/welcomPapay.svg" alt="welcomePapayIcon" /></Box>
  <Box className='define_restaurant'>The Authentic
  Restaurant & Cafe</Box>
  <Box className='timeline_service'>{count} soat xizmatingizdamiz.</Box>
  <Box sx={{mt: '90px'}}>
    <Button
    variant='contained'
    style={{width: '210px',
    height: '60px',
    background: '#1976d2',
    color: '#fff',
    }}
    onClick={() => setValue(!value)}  >RO'YHATDAN O'TISH</Button>
  </Box>
  </Stack>
  <Box className='big_img'></Box>
  </Stack>

  </Container>
  </div>);
}
