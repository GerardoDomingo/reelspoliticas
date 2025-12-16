// src/layouts/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',        // 🔑
          maxWidth: '100vw',    // 🔑
          overflowX: 'hidden',  // 🔑 evita scroll raro
          bgcolor: 'background.default',
        }}
      >
        <Header />

        {/* MAIN FULL WIDTH */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: '100%',
          }}
        >
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
