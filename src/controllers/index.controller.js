const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://vteynqfhovuchx:c86ee918160f1ff3e5976695496165953685480c276d75c103f3a5e04a88ab4b@ec2-54-224-120-186.compute-1.amazonaws.com:5432/d8o5pkdajmo579';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido'
    });
}

const getPhotos = async (req, res) =>{
   const response = await pool.query('SELECT * FROM photos');
    res.status(200).json(response.rows);
}

const getPhotosByColor = async (req, res) =>{
    const color = request.params.color;
    const response = await pool.query('SELECT * FROM photos WHERE color = $4'[color])
    res.status(200).json(response.rows);
}

module. exports ={
    welcome,
    getPhotos,
    getPhotosByColor
}