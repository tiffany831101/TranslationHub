const line = require("@line/bot-sdk");
const express = require("express");
const crypto = require("crypto");
const textContainer = require("./messageResponse");
const typeActions = require("./messageType");
const awsServerlessExpress = require("aws-serverless-express");
require("dotenv").config();
const translate = require("translate-google");

console.log(process.env);
const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);
const app = express();

app.post("/callback", line.middleware(config), (req, res) => {
  const body = JSON.stringify(req.body);
  // get Line Signature
  const signature = crypto
    .createHmac("SHA256", config.channelSecret)
    .update(body)
    .digest("base64");
  // get x-line-signature in headers
  const headerX = req.get("X-Line-Signature");

  // compare signature and headerX to ensure the request is from line server
  if (headerX !== signature) return;

  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

app.get("/", (req, res) => {
  res.send({
    status: "success",
  });
});

// event handler
function handleEvent(event) {
  if (typeActions.isfollow(event.type)) {
    return typeActions.followAction(event, client);
  }

  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  let text = event.message.text;

  if (textContainer.hasOwnProperty(event.message.text)) {
    return textContainer[text](client, event);
  } else {
    return translate(text, { to: "zh-tw" }).then((translatedText) => {
      const responseMessage = {
        type: "text",
        text: translatedText,
      };
      return client.replyMessage(event.replyToken, responseMessage);
    });
  }
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
