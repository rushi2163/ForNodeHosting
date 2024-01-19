const {writetestfile,readtestfile,readf,appendfile}=require("./math")
let messege='third messege'
// writetestfile(messege)
// readtestfile((err,res)=>{
//     if (err) {
//         console.log("err is called",err)
//     }else{
//         console.log("res is called",res)
//     }
// })
// console.log(readf);
appendfile(messege)