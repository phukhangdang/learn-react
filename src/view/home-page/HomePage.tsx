import logo from "../../assets/image/logo.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wellcome to MyApp.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/dangphukhang.2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </a>
      </header>
    </div>
  );
}

export default HomePage;