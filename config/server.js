// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Es FUNDAMENTAL que esto lea la variable de entorno y la convierta a un array.
    keys: env.array('APP_KEYS'), 
  },
});
