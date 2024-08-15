'use client';

import { useState } from 'react';

const quotes: string[] = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Keep your face always toward the sunshine. Then, the shadows will fall behind you.",
  "Believe you can and you're halfway there.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t waste your valuable living someone else’s life."
];

export default function Home() {
  const [quote, setQuote] = useState<string>(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6">Random Quote Generator</h1>
      <p className="text-lg text-gray-800 mb-6 text-center max-w-xl">{quote}</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        onClick={getRandomQuote}
      >
        Get a New Quote
      </button>
    </main>
  );
}
