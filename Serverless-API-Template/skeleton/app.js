module.exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowedOrigins = [origin]; // Puedes agregar más hosts permitidos si es necesario.

  const responseHeaders = {
    'Access-Control-Allow-Origin': allowedOrigins.join(', '),
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': true,
  };

  const now = new Date();
  const hora = now.toLocaleTimeString();
  const fecha = now.toLocaleDateString();

  // Construye el mensaje con la hora y la fecha actual.
  const message = `Hola, mundo, son las ${hora} de ${fecha}`;
  const description = 'Esta es la descripcion de esta app: ${{values.description}}'

  // Para otras solicitudes, respondemos con los encabezados CORS y el cuerpo de la respuesta.
  return {
    statusCode: 200,
    headers: responseHeaders,
    body: JSON.stringify({ message, description }),
  };
};
