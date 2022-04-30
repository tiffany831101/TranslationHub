// use design pattern methods
const line = require('@line/bot-sdk');
const express = require('express');
const crypto = require('crypto');
const textContainer = require('./messageResponse');
const typeActions = require('./messageType');

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);
const app = express();
const richmenuId = "richmenu-a69d1ee9c4f50fa713703b6d72d8d939";








// const messageManager





// The middlware validates the request and parses webhook event object
// It embeds body-parser and parses them to objects. 
app.post('/callback', line.middleware(config), (req, res) => {
    const body = JSON.stringify(req.body);
    // get Line Signature
    const signature = crypto.createHmac('SHA256', config.channelSecret).update(body).digest('base64');
    // get x-line-signature in headers
    const headerX = req.get('X-Line-Signature');

    // compare signature and headerX to ensure the request is from line server
    if (headerX !== signature) return;

    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
        console.error(err);
        res.status(500).end();
        });
});

// event handler
function handleEvent(event) {

    if (typeActions.isfollow(event.type)) { 
        return typeActions.followAction(event, client);
    }

    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return Promise.resolve(null);
    }
    
  
  
  let text = event.message.text;
  if (!textContainer.hasOwnProperty(event.message.text)) text = "default";
    

    // create a echoing text message
  return textContainer[text](client, event)

    // return client.replyMessage(event.replyToken, [
    //     {
    //         "type":"text",
    //         "text":"Hello, user"
    //     },
    //     {
    //         "type":"text",
    //         "text":"May I help you?"
    //     }
    // ]);
}







// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});