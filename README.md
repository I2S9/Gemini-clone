# ✨ Gemini AI API Clone

A clone of the Gemini AI API, featuring an interactive chatbot that mimics the Gemini AI user interface and experience.

![Gemini AI Screen](https://github.com/I2S9/Gemini-clone/assets/111307883/9d230e1c-b830-49ca-bd19-665672e2699e)

## Missions

- Build the UI/UX of the website to closely resemble the Gemini AI interface.
- Create an interactive chat application using the Gemini API.
- Customize the chatbot (optional further steps).

## Get Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Ensure you have Node.js and npm installed on your machine. You can download them [here](https://nodejs.org/).

### Installation

1. **Clone the repository**
   ```sh
   git clone git@github.com:I2S9/Gemini-clone.git
   
2. Navigate to the project directory
   ```sh
   cd Gemini-clone
   
3. Install the dependencies
   ```sh
   npm install

4. Start the development server
   ```sh
   npm start

### Setting Up Google Gemini API

5. Install the Google Generative AI package

   ```sh
   npm install @google/generative-ai

6. Obtain your API key

* Go to the [Google Gemini API Documentation & API Keys](https://ai.google.dev/gemini-api/docs/available-regions?hl=en).

* Follow the instructions to generate and obtain your API key.

7. Configure the API key

* Open src/config/gemini.js in a text editor.

* Replace the placeholder API key on the first line with your actual API key:
   ```sh
   const API_KEY = 'YOUR_API_KEY_HERE';

## Usage

Once the server is running, you can access the application by navigating to http://localhost:3000 in your own web browser. You should see the Gemini AI clone interface and be able to interact with the chatbot.

## Further Step

You can customize the chatbot by modifying the configurations and code in the src directory. Refer to the [Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs?hl=en) for more details on the available features and customization options.
Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to replace any placeholders with the appropriate information or adjust the instructions as necessary for your specific project setup!  
