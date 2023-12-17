import "./Button.css";

const Button = ({ name, onPress }) => {
  return <button onClick={onPress}>{name}</button>;
};

export default Button;
