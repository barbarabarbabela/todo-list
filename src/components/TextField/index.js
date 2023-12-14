import "./TextField.css";

const TextField = (props) => {
  const textTyped = (event) => {
    props.handleChange(event.target.value);
  };
  return (
    <div className="TextField">
      <input
        value={props.value}
        onChange={textTyped}
        required={props.required}
        placeholder={props.placeholder}
        type={props.type}
      ></input>
    </div>
  );
};

export default TextField;
