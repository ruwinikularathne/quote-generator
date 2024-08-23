'use client';

import { useState } from 'react';

const moodQuotes = {
  Motivated: [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  ],
  Happy: [
    "Keep your face always toward the sunshine. Then, the shadows will fall behind you.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "The purpose of our lives is to be happy.",
  ],
  Thoughtful: [
    "Do not watch the clock. Do what it does. Keep going.",
    "Life is what happens when you're busy making other plans.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
  ],
  Relaxed: [
    "Take a deep breath and just enjoy your life.",
    "Sometimes the most productive thing you can do is relax.",
    "Relax, recharge, and reflect. Sometimes it's okay to do nothing.",
  ],
  Inspired: [
    "Inspiration exists, but it has to find you working.",
    "The best way to predict the future is to create it.",
    "Your only limit is your mind. Dream big and work hard.",
  ],
  Love: [
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    "The best thing to hold onto in life is each other.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
  ],  
};

export default function Home() {
  const [mood, setMood] = useState<keyof typeof moodQuotes>('Motivated');
  const [quote, setQuote] = useState<string>(moodQuotes[mood][0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * moodQuotes[mood].length);
    setQuote(moodQuotes[mood][randomIndex]);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Random Quote Generator</h1>
      </header>

      {/* Mood Selection */}
      <section className="text-center mb-6">
        <label htmlFor="mood-select" className="text-lg font-semibold text-gray-700 mb-4">
          Select the type or quote you want
        </label>
        <select
          id="mood-select"
          value={mood}
          onChange={(e) => setMood(e.target.value as keyof typeof moodQuotes)}
          className="ml-2 p-2 bg-gray-200 text-gray-700 border border-gray-300 rounded hover:bg-gray-300 focus:bg-gray-300"
        >
          {Object.keys(moodQuotes).map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
      </section>

      {/* Generate Button */}
      <section className="text-center">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          onClick={getRandomQuote}
        >
          Get a New Quote
        </button>
      </section>

      {/* Quote Display */}
      <section className="text-center my-8">
        <p className="text-2xl text-gray-800 mb-6 max-w-xl mx-auto bg-white p-4 rounded shadow">
          {quote}
        </p>
      </section>

      {/* Footer (Optional) */}
      <footer className="text-center py-4 text-gray-500">
        <p>Have a good day ❤ </p>
      </footer>
    </main>
  );
}
