import React, { useState } from "react";

function Ambiance() {
  const [clickCount, setClickCount] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);

    if (clickCount >= 32) {
      setPlaySound(true);
    }

    if (clickCount >= 33) {
      setShowImage(true);
    }
  };

  return (
    <div>
      {playSound && (
        <audio autoPlay volume={1.0}>
          <source src="ambiance.mp3" type="audio/mp3" />
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
      )}
    </div>
  );
}

export default Ambiance;
