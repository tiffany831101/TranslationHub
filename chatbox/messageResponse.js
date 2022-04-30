// 這個 file 跟 message 回的內容有關
const response = require('./messageContent');
module.exports = {
    "hello": function (client, event) { 
        return client.replyMessage(event.replyToken, response.echo(event));
    },
    "Have Fun!": function (client, event) { 
        return client.replyMessage(event.replyToken, response.game);
    },
    "Scissor": function (client, event) { 
        return client.replyMessage(event.replyToken, response.scissorReply());
    },
    "Paper": function (client, event) { 
        return client.replyMessage(event.replyToken, response.paperReply());
    },
    "Rock": function (client, event) { 
        return client.replyMessage(event.replyToken, response.rockReply());
    },
    "Recent Studies": function (client, event) { 
        return client.replyMessage(event.replyToken, response.recentStudies);
    },
    "About Me": function (client, event) { 
        return client.replyMessage(event.replyToken, response.aboutMe);
    },
    "Introductions": function (client, event) { 
        return client.replyMessage(event.replyToken, response.introduction); 
    },
    "Hobbies": function (client, event) { 
        return client.replyMessage(event.replyToken, response.hobbies);
    },
    "Skills": function (client, event) { 
        return client.replyMessage(event.replyToken, response.skills);
    },
}