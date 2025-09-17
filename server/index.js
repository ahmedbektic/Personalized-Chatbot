const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message, responseStyle } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    let prompt = message;
    if (responseStyle && responseStyle.length > 0) {
      const styleString = responseStyle.join(', ');
      prompt = `Ensure your response is ${styleString}. ${message}`;
    }

    const geminiResponse = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          key: apiKey
        }
      }
    );

    const responseText = geminiResponse.data.candidates[0].content.parts[0].text;
    res.json({ response: responseText });
  } catch (error) {
    console.error('Error calling Gemini API:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to get response from AI',
      details: error.response?.data?.error?.message || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
