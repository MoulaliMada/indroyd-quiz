import { useState } from "react";
import Welcome from "../Welcome";

const Game = () => {
  const [gameStage, setGameStage] = useState("welcome");

  const onsubmiting = (name) => {
    console.log(name);
  };
  const renderwelcomepage = () => {
    return <Welcome name={"moulali"} submiting={onsubmiting} />;
  };

  switch (gameStage) {
    case "welcome":
      return renderwelcomepage();
    default:
      return null;
  }
};
export default Game;
