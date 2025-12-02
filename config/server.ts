export default ({ env }) => ({
  // Define el host para escuchar en todas las interfaces del contenedor de Render.
  host: env('HOST', '0.0.0.0'),

  // Define el puerto, leyendo la variable de entorno PORT (1337 por defecto).
  port: env.int('PORT', 4000),
  
  // Configuración de la aplicación (resolviendo el error de Middleware "strapi::session")
  app: {
    // Lee la variable APP_KEYS de Render y la convierte en un array de strings.
    keys: env.array('APP_KEYS'), 
  },
  
  // Opcional: Configuración del entorno de producción
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Si tienes configuración de administrador específica:
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'), 
    },
  },
});
