import "./App.css";
import avatar from "../src/assets/images/avatar-jessica.jpeg";

const socialMedia = [
  {
    name: "Github",
  },
  {
    name: "Frontend Mentor",
  },
  {
    name: "X",
  },
  {
    name: "LinkedIn",
  },
  {
    name: "Instagram",
  },
];

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
          {socialMedia.map((social) => (
            <button className="button">{social.name}</button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
