module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Esta sección es CRÍTICA
  app: {
    // Strapi espera un array de claves. 
    // env.array() divide la cadena de la variable de entorno por comas.
    keys: env.array('APP_KEYS'), 
  },
});
