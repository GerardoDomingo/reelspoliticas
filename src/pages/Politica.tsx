import { Box, Paper, Typography } from "@mui/material";

export default function PoliticaPrivacidad() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
        p: 10,
        pb: 17,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "90%",
          maxWidth: 900,
          bgcolor: "#e3f2fd",
          borderRadius: 4,
          p: 7,
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Política de Privacidad
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
          Aplicación de Gestión de Reels para Marketing Digital - RedForD
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          En RedForD valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos la información que nos proporcionas al usar nuestra aplicación de gestión de reels para marketing digital.
        </Typography>

        <Typography variant="h6" gutterBottom mt={4}>
          1. Responsable del tratamiento de datos
        </Typography>
        <Typography paragraph>
          El responsable del tratamiento de los datos personales es:
          <br />
          <strong>RedForD</strong>
          <br />
          Domicilio: José Trinidad Villagómez 228, Centro, Monterrey, Nuevo León, C.P. 64000, México.
          <br />
          Correo electrónico de contacto para temas de privacidad y ejercicio de derechos ARCO: <strong>privacidad@redford.com.mx</strong>
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Datos que recopilamos
        </Typography>
        <Typography paragraph>
          Recopilamos los siguientes tipos de datos:
        </Typography>
        <Typography component="div" paragraph>
          <ul>
            <li>
              <strong>Datos de registro:</strong> Dirección de correo electrónico,
              nombre de usuario y contraseña (almacenada de forma cifrada).
            </li>
            <li>
              <strong>Datos opcionales:</strong> Nombre completo, nombre de la
              empresa u organización, foto de perfil y cualquier información que
              decidas proporcionar voluntariamente.
            </li>
            <li>
              <strong>Datos de contenido:</strong> Títulos, descripciones,
              etiquetas, categorías y archivos de video (reels) que subas.
            </li>
            <li>
              <strong>Datos de uso:</strong> Información sobre tu interacción
              con la aplicación (funciones utilizadas, fecha y hora de acceso),
              recopilada automáticamente mediante cookies y tecnologías similares.
            </li>
            <li>
              <strong>Datos técnicos:</strong> Dirección IP, tipo de dispositivo,
              sistema operativo, navegador y otros datos de conexión.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Finalidades del tratamiento
        </Typography>
        <Typography paragraph>
          Utilizamos tus datos para:
        </Typography>
        <Typography component="div" paragraph>
          <ul>
            <li>Proporcionar y mantener el servicio de la aplicación.</li>
            <li>Gestionar tu cuenta y permitir la subida, organización y visualización de reels.</li>
            <li>Personalizar tu experiencia en la plataforma.</li>
            <li>Enviar comunicaciones operativas esenciales (confirmaciones, avisos de seguridad).</li>
            <li>Mejorar la aplicación mediante análisis estadístico anónimo.</li>
            <li>Cumplir con obligaciones legales aplicables.</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Base legal del tratamiento
        </Typography>
        <Typography paragraph>
          El tratamiento se basa en:
        </Typography>
        <Typography component="div" paragraph>
          <ul>
            <li>La ejecución del contrato de uso de la aplicación (aceptación de Términos y Condiciones).</li>
            <li>Tu consentimiento cuando sea necesario.</li>
            <li>Nuestro interés legítimo en mejorar el servicio y garantizar la seguridad.</li>
            <li>Obligaciones legales (Ley Federal de Protección de Datos Personales en Posesión de los Particulares en México).</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Compartición de datos con terceros
        </Typography>
        <Typography paragraph>
          No vendemos ni compartimos tus datos personales con terceros para fines comerciales. Solo se compartirán en casos estrictamente necesarios:
        </Typography>
        <Typography component="div" paragraph>
          <ul>
            <li>Con proveedores de servicios (hosting, almacenamiento en la nube, análisis anónimo) que actúan como encargados del tratamiento y están obligados a proteger tus datos.</li>
            <li>Cuando lo exija la ley o una autoridad competente.</li>
            <li>En caso de fusión, adquisición o transferencia de activos.</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Medidas de seguridad
        </Typography>
        <Typography paragraph>
          Aplicamos medidas técnicas y organizativas adecuadas (cifrado, firewalls, controles de acceso) para proteger tus datos contra acceso no autorizado, pérdida o alteración.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Conservación de los datos
        </Typography>
        <Typography paragraph>
          Conservamos tus datos mientras mantengas tu cuenta activa o sea necesario para prestar el servicio. Al eliminar tu cuenta, borraremos tus datos en un plazo máximo de 30 días, salvo obligaciones legales de conservación.
        </Typography>

        <Typography variant="h6" gutterBottom>
          8. Tus derechos ARCO
        </Typography>
        <Typography paragraph>
          Tienes derecho a:
        </Typography>
        <Typography component="div" paragraph>
          <ul>
            <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti.</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
            <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos por motivos legítimos.</li>
          </ul>
        </Typography>
        <Typography paragraph>
          Para ejercer tus derechos ARCO, envía un correo a <strong>privacidad@redford.com.mx</strong> con el asunto “Ejercicio de Derechos ARCO”. Te responderemos en un plazo máximo de 20 días hábiles.
        </Typography>

        <Typography variant="h6" gutterBottom>
          9. Cookies y tecnologías similares
        </Typography>
        <Typography paragraph>
          Usamos cookies esenciales para el funcionamiento de la aplicación y cookies analíticas opcionales. Puedes gestionar tus preferencias en los ajustes de la app.
        </Typography>

        <Typography variant="h6" gutterBottom>
          10. Cambios en la Política de Privacidad
        </Typography>
        <Typography paragraph>
          Podemos actualizar esta política. Los cambios se publicarán en la aplicación y, si son significativos, te notificaremos por correo. El uso continuado implica aceptación de los cambios.
        </Typography>

        <Typography
          paragraph
          align="center"
          sx={{ mt: 6, fontStyle: "italic" }}
        >
          Última actualización: 15 de diciembre de 2025
        </Typography>
      </Paper>
    </Box>
  );
}