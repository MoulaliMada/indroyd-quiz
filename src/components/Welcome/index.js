import "./index.css";
import { useState } from "react";

const Welcome = (props) => {
  const { submiting } = props;
  const [warning, setWarning] = useState(false);
  const [inputName, setInputName] = useState("");
  const onclickSubmit = (event) => {
    event.preventDefault();
    if (inputName === "") {
      setWarning(true);
    } else {
      submiting("namaste");
    }
  };
  const onChangeInput = (event) => {
    setInputName(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="welcom-bg-container">
      <form className="welcom-container" onSubmit={onclickSubmit}>
        <h1 className="heading">Welcome Indroyd Quiz</h1>
        <label className="label">Enter Your Name</label>
        <input
          className="input-name"
          value={inputName}
          onChange={onChangeInput}
          placeholder="enter your name..."
        />
        {warning ? (
          <p className="warning">*Please enter your name.</p>
        ) : (
          <p style={{ margin: "0px", height: "20px" }}></p>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Welcome;
