const dialogflow = require('@google-cloud/dialogflow');
const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const express = require("express")
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8080;

app.post("/webhook", async (req, res) => {
    var id = (res.req.body.session).substr(43);
    console.log(id)
    const agent = new WebhookClient({ request: req, response: res });

    function hi(agent) {
        console.log(`intent  =>  hi`);
        agent.add("")
    }

    function sendNotes(agent) {
        const { number , date , email} = agent.parameters;
       agent.add("")
    }

    function about(agent) {
        // console.log(`intent  =>  hi`);
        agent.add("about from server")
    }

    let intentMap = new Map();
    intentMap.set('hi', hi); 
    intentMap.set('about', about); 
    intentMap.set('sendNotes', sendNotes);
    agent.handleRequest(intentMap);
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});



// Commands
// npm install @google-cloud/dialogflow
// npm install dialogflow-fulfillment
// npm install cors
// npm install -g express
// npm install -g nodemon
// npm install -g ngrok
// nodemon dialogflow.js
// ngrok http 8080