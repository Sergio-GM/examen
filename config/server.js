// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Usa 'keys' y 'env.array'
    keys: env.array('APP_KEYS'), 
  },
});
