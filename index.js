import express from 'express';
import pg from 'pg'
/*leer variable de entorno*/
import { config } from 'dotenv';

/* leer variables de entorno */
config()


const app = express();
const pool=new pg.Pool({
       connectionString:process.env.DATABASE_URL,/* ENV PARA LEER VARIABLES DE ENTORNO*/ 
      /* ssl: true*/
}


)

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT * FROM restaurantes');
    return res.json(result.rows);
});
/* Ruta inicial */
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Server on port', 3000);
});