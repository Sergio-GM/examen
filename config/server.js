// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // ESTO ES LO CRÍTICO: Debe leer APP_KEYS y convertirlo en un array.
    keys: env.array('APP_KEYS'), 
  },
});
