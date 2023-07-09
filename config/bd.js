const mongoose=require('mongoose')
mongoose.Promise=global.Promise


const conectDB = async () => {

try{

    const URI =  "mongodb+srv://dmosqana:rdIVrhpN06dRWCpK@usuarios.qzw5kmz.mongodb.net/?retryWrites=true&w=majority";

    const connection = await mongoose.connect(
        URI,

    {useNewUrlParser:true,
    useUnifiedTopology:true}
    );
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`mogodb conectado en: ${url}`);

} catch (error){
    
    console.log(`error ${error.message}`);
    process.exit(1);

}


}

module.exports = conectDB;