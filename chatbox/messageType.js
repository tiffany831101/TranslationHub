
// 這個 file 跟 message 的 type 有關
const response = require('./messageContent');
module.exports = {
    isfollow: function (event) {
        return event.type === 'follow';
    },
    isMessage: function (event) { 
        return event.type === 'message';
    },
    getProfile: function (client, userId) { 
        return client.getProfile(userId).then((profile) => {
            return profile;
        });
    },
    followAction: async function (event, client) { 
        let userId = event.source.userId;
        const userProfile = await this.getProfile(client, userId);

        return client.replyMessage(
            event.replyToken,
            response.greetings(userProfile.displayName)
        );
    }
};

