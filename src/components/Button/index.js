import "./Button.css";

const Button = ({ name, onPress, submitForm }) => {
  return (
    <button onClick={onPress} onSubmit={submitForm}>
      {name}
    </button>
  );
};

export default Button;
