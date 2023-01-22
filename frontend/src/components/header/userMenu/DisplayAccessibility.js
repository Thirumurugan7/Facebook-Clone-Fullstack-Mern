import React from "react";

export default function DisplayAccessibility({ setVisible }) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div className="circle hover1">
          <i className="arrow_back_icon"></i>
        </div>
        Display & Accessibility
      </div>
      <div className="mmenu_main">
        <div className="small_circle">
          <i className="dark_filled_icon"></i>
        </div>
        <div className="mmenu_col">
          <div className="mmenu_span1">Dark Mode</div>
          <div className="mmenu_span2">
            Adjust the appearance of Facebook to redure the glare and your your
            eyes a break
          </div>
        </div>
      </div>
    </div>
  );
}
