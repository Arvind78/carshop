const mongoose= require('mongoose');

const dbConnetion=()=>{
mongoose.connect(process.env.DB,).then(()=>{
   console.log(`database connected`)
}).catch((err)=>{
    console.log(`database connection field! ${err}`)
})
}
module.exports = dbConnetion
