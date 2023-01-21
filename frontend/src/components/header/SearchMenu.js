import { Return, Search } from "../../svg";

export default function SearchMenu({ color }) {
  return (
    <div className="header_left search_area scrollbar">
      <div className="search_wrap">
        <div className="header_logo">
          <div className="circle hover1">
            <Return />
          </div>
        </div>
        <div className="search">
          <div>
            <Search color={color} />
          </div>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="search_history_header"></div>
    </div>
  );
}