// /config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  
  // ESTA ES LA CONFIGURACIÓN CRÍTICA PARA APP_KEYS
  app: {
    // env.array() lee la cadena de 'APP_KEYS' y la convierte en un array de claves.
    keys: env.array('APP_KEYS'), 
  },
  
  // Puedes dejar el resto de tu configuración aquí...
});
