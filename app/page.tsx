'use client'; // This line tells Next.js that this is a client component

import { useState } from 'react';

const quotes: string[] = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
];

export default function Home() {
  const [quote, setQuote] = useState<string>(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Random Quote Generator</h1>
      <p className="text-lg text-center mb-4">{quote}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={getRandomQuote}
      >
        Get a New Quote
      </button>
    </main>
  );
}
