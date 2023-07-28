const express=require('express')
const conectDB=require('./config/bd')
const bodyParser=require('body-parser')
const cors=require('cors')
const usuariosRoutes= require('./routes/usuariosRoutes')
const citasRoutes = require('./routes/citasRoutes')
const historiasRoutes = require('./routes/historiasRoutes')
const authRoutes = require('./routes/authRoutes')


conectDB();

const app=express()

app.use(cors())

app.use(express.json({ extended: true }));




//Habilitar body parser
/*app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))*/







app.use('/api/',usuariosRoutes())
app.use('/api/',citasRoutes())
app.use('/api/',historiasRoutes())
app.use('/api/',authRoutes())




app.listen(9003,()=>{
    console.log('server listen in: 9003')
})