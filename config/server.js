// /config/server.js

module.exports = ({ env }) => ({
  // Estas líneas resuelven los errores de HOST y PORT
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  
  app: {
    // La función env.array() convierte la cadena de la variable de entorno 
    // 'APP_KEYS' en un array de strings, que es lo que Strapi requiere.
    keys: env.array('APP_KEYS'),
  },

  // Puedes añadir otras configuraciones aquí si es necesario
});
