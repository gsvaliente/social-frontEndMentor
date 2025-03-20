import "./App.css";
import avatar from "../src/assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="content">
      <div className="container">
        <div className="cardIntro">
          <img src={avatar} alt="profile" className="avatar" />
          <p className="name">Jessica Randal</p>
          <p className="location">London, United Kingdom</p>
          <p className="description">"Frontend Developer and avid reader."</p>
        </div>
        <div className="cardSocial">
          <button className="button">Github</button>
          <button className="button">Frontend Mentor</button>
          <button className="button">X</button>
          <button className="button">LinkedIn</button>
          <button className="button">Instagram</button>
        </div>
      </div>
    </main>
  );
}

export default App;
