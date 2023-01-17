import "./style.css";
import { Link } from "react-router-dom";
import { Logo, Search } from "../../svg";
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
      <div className="header_middle"></div>
      <div className="header_right"></div>
    </header>
  );
}
