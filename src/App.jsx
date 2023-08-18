import Drumpads from "./components/Drumpads";
import Drumside from "./components/Drumside";
import { useState, useEffect } from "react";

function keypress(event,power,displayName) {
  var audios = Array.from(document.querySelectorAll("audio"));
  let audio = audios.filter((a) => event.key == a.classList.value)[0];
  if (power) {
    console.log(power);
    audio.play();
    displayName(audio.id);
  } else {
    displayName("Turn the power on");
  }
}

function App() {
  let [power, setPower] = useState(false);
  let [audioName, setAudioName] = useState("Turn the power on");

  useEffect(
    function () {
      function handleKeyPress(event) {
        keypress(event, power, displayName);
      }

      if (power) {
        document.addEventListener("keydown", handleKeyPress);
        console.log("added event listener");
      } else {
        document.removeEventListener("keydown", handleKeyPress);
        console.log("removed event listener");
      }

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
        console.log("cleanup: removed event listener");
      };
    },
    [power]
  );

  function togglePower() {
    setPower((prev) => !prev);
  }

  function displayName(name) {
    setAudioName(name);
  }

  return (
    <>
      <div className="drum-machine bg-dark p-4 row d-flex flex-column flex-md-row align-items-center">
        <Drumpads power={power} disp={displayName} />
        <Drumside toggleHandler={togglePower} audioName={audioName} />
      </div>
    </>
  );
}

export default App;
