const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/logs',(req, res) =>{
    const log_messages = req.body
    log_messages.map(async (log_message) => {
    try{
        await axios.post('http://localhost:5000', log_message, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        console.log('Log sent to Logstash successfully');
    }
    catch(err){
        console.error('Error sending log to logstash', err);
    };
    console.log(`Log message Received : ${log_message}`)
    res.send("Log message recived from server")
  });
    
})

app.listen(port, () => console.log(`listening on port: ${port}`))