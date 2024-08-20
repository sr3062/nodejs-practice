const fs = require("fs");
fs.readFile("./sampleTexttolearnFs.txt","utf-8",(err,data)=>{
    if (err){
        throw err;
    }
    console.log(data)

}); 
// upar wale asynchronous function h, uske karan baki kaam rukna nh chaiye kch or niche console.log deke print krege toh voh print hoga
