# Gemini Chatbot

A modern chatbot application powered by Google's Gemini AI with customizable response styles and a beautiful dark/light mode interface.

## Screenshot

https://ibb.co/xSDksDc1

## Features

- **AI-Powered Chat**: Uses Google's Gemini 2.0 Flash model for intelligent conversations
- **Response Customization**: Control formality, emotion, length, and creativity of AI responses
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Real-time Chat**: Instant responses with typing indicators
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **No Database Required**: All conversation history stored locally in the browser

## Tech Stack

- **Frontend**: React 18 with Tailwind CSS
- **Backend**: Express.js with Node.js
- **AI Integration**: Google Gemini API
- **Styling**: Tailwind CSS with custom dark mode

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd gemini-chatbot
   npm run install-all
   ```

2. **Configure environment variables:**

   ```bash
   cd server
   cp env.example .env
   ```

   Edit `.env` and add your Gemini API key:

   ```
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=5000
   ```

3. **Start the application:**

   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend (port 3000).

### Alternative: Manual Start

If you prefer to start services separately:

**Terminal 1 (Backend):**

```bash
cd server
npm start
```

**Terminal 2 (Frontend):**

```bash
cd client
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Click the settings icon to configure response styles:
   - **Formality**: Casual or Professional
   - **Emotion**: Cheerful, Sad, Serious, or Pessimistic
   - **Length**: Short, Medium, or Long
   - **Creativity**: Factual, Balanced, or Creative
3. Type your message and press Enter or click Send
4. Toggle dark/light mode using the theme button
5. Clear conversation history anytime using the "Clear Chat" button

## Response Style Examples

- **Casual + Cheerful + Short**: "Hey! That's awesome! 🎉"
- **Professional + Serious + Long**: "I understand your concern. Let me provide a comprehensive analysis..."
- **Creative + Pessimistic + Medium**: "Well, that's a challenging situation, but let's explore some unconventional approaches..."

## API Endpoints

- `POST /api/chat` - Send message to AI and receive response

## Project Structure

```
gemini-chatbot/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js         # Main application component
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Tailwind styles
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Express backend
│   ├── index.js          # Server implementation
│   ├── package.json
│   └── env.example       # Environment variables template
├── package.json          # Root package.json
└── README.md
```

## Troubleshooting

- **API Key Issues**: Ensure your Gemini API key is correctly set in the `.env` file
- **CORS Errors**: Make sure the backend server is running on port 5000
- **Connection Issues**: Check that both frontend and backend are running simultaneously

## License

MIT License - feel free to use this project for personal or commercial purposes.
