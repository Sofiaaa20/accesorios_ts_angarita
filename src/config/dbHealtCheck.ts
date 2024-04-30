import db from './config-db';

const checkDatabaseConnection = async () => {
  try {

    const connection = await db.getConnection();
    console.log('Conexión a la base de datos exitosa.');
    connection.release();

  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;  // Re-lanza el error para manejo adicional si es necesario
  }
};

export default checkDatabaseConnection;