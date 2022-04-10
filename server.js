const express = require('express')
const morgan = require('morgan')
// var cors = require('cors')
const { generateFile } = require('./generateFile')
const { executeFileCpp } = require('./executeCode')
const { executeFilePy } = require('./executePy')

const app = express()

var coreOptions = {
    origin:"http://localhost:3000"
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))
// app.use(cors(coreOptions))

app.post('/run', async (req,res)=>{
    const { language , content } = req.body
    try{
        const codefile = await generateFile(language,content)
        if (language == "cpp"){
            var executeOutput = await executeFileCpp(codefile)
        }
        if (language == "py"){
            var executeOutput = await executeFilePy(codefile)
        }
        console.log("output",executeOutput)
        return res.status(200).send(executeOutput)
    }
    catch(err){
        return res.status(400).send({"error":err})
    }
})


app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})