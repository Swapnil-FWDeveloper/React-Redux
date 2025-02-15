import UserPage from "./component/UserPaage";
import "./styles.css";

export default function App() {
  let arr = [
    {
      title: "Hello Swapnil Shende",
      name: " Swapnil Shende",
      age: 22,
      image: "",
    },
    {
      title: "Hello John Deo",
      name: " John Deo",
      age: 21,
      image: "",
    },
    {
      title: "Hello Robert Stainly",
      name: " Robert Stainly",
      age: 25,
      image: "",
    },
  ];
  return (
    <div className="App">
      <UserPage userData={arr} />
    </div>
  );
}
