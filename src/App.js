import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  let heroData = [
    { text1: "Dive Into", text2: "What you love" },
    { text1: "Indulge", text2: "your Passions" },
    { text1: "Give in to", text2: "your Passions" },
  ];

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
