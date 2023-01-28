import "./styles.css";

let date = new Date();
let hour = date.getHours();

let time = "";

let styles = {
  color: "",
  backgroundColor: ""
};

if (hour < 12) {
  time = "BREAKFAST";
  styles.color = "black";
  styles.backgroundColor = "yellow";
} else if (hour < 18) {
  time = "LUNCH";
  styles.color = "blue";
  styles.backgroundColor = "pink";
} else if (hour < 24) {
  time = "DINNER";
  styles.color = "red";
  styles.backgroundColor = "black";
}

export default function App() {
  return (
    <div className="App">
      <h1 style={styles}>{time}</h1>
    </div>
  );
}
