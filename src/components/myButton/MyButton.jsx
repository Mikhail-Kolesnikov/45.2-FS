import "./myButton.css";
export default function MyButton({ func, text, type ="button" }) {
  return (
    <button type={type} className="button" onClick={func}>
      {text}
    </button>
  );
}
