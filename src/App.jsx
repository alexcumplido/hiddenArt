import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { Home } from "./routes/home/Home";
import { Experience } from "./routes/experience/Experience";
import { ProfileUser } from "./routes/profileUser/ProfileUser";
import { ProfileArtist } from "./routes/profileArtist/ProfileArtist";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="profileUser" element={<ProfileUser />} />
          <Route path="profileArtist" element={<ProfileArtist />} />
          <Route path="experiences/id" element={<Experience />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
