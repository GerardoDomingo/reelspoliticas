import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed" // 👈 fijo arriba
        color="primary"
        elevation={2}
        sx={{
          width: '100%', // 👈 de lado a lado
          top: 0,
          left: 0,
        }}
      >
        <Toolbar
          sx={{
            minHeight: 88, // 👈 más alto
            px: { xs: 2, md: 6 }, // espacio lateral interno
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* LOGO */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1,
            }}
          >
          ReelsRedForD
          </Typography>

          {/* MENÚ DESKTOP */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ fontSize: '1rem' }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ fontSize: '1rem' }}
            >
              Sobre nosotros
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ fontSize: '1rem' }}
            >
              Contacto
            </Button>
          </Box>

          {/* MENÚ MÓVIL */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon fontSize="large" />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                Inicio
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                Sobre nosotros
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                Contacto
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ESPACIADOR para que el contenido no quede debajo del header */}
      <Toolbar sx={{ minHeight: 88 }} />
    </>
  );
}
