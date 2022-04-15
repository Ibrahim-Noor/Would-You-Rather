import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';


const HOME = 'Home';
const ADD = 'Add';
const LEADERBOARD = 'Leaderboard'

const pages = [HOME, ADD, LEADERBOARD];
const pageLinks = {
  [HOME]: '/',
  [ADD]: '/add',
  [LEADERBOARD]: '/leaderboard'
};

const Navbar = props => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={pageLinks[page]}
                style={{ color: 'rgb(255,255,255)', textDecoration: 'none', marginRight: '20px' }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }} style={{ marginRight: '20px' }}>
            <Typography variant='p'>
              {props.name}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }} style={{ marginRight: '20px' }}>
              <Avatar alt={props.name} src={props.avatarURL}  />
          </Box>
          <Box sx={{ flexGrow: 0 }} style={{ marginRight: '20px' }}>
            <Button onClick={() => {
              history.push('/');
              props.logout();
            }} variant="primary" color="secondary">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;