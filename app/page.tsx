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
  Calm: [
    "Keep calm and carry on.",
    "Calmness is the cradle of power.",
    "The more tranquil a man becomes, the greater is his success."
  ],
  Adventurous: [
    "Life is either a daring adventure or nothing at all.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Adventure is worthwhile in itself."
  ],
  Grateful: [
    "Gratitude turns what we have into enough.",
    "The more you are in a state of gratitude, the more you will attract things to be grateful for.",
    "Gratitude is not only the greatest of virtues but the parent of all others."
  ],
  Confident: [
    "Confidence is the key to unlocking your true potential.",
    "Believe you can, and you're halfway there.",
    "With confidence, you have won before you have started."
  ],
};

export default function Home() {
  const [mood, setMood] = useState<keyof typeof moodQuotes>('Motivated');
  const [quote, setQuote] = useState<string>(moodQuotes[mood][0]);

  const getRandomQuote = (selectedMood: keyof typeof moodQuotes) => {
    const randomIndex = Math.floor(Math.random() * moodQuotes[selectedMood].length);
    setMood(selectedMood);
    setQuote(moodQuotes[selectedMood][randomIndex]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Random Quote Generator</h1>
      </header>

      {/* Mood Selection with Buttons */}
      <section className="text-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Select your mood
        </h2>
        <div className="flex space-x-4 justify-center">
          {Object.keys(moodQuotes).map((currentMood) => (
            <button
              key={currentMood}
              onClick={() => getRandomQuote(currentMood as keyof typeof moodQuotes)}
              className={`p-3 ${
                mood === currentMood ? 'bg-blue-700' : 'bg-[#6495ED]'
              } text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300`}
            >
              {currentMood}
            </button>
          ))}
        </div>
      </section>

      <section className="text-center mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          onClick={() => getRandomQuote(mood)}
        >
          Get a New Quote
        </button>
      </section>

{/* Quote Display */}
<section className="text-center my-8">
  <div className="max-w-xl mx-auto p-1 bg-white rounded-lg shadow-lg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 blur-lg opacity-75 animate-spin-slow"></div>
    <div className="relative p-6 bg-white rounded-lg shadow-lg">
      <p className="text-2xl text-gray-800 mb-6">{quote}</p>
    </div>
  </div>
</section>

      {/* Footer (Optional) */}
      <footer className="text-center py-4 text-gray-500">
        <p>Have a good day ❤</p>
      </footer>
    </main>
  );
}
