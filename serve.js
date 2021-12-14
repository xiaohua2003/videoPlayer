const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const api=require('./server/routes/api');
const app=express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'dist/videoPlayer')));
const port=3000
app.use('/api', api)
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/videoPlayer/index.html'))
});
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});
