import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import ScreenSearch from "./screens/SearchResourcesScreen/SearchScreen.jsx";
import ScreenGetResources from "./screens/GetResourcesScreen/GetResourcesScreen.jsx";
import { useState } from "react";
import { baseResources } from "./Data/headerData/materialsData.js";
import GameScreen from "./screens/GameScreen/GameScreen.jsx";

export default function Game() {
  const [screen, setScreen] = useState();

  function changeScreen(active) {
    setScreen(active);
  }

  return (
    <>
      <MainScreen></MainScreen>
      <ScreenSearch />
      <ScreenGetResources />
      <GameScreen active={screen} />
    </>
  );
}