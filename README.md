# linebot
## Design
- To create a more flexible maintained linebot
- seperate message responsing content and message responsing functions

## Tools
- @line/bot-sdk
- crypto
- express

## Files

`index.js`: 
1. set up the environment
2. handle the events  

`messageContents.js`:
1. Being Flexible used inside messageResponse.js
2. To create customized response


`messageResponse.js`:
1. create customized response function for particilar response strings


`messageTypes.js`:
1. To create specific events such as following or messaging, or getfiles...
