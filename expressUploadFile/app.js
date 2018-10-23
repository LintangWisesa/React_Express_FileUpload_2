var express = require('express')
var cors = require('cors')
var unggah = require('express-fileupload')

var app = express()
app.use(cors())
app.use(unggah())
app.use('/img', express.static('storage'))

app.get('/', (req,res)=>{
    res.send('<h1>Express File Upload</h1>')
})

app.post('/', (req, res)=>{
    if(req.files){
        console.log(req.files)
        var unggahFile = req.files.file
        var namaFile = unggahFile.name
        unggahFile.mv('./storage/'+namaFile, (err)=>{
            if(err){
                console.log(err)
                res.send(err)
            } else {
                console.log(namaFile)
                res.send(namaFile)
            }
        })
    }
})

app.listen(5000, ()=>{
    console.log('Server aktif @port 5000!')
})