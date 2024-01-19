const fs = require("fs");
exports.writetestfile = (messege) => {
  fs.writeFile("./test.txt", messege,(err)=>{console.log("error is ",err);});
};
exports.readtestfile=(callback)=>{
   fs.readFile('./test.txt',"utf8",(err,res)=>{
    if(err){
        callback(err,null)
        // console.log(err);
    }
    else{
        
        callback(null,res)
    }
   })
}
exports.readf=fs.readFileSync('./test.txt',"utf8")
exports.appendfile = (messege) => {
    fs.appendFileSync("./test.txt", messege);
  };