import "./App.css";
import LandingPage from "./stores/pages/LandingPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MobilePage from "./stores/pages/MobilePage";
import ComputerPage from "./stores/pages/ComputerPage";
import FurniturePage from "./stores/pages/FurniturePage";
import WatchPage from "./stores/pages/WatchPage";
import MensPage from "./stores/pages/MensPage";
import WomensPage from "./stores/pages/WomensPage";
import AcPage from "./stores/pages/AcPage";
import BookPage from "./stores/pages/BookPage";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./stores/UserCart";
import WhisCart from "./stores/WhisCart";
import KitchenSingle from "./singles/KitchenSingle";
import KitchenPage from "./stores/pages/KitchenPage";
import FridgePage from "./stores/pages/FridgePage";
import FridgeSingle from "./singles/FridgeSingle";
import ComputerSingle from "./singles/ComputerSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import WatchSingle from "./singles/WatchSingle";
import MensSingle from "./singles/MensSingle";
import WomensSingle from "./singles/WomensSingle";
import AcSingle from "./singles/AcSingle";
import BooksSingle from "./singles/BooksSingle";
import TvPage from "./stores/pages/TvPage";
import TvSingle from "./singles/TvSingle";
import SpeakerSingle from "./singles/SpeakerSingle";
import SpeakerPage from "./stores/pages/SpeakerPage";
import Signin from "./stores/Components/Signin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
        <Route path="/fridge/:id" element={<FridgeSingle />} />
        <Route path="/computer/:id" element={<ComputerSingle />} />
        <Route path="/furniture/:id" element={<FurnitureSingle />} />

        <Route path="/watch/:id" element={<WatchSingle />} />
        <Route path="/mens/:id" element={<MensSingle />} />
        <Route path="/womens/:id" element={<WomensSingle />} />
        <Route path="/ac/:id" element={<AcSingle />} />
        <Route path="/books/:id" element={<BooksSingle />} />
        <Route path="/tv/:id" element={<TvSingle />} />
        <Route path="/speaker/:id" element={<SpeakerSingle />} />

        <Route path="/cart" element={<UserCart />} />
        <Route path="/whislist" element={<WhisCart />} />
      </Routes>
    </div>
  );
}

export default App;
