require('dotenv').config()
let app = require('./app')
const PORT =process.env.PORT|| 3001

app.listen(PORT,()=>{
    console.log(`my server is runing at http://localhost:${PORT}`);
})


