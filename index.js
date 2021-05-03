const express = require ('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('port', process.env.PORT|| 3000);

//routes
app.use(require('./src/routes/index.js'));


app.listen(app.get('port'), ()=>{
    console.log('Server on port'+ app.get('port'));
});
