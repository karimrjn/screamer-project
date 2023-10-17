import { useState, useRef } from "react";


function Counter() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(
    "https://source.unsplash.com/random/300x300?"
  );


  
  const ref = useRef(null)

  function changeImage() {
    setImage("https://source.unsplash.com/random/300x30" + Math.random());
  }

  return count < 33 ? (
    <div>
      Nombre de clics : {count}
      <button
        onClick={() => {
          setCount(count + 1);
          if (count % 10 === 9) {
            changeImage();
          }
          if(count === 33 ) {
            ref.current.play()
          }
          
        }}
      >
        Clic
      </button>
      <br />
      <img src={image} alt="Image aléatoire" />
      
    </div>
  ) : (
    <div>
      <img
        className="ambiancePhoto"
        src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgsrc.cineserie.com%2F2017%2F02%2Fscreamer.jpg%3Fver%3D1"
        alt=""
      />
      <audio autoPlay={true} src={"/video/ambiance.ogg"} ref={ref}>
      </audio>
      {/* <audio autoPlay volume={1.0}>
        <source src="/video/ambiance.mp3" type="audio/mp3" />
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio> */}
    </div>
  );
}

export default Counter;
