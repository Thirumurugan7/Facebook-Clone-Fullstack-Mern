import React from "react";
import { Link } from "react-router-dom";

export default function ({ user }) {
  return (
    <div className="mmenu">
      <Link to="/profile" className="mmenu_header hover3">
        <img src={user?.picture} alt="" />
        <div className="mmenu_col">
          <span>
            {user?.first_name}
            {user?.last_name}
          </span>
          <span>See your profile</span>
        </div>
      </Link>
      <div className="mmenu_splitter"></div>
      <div className="mmenu_main hover3">
        <div className="small_circle">
          <i className="report_filled_icon"></i>
        </div>
        <div className="mmenu_col">
          <div className="mmenu_span1">Give feedback</div>
          <div className="mmenu_span2">Help us improve Facebook</div>
        </div>
      </div>
      <div className="mmenu_splitter"></div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="setting_filled_icon"></i>
        </div>
        <span>Settings & privacy</span>
        <div className="rArrow">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  );
}
