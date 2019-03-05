import React, { Component } from 'react';
import logo1 from './images/logo1.svg';
import logo2 from './images/logo2.svg';
import profileIcon from './images/profile.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="left-content">
          <div className="header-container">
            <img src={logo1} alt="logo" className="logo1" />
            <img src={logo2} alt="logo" className="logo2" />
          </div>
          <div className="profile-container">
            <div className="profile-icon-wrapper">
              <img src={profileIcon} alt="profile" className="profile-icon" />
            </div>
            <div className="profile-info">
              <div className="profile-title">园长</div>
              <div className="profile-name">王小二</div>
            </div>
          </div>
          <div className="profile-group">
            <label className="group-title">园所切换: </label>
            <select>
              <option>欧可逗幼儿园</option>
              <option>欧可逗幼儿园2</option>
              <option>欧可逗幼儿园3</option>
              <option>欧可逗幼儿园4</option>
            </select>
          </div>
          <div className="nav-links">
            <div className="nav-link active">控制台</div>
            <div className="nav-link">幼园管理</div>
            <div className="nav-link">财务管理</div>
            <div className="nav-link">设置</div>
          </div>
        </div>
        <div className="right-content"></div>
      </div>
    );
  }
}

export default App;
