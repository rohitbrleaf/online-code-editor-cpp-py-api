const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');




async function executeFilePy(filePath){
    const jobId = path.basename(filePath)
    return new Promise((resolve, reject)=>{
        exec(`python ${jobId}`,
            (error,stdout,stderr) =>{
                error && reject({error,stderr})
                stderr && reject(stderr)
                resolve(stdout)
            }
        )
    })
}



module.exports = {
    executeFilePy
}