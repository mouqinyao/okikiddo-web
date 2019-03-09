import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faIgloo, faYenSign, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import logo1 from './images/logo1.svg';
import logo2 from './images/logo2.svg';
import logo3 from './images/logo3.svg';
import profileIcon from './images/profile.svg';
import './App.scss';
import './App2.scss';

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
            <select className="group-select">
              <option>欧可逗幼儿园</option>
              <option>欧可逗幼儿园2</option>
              <option>欧可逗幼儿园3</option>
              <option>欧可逗幼儿园4</option>
            </select>
          </div>
          <div className="nav-links">
            <div className="nav-link">
              <FontAwesomeIcon icon={faColumns} />
              <span className="nav-link-text">控制台</span>
            </div>
            <div className="nav-link active">
              <FontAwesomeIcon icon={faIgloo} />              
              <span className="nav-link-text">幼园管理</span>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faYenSign} />
              <span className="nav-link-text">财务管理</span>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faCog} />
              <span className="nav-link-text">设置</span>
            </div>
          </div>
          <div className="footer">
            <img src={logo3} alt="okikiddo" className="footer-image"/>
          </div>
        </div>
        <div className="dashboard-content manage-columns">
            <div className="manage-board">
                <div className="manage-role">
                    <button className="button student">学生管理</button>
                    <button className="button teacher">老师管理</button>
                </div>
                <div className="manage-general">
                  <div className="people-title">学生人数</div>
                    
                  <div className="manage-people">
                    <div className="people-label">
                      <span className="people-number">123</span>
                      <span>人</span>
                    </div>
                    <div className="manage-people-detail">
                      <div className="manage-people-gender">
                        <div>男生：</div>
                        <div>61人</div>
                      </div>
                      <div className="manage-people-gender">
                        <div>女生：</div>
                        <div>62人</div>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="manage-detail">
                <div className="manage-role">
                    <button className="button course">课程管理</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
