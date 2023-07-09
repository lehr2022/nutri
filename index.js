const express=require('express')
const conectDB=require('./config/bd')
const bodyParser=require('body-parser')
const cors=require('cors')
const usuariosRoutes= require('./routes/usuariosRoutes')
const citasRoutes = require('./routes/citasRoutes')
const historiasRoutes = require('./routes/historiasRoutes')


conectDB();

const app=express()

app.use(cors())

app.use(express.json({ extended: true }));




//Habilitar body parser
/*app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))*/







app.use('/',usuariosRoutes())
app.use('/',citasRoutes())
app.use('/',historiasRoutes())




app.listen(9003,()=>{
    console.log('server listen in: 9003')
})