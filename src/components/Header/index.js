import Lottie from "react-lottie-player";
import "./header.css";
import ghost from "./ghost.json";

const Header = () => {
  return (
    <div className="header">
      <Lottie
        loop
        animationData={ghost}
        play
        style={{ width: 150, height: 120 }}
      />
      <h1>GeekDirectory</h1>
    </div>
  );
};

export default Header;
