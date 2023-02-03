import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Header.scss'
import {Link} from 'react-router-dom'
// import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const nav = useLocation()
  const createPers = useLocation()
  console.log(nav.pathname)
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='header__content'>
            {
              nav.pathname == '/'?
              <div></div>
              :
              <Button>
                <Link className='header__content_link' to='/'>Главная</Link>
              </Button>
            }
            {
              createPers.pathname == '/newPerson'?
              <div></div>
              :
              <Link to='/newPerson' className='header__content_link'>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                    <AddCircleIcon/>
                </IconButton>
              </Link>
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header