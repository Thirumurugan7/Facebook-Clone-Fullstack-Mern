import React from "react";

export default function SettingsPrivacy() {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div className="circle">
          <i className="arrow_back_icon"></i>
        </div>
        Settings & Privacy
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Settings</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="privacy_shortcuts_icon"></i>
        </div>
        <span>Privacy Shortcuts</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="activity_log_icon"></i>
        </div>
        <span>Activity log</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="news_icon"></i>
        </div>
        <span>News Feed Preferences</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="language_icon"></i>
        </div>
        <span>Language</span>
      </div>
    </div>
  );
}
