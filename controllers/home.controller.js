
// home get controller
const getHome = async (req,res)=>{
    try{
      await res.send(`<h1>i am home pages</h1>`)
    }catch(error){
        console.log(`error hear ${error}`);
    }
}

module.exports = {getHome}