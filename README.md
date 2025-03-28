Speech Synthesis APIs Integration
This project provides an integration platform for various speech synthesis APIs including Eleven Labs, Ollama, and AWS Polly. It is built with TypeScript and JavaScript and aims to provide a flexible and easy-to-use solution for developers seeking to incorporate text-to-speech functionality into their applications.

Features

&#160;Multi-API Support: Integrate with Eleven Labs, Ollama, and AWS Polly (optional).

&#160;Modular Design: Each API integration is isolated in its own module, making it easier to extend and maintain.

&#160;Customizable Speech Parameters: Adjust voice, speed, language, and tone for each API.

&#160;TypeScript & JavaScript: Written in TypeScript for type safety with JavaScript fallback for flexibility.

###Technologies
&#160;TypeScript and JavaScript for the implementation.

&#160;Node.js for backend execution.

&#160;Speech synthesis services: Eleven Labs, Ollama, and AWS Polly.

###Installation
Prerequisites
Before you begin, ensure you have the following installed:

&#160;Node.js (v16 or higher)

&#160;npm (Node package manager)

Install Dependencies
1.Clone the repository:

bash
git clone https://github.com/IhnatVelykoivan/new.git

2.Navigate into the project directory:

bash
cd new

3.Install the required dependencies:

bash
npm install

4.Configure your API keys by creating a .env file in the root directory and adding the following keys:

ELEVEN_LABS_API_KEY=your-eleven-labs-api-key
OLLAMA_API_KEY=your-ollama-api-key
POLLY_API_KEY=your-aws-polly-api-key

&#160;Example .env File

###Usage
Once the installation is complete, you can run the scripts to interact with each speech synthesis API.

&#160;Eleven Labs

To test Eleven Labs integration, run:

bash
node --loader ts-node/esm elevenlabs.ts

&#160;Ollama

To test Ollama integration, run:

bash
tsx ollama.ts

&#160;AWS Polly
If you have configured AWS Polly, you can run:

bash
node --loader ts-node/esm polly.ts

Customizing Speech Parameters
Each API provides various parameters for customizing the speech output, including voice, speed, and language. You can modify these parameters directly in the script files (elevenlabs.ts, ollama.ts, polly.js) to match your requirements.

###Contributing
We welcome contributions to this project! If you want to improve the project, follow the steps below to contribute:

1.Fork the repository to your own GitHub account.
2.Clone your fork to your local machine.
3.Create a new branch (git checkout -b feature-name).
4.Make your changes and commit them (git commit -am 'Add new feature').
5.Push to your branch (git push origin feature-name).
6.Create a pull request from your fork to the main repository.

###License
This project is licensed under the MIT License. See the LICENSE file for more information.

###Acknowledgments

&#160;Eleven Labs, Ollama, and AWS Polly for providing APIs for text-to-speech.
&#160;TypeScript for enabling type safety and developer-friendly features.
