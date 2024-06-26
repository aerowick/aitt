'use client';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Prompt submitted: ", prompt);
  };

  return (
    <div>
      <h1>AI Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Generate Image</button>
      </form>
    </div>
  );
}
