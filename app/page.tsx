'use client';

import { useState } from 'react';

// Mood quotes
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

const backgroundStyles = {
  Motivated: 'bg-gradient-to-r from-green-400 to-blue-500',
  Happy: 'bg-gradient-to-r from-yellow-300 to-pink-400',
  Thoughtful: 'bg-gradient-to-r from-purple-400 to-indigo-600',
  Relaxed: 'bg-gradient-to-r from-teal-300 to-blue-300',
  Inspired: 'bg-gradient-to-r from-orange-300 to-red-600',
  Love: 'bg-gradient-to-r from-pink-500 to-red-400',
  Calm: 'bg-gradient-to-r from-blue-300 to-teal-400',
  Adventurous: 'bg-gradient-to-r from-yellow-500 to-orange-600',
  Grateful: 'bg-gradient-to-r from-green-300 to-yellow-400',
  Confident: 'bg-gradient-to-r from-indigo-500 to-purple-600',
};

export default function Home() {
  const [mood, setMood] = useState<keyof typeof moodQuotes>('Motivated');
  const [quote, setQuote] = useState<string>(moodQuotes[mood][0]);

  const getRandomQuote = (selectedMood: keyof typeof moodQuotes) => {
    const randomIndex = Math.floor(Math.random() * moodQuotes[selectedMood].length);
    setMood(selectedMood);
    setQuote(moodQuotes[selectedMood][randomIndex]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#f0f8ff] relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Larger Particles */}
        <div className="w-24 h-24 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '10%', left: '15%', animationDuration: '8s' }}></div>
        <div className="w-16 h-16 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '60%', left: '25%', animationDuration: '10s' }}></div>
        <div className="w-32 h-32 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '40%', left: '70%', animationDuration: '12s' }}></div>
        <div className="w-20 h-20 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '80%', left: '50%', animationDuration: '14s' }}></div>

        {/* Additional Particles on the Right */}
        <div className="w-12 h-12 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '30%', left: '85%', animationDuration: '11s' }}></div>
        <div className="w-16 h-16 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '70%', left: '90%', animationDuration: '13s' }}></div>
        <div className="w-24 h-24 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '50%', left: '80%', animationDuration: '15s' }}></div>

        {/* Smaller Particles */}
        <div className="w-8 h-8 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '20%', left: '10%', animationDuration: '6s' }}></div>
        <div className="w-10 h-10 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '70%', left: '15%', animationDuration: '9s' }}></div>
        <div className="w-12 h-12 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '50%', left: '80%', animationDuration: '11s' }}></div>
        <div className="w-6 h-6 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '30%', left: '60%', animationDuration: '7s' }}></div>
        <div className="w-8 h-8 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '90%', left: '20%', animationDuration: '8s' }}></div>
        <div className="w-12 h-12 bg-particleBlue rounded-full absolute animate-move-particles"
            style={{ top: '40%', left: '30%', animationDuration: '13s' }}></div>
      </div>

      {/* Header */}
      <header className="text-center py-6 z-10">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Random Quote Generator</h1>
      </header>

      {/* Mood Selection with Buttons */}
      <section className="text-center mb-6 z-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Select your mood</h2>
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

      <section className="text-center mt-6 z-10">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          onClick={() => getRandomQuote(mood)}
        >
          Get a New Quote
        </button>
      </section>

      {/* Quote Display */}
      <section className="text-center my-8 z-10">
        <div className={`max-w-xl mx-auto p-1 rounded-lg shadow-lg relative overflow-hidden ${backgroundStyles[mood]}`}>
          <div className="relative p-6 bg-[#dcf3ff] rounded-lg shadow-lg">
            <p className="text-2xl text-gray-800 mb-6">{quote}</p>
          </div>
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="text-center py-4 text-blue-500 z-10 mt-8">
        <p>Have a good day ❤</p>
      </footer>
    </main>
  );
}
