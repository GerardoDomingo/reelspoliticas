import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%', // 👈 de lado a lado
        position: 'fixed', // 👈 fijo abajo
        bottom: 0,
        left: 0,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.appBar, // mismo nivel que header
      }}
    >
      {/* CONTENIDO INTERNO */}
      <Box
        sx={{
          px: { xs: 2, md: 6 }, // padding interno, no limita el ancho
          py: 3, // altura cómoda
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: 'primary.main', mb: 1 }}
        >
          © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1.5,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            component={Link}
            to="/terminos"
            variant="body2"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Términos de uso
          </Typography>

          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            |
          </Typography>

          <Typography
            component={Link}
            to="/politica"
            variant="body2"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Política de privacidad
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
