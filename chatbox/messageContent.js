const game = {
  type: "flex",
  altText: "testing",
  contents: {
    type: "bubble",
    hero: {
      type: "image",
      url: "https://img95.699pic.com/xsj/0f/6e/bm.jpg!/fh/300",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      action: {
        type: "uri",
        uri: "http://linecorp.com/",
      },
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Game Time!",
          weight: "bold",
          size: "xl",
          contents: [],
        },
        {
          type: "box",
          layout: "baseline",
          margin: "md",
          contents: [
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Choose one of the three choices, and see if you can beat me",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "horizontal",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "secondary",
          height: "sm",
          action: {
            type: "message",
            label: "Paper",
            text: "Paper",
          },
          color: "#f4f4f4",
        },
        {
          type: "button",
          style: "primary",
          height: "sm",
          action: {
            type: "message",
            text: "Scissor",
            label: "Scissor",
          },
        },
        {
          type: "button",
          style: "primary",
          height: "sm",
          action: {
            type: "message",
            label: "Rock",
            text: "Rock",
          },
          color: "#696969",
        },
      ],
      flex: 1,
    },
  },
};

const chat = {
  type: "text",
  text: "請輸入您想翻譯成中文的文字",
};

const aboutMe = {
  type: "text", // ①
  text: "Select of which you want to know more about TranslateHub first",
  quickReply: {
    // ②
    items: [
      {
        type: "action", // ③
        action: {
          type: "message",
          label: "Introductions",
          text: "Introductions",
        },
      },
      {
        type: "action",
        action: {
          type: "message",
          label: "Features",
          text: "Features",
        },
      },
      {
        type: "action", // ④
        action: {
          type: "message",
          label: "Chat now",
          text: "Start Translating",
        },
      },
    ],
  },
};

const skills = {
  type: "flex",
  altText: "skills",
  contents: {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Language Supported",
          weight: "bold",
          size: "xl",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Bridge language barriers effortlessly and engage with a wider audience than ever before.",
              wrap: true,
            },
          ],
        },
        {
          type: "box",
          layout: "baseline",
          margin: "md",
          contents: [
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "text",
              margin: "10px",
              text: "English",
            },
          ],
        },
        {
          type: "box",
          layout: "baseline",
          margin: "md",
          contents: [
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "text",
              margin: "10px",
              text: "Japanese",
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "horizontal",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "secondary",
          height: "sm",
          action: {
            type: "message",
            text: "Start Translating",
            label: "Try Now!",
          },
          color: "#cfe2f3",
        },
      ],
      flex: 0,
    },
  },
};

const introduction = {
  type: "flex",
  altText: "introduction",
  contents: {
    type: "bubble",
    size: "mega",
    header: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "About TranslateHub",
              color: "#ffffff",
              size: "xl",
              flex: 4,
              weight: "bold",
            },
          ],
        },
      ],
      paddingAll: "20px",
      backgroundColor: "#b6d7a8",
      spacing: "md",
      height: "80px",
      paddingTop: "22px",
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "filler",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [],
                  cornerRadius: "30px",
                  height: "12px",
                  width: "12px",
                  borderColor: "#EF454D",
                  borderWidth: "2px",
                },
                {
                  type: "filler",
                },
              ],
              flex: 0,
            },
            {
              type: "text",
              text: "Global Connectivity",
              gravity: "center",
              flex: 4,
              size: "sm",
            },
          ],
          spacing: "lg",
          cornerRadius: "30px",
          margin: "xl",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "Connect with people worldwide without worrying about language differences. Our app translates any language into Chinese, making conversations effortless.",
              gravity: "center",
              size: "xs",
              color: "#8c8c8c",
              wrap: true,
            },
          ],
          spacing: "lg",
          height: "64px",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "filler",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [],
                  cornerRadius: "30px",
                  height: "12px",
                  width: "12px",
                  borderColor: "#EF454D",
                  borderWidth: "2px",
                },
                {
                  type: "filler",
                },
              ],
              flex: 0,
            },
            {
              type: "text",
              text: "Effortless Conversion",
              gravity: "center",
              flex: 4,
              size: "sm",
            },
          ],
          spacing: "lg",
          cornerRadius: "30px",
          margin: "xl",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "It's as simple as copy and paste! No matter if it's French, Spanish, or any other language, our app swiftly transforms it into elegant Chinese characters.",
              gravity: "center",
              flex: 4,
              size: "xs",
              color: "#8c8c8c",
              wrap: true,
            },
          ],
          spacing: "lg",
          height: "80px",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "filler",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [],
                  cornerRadius: "30px",
                  height: "12px",
                  width: "12px",
                  borderColor: "#EF454D",
                  borderWidth: "2px",
                },
                {
                  type: "filler",
                },
              ],
              flex: 0,
            },
            {
              type: "text",
              text: "Try It Today",
              gravity: "center",
              flex: 4,
              size: "sm",
            },
          ],
          spacing: "lg",
          cornerRadius: "30px",
          margin: "xl",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              gravity: "center",
              flex: 4,
              size: "xs",
              color: "#8c8c8c",
              wrap: true,
              text: "Join the language revolution! Experience the magic of instant translation to Chinese. Communicate, collaborate, and conquer the world effortlessly.",
            },
          ],
          spacing: "lg",
          height: "80px",
        },
        // {
        //   type: "box",
        //   layout: "vertical",
        //   contents: [
        //     {
        //       type: "text",
        //       text: "See More...",
        //       align: "center",
        //     },
        //   ],
        // },
        // {
        //   type: "box",
        //   layout: "horizontal",
        //   contents: [
        //     {
        //       type: "button",
        //       action: {
        //         type: "message",
        //         label: "Hobbies",
        //         text: "Hobbies",
        //       },
        //       style: "secondary",
        //       color: "#f4cccc",
        //     },
        //     {
        //       type: "button",
        //       action: {
        //         type: "message",
        //         label: "Skills",
        //         text: "Skills",
        //       },
        //       style: "secondary",
        //       margin: "10px",
        //       color: "#cfe2f3",
        //     },
        //   ],
        //   action: {
        //     type: "message",
        //     label: "Hobbies",
        //     text: "Hobbies",
        //   },
        // },
      ],
    },
  },
};

const hobbies = {
  type: "flex",
  altText: "hobbies",
  contents: {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "image",
              url: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              size: "5xl",
              aspectMode: "cover",
              aspectRatio: "150:196",
              gravity: "center",
              flex: 1,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "image",
                  url: "https://previews.123rf.com/images/nomadsoul1/nomadsoul12001/nomadsoul1200100237/138063571-deux-raquettes-de-squash-et-balle-sur-le-sol-du-terrain-vue-de-dessus-personne-concept-de-jeu-passe-.jpg",
                  size: "full",
                  aspectMode: "cover",
                  aspectRatio: "150:98",
                  gravity: "center",
                },
                {
                  type: "image",
                  url: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  size: "full",
                  aspectMode: "cover",
                  aspectRatio: "150:98",
                  gravity: "center",
                },
              ],
              flex: 1,
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  contents: [
                    {
                      type: "span",
                      text: "     ",
                    },
                    {
                      type: "span",
                      text: "Type in any language other than Chinese, and watch as our translation chatbot works its magic. From Spanish to Russian, our bot effortlessly bridges linguistic gaps. Go ahead, explore the world's languages and let us do the translation for you!",
                    },
                  ],
                  size: "sm",
                  wrap: true,
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [],
                  spacing: "sm",
                  margin: "md",
                },
              ],
            },
          ],
          spacing: "xl",
          paddingAll: "20px",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "button",
              action: {
                type: "message",
                label: "Introductions",
                text: "Introductions",
              },
              margin: "10px",
              style: "secondary",
              color: "#cfe2f3",
            },
            {
              type: "button",
              action: {
                type: "message",
                label: "Chat now!",
                text: "Start Translating",
              },
              margin: "10px",
              style: "secondary",
              color: "#F4CCCC",
            },
          ],
          paddingAll: "10px",
        },
      ],
      paddingAll: "0px",
    },
  },
};

const recentStudies = {
  type: "flex",
  altText: "recent studies",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        size: "nano",
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Operating Sys.",
              color: "#ffffff",
              align: "start",
              size: "sm",
              gravity: "center",
            },
            {
              type: "text",
              text: "40%",
              color: "#ffffff",
              align: "start",
              size: "xs",
              gravity: "center",
              margin: "lg",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "filler",
                    },
                  ],
                  width: "70%",
                  backgroundColor: "#0D8186",
                  height: "6px",
                },
              ],
              backgroundColor: "#9FD8E36E",
              height: "6px",
              margin: "sm",
            },
          ],
          backgroundColor: "#71C67C",
          paddingTop: "19px",
          paddingAll: "12px",
          paddingBottom: "16px",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  color: "#8C8C8C",
                  size: "sm",
                  wrap: true,
                  text: "keywords: scheduling, memory management, virtual memory",
                },
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "Notes",
                    uri: "https://dot-innocent-191.notion.site/7bdc3ba6df0f4cb2b59855c02423f97a?v=32835553131349bb82c3e3911e829380",
                  },
                  style: "link",
                },
              ],
              flex: 1,
            },
          ],
          spacing: "md",
          paddingAll: "12px",
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: "bubble",
        size: "nano",
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Algorithm",
              color: "#ffffff",
              align: "start",
              size: "md",
              gravity: "center",
            },
            {
              type: "text",
              text: "35%",
              color: "#ffffff",
              align: "start",
              size: "xs",
              gravity: "center",
              margin: "lg",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "filler",
                    },
                  ],
                  width: "40%",
                  backgroundColor: "#DE5658",
                  height: "6px",
                },
              ],
              backgroundColor: "#FAD2A76E",
              height: "6px",
              margin: "sm",
            },
          ],
          backgroundColor: "#DEADB5",
          paddingTop: "19px",
          paddingAll: "12px",
          paddingBottom: "16px",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: "keywords: Dynamic programming, Data Structures, Function growth",
                  color: "#8C8C8C",
                  size: "sm",
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: "md",
          paddingAll: "12px",
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: "bubble",
        size: "nano",
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "F2E Intern",
              color: "#ffffff",
              align: "start",
              size: "md",
              gravity: "center",
            },
            {
              type: "text",
              text: "25%",
              color: "#ffffff",
              align: "start",
              size: "xs",
              gravity: "center",
              margin: "lg",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "filler",
                    },
                  ],
                  width: "25%",
                  backgroundColor: "#7D51E4",
                  height: "6px",
                },
              ],
              backgroundColor: "#9FD8E36E",
              height: "6px",
              margin: "sm",
            },
          ],
          backgroundColor: "#A17DF5",
          paddingTop: "19px",
          paddingAll: "12px",
          paddingBottom: "16px",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  color: "#8C8C8C",
                  size: "sm",
                  wrap: true,
                  text: "keywords: React hooks",
                },
              ],
              flex: 1,
            },
          ],
          spacing: "md",
          paddingAll: "12px",
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
    ],
  },
};

const randomPickNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const echo = (event) => ({ type: "text", text: event.message.text });

const greetings = (userName) => ({
  type: "text",
  text: `Hi ${userName} $$$, Hi there! How can I help you with translations?
    `,
  emojis: [
    {
      index: userName.length + 4,
      productId: "5ac2213e040ab15980c9b447",
      emojiId: "001",
    },
    {
      index: userName.length + 5,
      productId: "5ac2213e040ab15980c9b447",
      emojiId: "001",
    },
    {
      index: userName.length + 6,
      productId: "5ac2213e040ab15980c9b447",
      emojiId: "001",
    },
  ],
});

const winnerTemplate = {
  type: "text",
  text: "I Won! $$$",
  emojis: [
    {
      index: 7,
      productId: "5ac1bfd5040ab15980c9b435",
      emojiId: "037",
    },
    {
      index: 8,
      productId: "5ac1bfd5040ab15980c9b435",
      emojiId: "037",
    },
    {
      index: 9,
      productId: "5ac1bfd5040ab15980c9b435",
      emojiId: "037",
    },
  ],
};

const evenTemplate = {
  type: "text",
  text: "Tie! Lets Play Again",
};

const loserTemplate = {
  type: "text",
  text: "You Won! $$$",
  emojis: [
    {
      index: 9,
      productId: "5ac1bfd5040ab15980c9b435",
      emojiId: "005",
    },
    {
      index: 10,
      productId: "5ac1bfd5040ab15980c9b435",
      emojiId: "005",
    },
    {
      index: 11,
      productId: "5ac1bfd5040ab15980c9b435",
      emojiId: "005",
    },
  ],
};

const winnerSticker = {
  type: "sticker",
  packageId: "446",
  stickerId: "2003",
};

const loserSticker = {
  type: "sticker",
  packageId: "446",
  stickerId: "2006",
};

const myDecision = (type) => {
  let emojiCode;
  if (type === 0) emojiCode = "025";
  if (type === 1) emojiCode = "023";
  if (type === 2) emojiCode = "028";

  return {
    type: "text",
    text: "$$$",
    emojis: [
      {
        index: 0,
        productId: "5ac21e6c040ab15980c9b444",
        emojiId: emojiCode,
      },
      {
        index: 1,
        productId: "5ac21e6c040ab15980c9b444",
        emojiId: emojiCode,
      },
      {
        index: 2,
        productId: "5ac21e6c040ab15980c9b444",
        emojiId: emojiCode,
      },
    ],
  };
};

const scissorReply = () => {
  const myChoice = randomPickNumber(0, 3);
  // let reply = {};
  const myDecisionReply = myDecision(myChoice);
  switch (myChoice) {
    case 0:
      return [myDecisionReply, evenTemplate, game];
      break;
    case 1:
      return [myDecisionReply, winnerTemplate, winnerSticker];
    // break;
    case 2:
      return [myDecisionReply, loserTemplate, loserSticker];

      break;
  }
};

const rockReply = () => {
  const myChoice = randomPickNumber(0, 3);
  // let reply = {};
  const myDecisionReply = myDecision(myChoice);
  switch (myChoice) {
    case 0:
      return [myDecisionReply, loserTemplate, loserSticker];
      break;
    case 1:
      return [myDecisionReply, evenTemplate, game];
    // break;
    case 2:
      return [myDecisionReply, winnerTemplate, winnerSticker];

      break;
  }
};

const paperReply = () => {
  const myChoice = randomPickNumber(0, 3);
  // let reply = {};

  const myDecisionReply = myDecision(myChoice);
  switch (myChoice) {
    case 0:
      return [myDecisionReply, winnerTemplate, winnerSticker];
      break;
    case 1:
      return [myDecisionReply, loserTemplate, loserSticker];
    // break;
    case 2:
      return [myDecisionReply, evenTemplate, game];

      break;
  }
};

module.exports = {
  game,
  echo,
  greetings,
  scissorReply,
  rockReply,
  paperReply,
  recentStudies,
  aboutMe,
  introduction,
  hobbies,
  skills,
  chat,
};
