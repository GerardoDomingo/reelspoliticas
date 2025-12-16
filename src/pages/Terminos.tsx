import { Box, Paper, Typography } from "@mui/material";

export default function Terminos() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
        p: 10,
        pb: 17, // padding extra solo abajo
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
          Términos y Condiciones de Uso
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
          Aplicación de Gestión de Reels para Marketing Digital
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          Bienvenido a nuestra aplicación de gestión de reels. Esta plataforma
          ha sido diseñada específicamente para facilitar a profesionales del
          marketing digital, creadores de contenido, empresas y emprendedores la
          subida, organización, programación y análisis de reels de video
          destinados a campañas publicitarias, promoción de productos, servicios
          y estrategias de crecimiento en redes sociales.
        </Typography>

        <Typography variant="h6" gutterBottom mt={4}>
          1. Finalidad de la plataforma
        </Typography>
        <Typography paragraph>
          La aplicación tiene como objetivo principal ofrecer herramientas
          eficientes para la gestión integral de reels de video dentro de
          campañas de marketing digital. Esto incluye la subida de contenido
          multimedia, categorización por temas o campañas, planificación de
          publicaciones, edición básica de metadatos y visualización de
          estadísticas de uso interno. La plataforma no publica directamente en
          redes sociales externas, sino que sirve como repositorio y organizador
          privado para el usuario.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Aceptación de los términos
        </Typography>
        <Typography paragraph>
          Al registrarse, acceder o utilizar cualquier funcionalidad de esta
          aplicación, el usuario declara expresamente que ha leído, entendido y
          aceptado íntegramente los presentes Términos y Condiciones, así como
          la Política de Privacidad asociada. Si el usuario no está de acuerdo
          con alguno de los términos aquí establecidos, deberá abstenerse
          inmediatamente de utilizar la plataforma y eliminar cualquier cuenta
          creada.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Registro y información proporcionada por el usuario
        </Typography>
        <Typography paragraph>
          Para utilizar la aplicación, el usuario podrá crear una cuenta
          proporcionando datos como dirección de correo electrónico, nombre de
          usuario, contraseña y, opcionalmente, información adicional como
          nombre completo o empresa. Además, al subir reels, el usuario podrá
          incluir títulos, descripciones, etiquetas, categorías y los archivos
          de video correspondientes. Toda esta información será utilizada
          exclusivamente para el funcionamiento interno de la aplicación y la
          personalización de la experiencia del usuario.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Uso y protección de datos personales
        </Typography>
        <Typography paragraph>
          Nos comprometemos a tratar los datos personales del usuario de
          conformidad con la normativa vigente en materia de protección de datos
          (incluyendo, cuando corresponda, el Reglamento General de Protección
          de Datos - RGPD de la Unión Europea o legislaciones equivalentes). Los
          datos se almacenarán de forma segura, se utilizarán únicamente para
          los fines descritos y no serán compartidos, vendidos ni cedidos a
          terceros sin el consentimiento expreso del usuario, salvo en los casos
          exigidos por mandato legal o autoridad competente.
        </Typography>
        <Typography paragraph>
          El usuario tiene derecho en todo momento a acceder, rectificar,
          suprimir, oponerse o limitar el tratamiento de sus datos personales
          contactando con el responsable de la aplicación.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Derechos de propiedad intelectual sobre el contenido
        </Typography>
        <Typography paragraph>
          El usuario garantiza que es el legítimo titular de todos los derechos
          de propiedad intelectual (incluyendo derechos de autor, imagen y
          marcas) sobre los reels y materiales que suba a la plataforma, o que
          cuenta con las licencias y autorizaciones necesarias para su uso. La
          aplicación no adquiere ningún derecho de propiedad sobre el contenido
          subido; el usuario conserva la titularidad plena.
        </Typography>
        <Typography paragraph>
          No obstante, al subir contenido, el usuario concede a la plataforma
          una licencia limitada, no exclusiva y revocable para almacenar,
          procesar y mostrar dicho contenido exclusivamente dentro de la
          interfaz privada del usuario. La plataforma no se responsabiliza por
          posibles infracciones de derechos de terceros cometidas por los
          usuarios.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Responsabilidades del usuario y limitación de responsabilidad
        </Typography>
        <Typography paragraph>
          El usuario es el único responsable del contenido que suba, de su
          legalidad, veracidad y adecuación a la normativa vigente. La
          plataforma se proporciona “tal cual” y “según disponibilidad”, sin
          garantías expresas o implícitas de funcionamiento ininterrumpido,
          ausencia de errores o idoneidad para un fin particular.
        </Typography>
        <Typography paragraph>
          En ningún caso la plataforma o sus desarrolladores serán responsables
          por daños directos, indirectos, incidentales o consecuentes derivados
          del uso o imposibilidad de uso de la aplicación, incluyendo pérdida de
          datos, interrupciones del servicio o reclamaciones de terceros.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Prohibiciones y uso adecuado
        </Typography>
        <Typography paragraph>
          Queda expresamente prohibido utilizar la aplicación para subir
          contenido ilegal, difamatorio, discriminatorio, que incite al odio,
          pornográfico, violento o que vulnere derechos de terceros. La
          plataforma se reserva el derecho de eliminar cualquier contenido que
          considere inapropiado y de suspender o cancelar cuentas que incumplan
          estas normas.
        </Typography>

        <Typography variant="h6" gutterBottom>
          8. Modificaciones de los términos y de la plataforma
        </Typography>
        <Typography paragraph>
          Nos reservamos el derecho de modificar, actualizar o ampliar estos
          Términos y Condiciones en cualquier momento. Las modificaciones serán
          notificadas a los usuarios mediante aviso en la aplicación o por
          correo electrónico y entrarán en vigor a los 7 días de su publicación.
          El uso continuado de la plataforma tras dicha notificación implicará
          la aceptación de los nuevos términos.
        </Typography>
        <Typography paragraph>
          Asimismo, podemos actualizar, mejorar o discontinuar funcionalidades
          de la aplicación sin previo aviso.
        </Typography>

        <Typography variant="h6" gutterBottom>
          9. Terminación del servicio
        </Typography>
        <Typography paragraph>
          El usuario puede dejar de utilizar la aplicación y eliminar su cuenta
          en cualquier momento. La plataforma se reserva el derecho de suspender
          o terminar el acceso a cualquier usuario que incumpla estos términos o
          cuya actividad pueda perjudicar el funcionamiento del servicio.
        </Typography>

        <Typography variant="h6" gutterBottom>
          10. Legislación aplicable y resolución de conflictos
        </Typography>
        <Typography paragraph>
          Estos Términos y Condiciones se rigen por la legislación del país
          donde se encuentra establecido el responsable de la aplicación
          (especificar si aplica). Cualquier controversia derivada del uso de la
          plataforma será sometida a los tribunales competentes del domicilio
          del responsable, renunciando las partes a cualquier otro fuero que
          pudiera corresponderles.
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
