import React from "react";
import config from "../site-config.json";

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen flex snap-center">
      <div className="relative flex flex-col m-auto">
        <img
          src={config.images[0].src}
          alt={config.images[0].alt}
          className="invert"
        />
        <h1 className="text-4xl text-white font-bold underline mx-auto">
          {config.title}
        </h1>
      </div>
    </div>
  );
};

const FirstLayout = () => {
  return (
    <div className="min-h-screen flex snap-center">
      <div className="relative flex flex-col m-auto">
        <img src={config.images[0].src} alt={config.images[0].alt} />
        <h1 className="text-4xl text-black font-bold underline mx-auto">
          {config.title}
        </h1>
      </div>
    </div>
  );
};

const SecondLayout = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center snap-center">
      <div className="relative flex m-auto">
        <h1 className="text-4xl text-white font-bold underline mx-auto">
          {config.description}
        </h1>
        <div className="text-white">{config.title}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="snap-mandatory snap-y">
      <div className="snap-center">
        <LandingPage />
      </div>
      <div className="snap-center">
        <FirstLayout />
      </div>
      <div className="snap-center">
        <SecondLayout />
      </div>
    </div>
  );
}

export default App;
