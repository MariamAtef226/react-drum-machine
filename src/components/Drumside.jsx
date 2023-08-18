export default function Drumside(props) {
    
  return (
    <div className="drum-side text-light col-md-4">
      <h4 className="mb-5 mt-4">Ultimate Drum Machine</h4>
      <div id="display" className="text-dark">
        {props.audioName}
      </div>
      <div className="ms-auto me-auto text-center mt-4 mb-4">
        <div>Power</div>
        <label className="switch">
          <input type="checkbox" onChange={props.toggleHandler}/>
          <span className="slider round"></span>
        </label>
      </div>

    </div>
  );
}
