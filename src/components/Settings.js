import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 50,
      darkMode: false,
      notifications: true
    };
  }

  handleVolumeChange = (e) => {
    this.setState({ volume: e.target.value });
  }
  handleLanguageChange = (e) => {
    this.setState({ language: e.target.checked });
  }

  handleDarkModeChange = (e) => {
    this.setState({ darkMode: e.target.checked });
  }

  handleNotificationsChange = (e) => {
    this.setState({ notifications: e.target.checked });
  }

  render() {
    return (
      <div className="settings-container">
        <h2>Settings</h2>
        <form>
          <div className="form-group">
            <label htmlFor="volume">Volume:</label>
            <input type="range" id="volume" name="volume" min="0" max="100" value={this.state.volume} onChange={this.handleVolumeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <input type="checkbox" id="darkmode" name="language" checked={this.state.language} onChange={this.handleLanguageChange} />
          </div>
          <div className="form-group">
            <label htmlFor="darkMode">Dark mode:</label>
            <input type="checkbox" id="darkMode" name="darkMode" checked={this.state.darkMode} onChange={this.handleDarkModeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="notifications">Notifications:</label>
            <input type="checkbox" id="notifications" name="notifications" checked={this.state.notifications} onChange={this.handleNotificationsChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
