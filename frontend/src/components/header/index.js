import "./style.css";
import { Link } from "react-router-dom";
import {
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Search,
  Watch,
} from "../../svg";
export default function Header() {
  const color = "#65676b";
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1">
          <Search color={color} />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hide_input"
          />
        </div>
      </div>
      <div className="header_middle">
        <Link to="/" className="middle_icon">
          <HomeActive />
        </Link>
        <Link to="/" className="middle_icon">
          <Friends />
        </Link>
        <Link to="/" className="middle_icon">
          <Watch />
        </Link>
        <Link to="/" className="middle_icon">
          <Market />
        </Link>
        <Link to="/" className="middle_icon">
          <Gaming />
        </Link>
      </div>
      <div className="header_right"></div>
    </header>
  );
}
