import "./TextField.css";

const TextField = (props) => {
  return (
    <div className="TextField">
      <input
        value={props.value}
        onChange={(event) => props.handleChange(event.target.value)}
        required={props.required}
        placeholder={props.placeholder}
        type={props.type}
      ></input>
    </div>
  );
};

export default TextField;
