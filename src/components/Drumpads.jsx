export default function Drumpads(props) {

  let power = props.power;

  let audios = [
    {
      name: "Heater 1",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      key: "q",
    },
    {
      name: "Heater 2",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      key: "w",
    },
    {
      name: "Heater 3",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      key: "e",
    },
    {
      name: "Heater 4",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      key: "a",
    },
    {
      name: "Clap",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      key: "s",
    },
    {
      name: "Open-HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      key: "d",
    },
    {
      name: "Kick-n'-Hat",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      key: "z",
    },
    {
      name: "Kick",
      link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      key: "x",
    },
    {
      name: "Closed-HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      key: "c",
    },
  ];

  let drums = audios.map((a) => {
    return (
      <div className="col-4">
        <div
          className="drumpad"
          name={a.name}
          onClick={playAudio}
          onMouseOver={(event) => {
            const keyvalue = event.currentTarget.querySelector('.keyvalue');
            if (keyvalue) {
              keyvalue.style.opacity = '1';
            }
          }}
          onMouseOut={(event) => {
            const keyvalue = event.currentTarget.querySelector('.keyvalue');
            if (keyvalue) {
              keyvalue.style.opacity = '0';
            }
          }}
        >
          <div className='mt-md-5 mt-3 w-100 text-center keyvalue' style={{opacity:'0'}}>{a.key.toUpperCase()}</div>
          <audio id={a.name} className={a.key} src={a.link}></audio>
        </div>
      </div>
    );
  });


  function playAudio(event) {
    var audio = event.target.querySelector("audio");
    if (power) {
      audio.play();
      props.disp(audio.id);
    } else {
      props.disp("Turn the power on");
    }
  }


  return (
    <div className="drum-base text-light col-md-8">
      <div className="row mb-3">
        {drums[0]}
        {drums[1]}
        {drums[2]}
      </div>
      <div className="row mb-3">
        {drums[3]}
        {drums[4]}
        {drums[5]}
      </div>
      <div className="row mb-3">
        {drums[6]}
        {drums[7]}
        {drums[8]}
      </div>
    </div>
  );
}
