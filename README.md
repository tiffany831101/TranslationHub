# TranslationHub

## Overview
![transition_ecs_design](https://github.com/tiffany831101/TranslationHub/assets/39373272/0c38ae6f-2a89-432e-b594-50c35bfaa4ed)
The translationHub Line Bot project aims to create a flexible and user-friendly Line bot that offers real-time language translation services. Users can input messages in various languages, and the bot will promptly translate them into Chinese.

## Usage

- LineID: @695pxvkb




## Features

- Integration with Line Messaging API using `@line/bot-sdk`.
- Secure message validation with `crypto`.
- Web server implemented with `express` for webhook event handling.
- Customized message responses based on triggers.
- Seamless language translation of various languages into Chinese.

## Technologies Used

- **@line/bot-sdk**: A library for interacting with the Line Messaging API.
- **crypto**: Utilized for generating and validating request signatures.
- **express**: A lightweight web application framework used for handling requests.
- **AWS Lambda**: Provides serverless compute power to handle bot functionality.
- **AWS API Gateway**: Acts as an interface to trigger Lambda functions.
- **Line Developers Console**: Used to create and manage the Line bot.

## Files

- `index.js`: Main entry point to set up the environment and handle events.
- `messageContents.js`: Provides flexibility for creating customized response messages.
- `messageResponse.js`: Contains functions for generating specific responses based on received messages.
- `messageTypes.js`: Defines event types and specific event handling functions.
