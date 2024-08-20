const fs = require("fs");
const a = "This is made by Sherin";
fs.writeFile("./sampleForFsWriteFile.txt",a,()=>{
    console.log("Written");
});
console.log("I am first")