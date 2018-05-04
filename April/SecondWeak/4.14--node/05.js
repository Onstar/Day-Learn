var fs = require("fs")

// fs.access("./0sd2.js",(err)=>{
//     try{
//         if(err) {
//             console.log(err);
//         }
//     } catch(err){

//     }
// })

// try {
//     fs.accessSync("./02sd.js");
// }catch(err){
//     console.log("1"+err)
// }

var err = new Error("这是一个错误");
throw err;
console.log("jj");
