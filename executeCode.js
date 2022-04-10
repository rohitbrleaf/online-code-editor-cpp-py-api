const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');


async function executeFileCpp(filePath){
    const jobId = path.basename(filePath)
    const outputpath = path.join(__dirname,`${jobId}.out`)
    return new Promise((resolve, reject)=>{
            exec(`g++ ${jobId} -o ${outputpath} && ./${jobId}.out`,
                (error,stderr,stdout) =>{
                    error && reject({error,stderr})
                    stderr && reject(stderr)
                    resolve(stdout)
                }
            )
    })
}



module.exports = {
    executeFileCpp
}