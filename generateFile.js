const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const codeSaves = path.join(__dirname,"codes")

if(!fs.existsSync(codeSaves)){
    fs.mkdirSync(codeSaves,{recursive:true})
}


async function generateFile(language,content){
    const fileCode = uuidv4()
    const fileName = `${fileCode}.${language}`
    const filepath = path.join(__dirname,fileName)
    console.log(filepath)
    await fs.writeFileSync(fileName,content)
    return filepath
}


module.exports = {
    generateFile
}