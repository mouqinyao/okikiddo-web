import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faIgloo, faYenSign, faCog } from '@fortawesome/free-solid-svg-icons'
import logo1 from './images/logo1.svg';
import logo2 from './images/logo2.svg';
import logo3 from './images/logo3.svg';
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
            <select className="group-select">
              <option>欧可逗幼儿园</option>
              <option>欧可逗幼儿园2</option>
              <option>欧可逗幼儿园3</option>
              <option>欧可逗幼儿园4</option>
            </select>
          </div>
          <div className="nav-links">
            <div className="nav-link active">
              <FontAwesomeIcon icon={faColumns} />
              <span className="nav-link-text">控制台</span>
            </div>
            <div className="nav-link">
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
        <div className="center-content">
          <div className="center-top-content">
            <div className="status-card-container">
              <p className="status-card-title">今日出勤</p>
              <div className="status-card-fill">content content content content content</div>
              <div className="status-card-footer">
                <div className="card-footer-row">
                  <div className="card-footer-left">
                    <span>到校</span>
                    <span><span className="card-footer-number">146</span>人</span>
                  </div>
                  <div className="card-footer-right">
                    <span>迟到</span>
                    <span><span className="card-footer-number">20</span>人</span>
                  </div>
                </div>
                <div className="card-footer-row">
                  <div className="card-footer-left">
                    <span>请假</span>
                    <span><span className="card-footer-number">25</span>人</span>
                  </div>
                  <div className="card-footer-right">
                    <span>未知</span>
                    <span><span className="card-footer-number">4</span>人</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="status-card-container">
              <p className="status-card-title">晨检异常</p>
              <div className="status-card-fill card-report-section">
                <label>2</label>
                <span>人</span>
              </div>
              <div className="status-card-footer">
                <div className="card-footer-row">
                  <div className="card-footer-left">
                    <span>大1班</span>
                    <span>李小明</span>
                  </div>
                  <div className="card-footer-right">38.9C</div>
                </div>
                <div className="card-footer-row">
                  <div className="card-footer-left">
                    <span>小2班</span>
                    <span>张小小</span>
                  </div>
                  <div className="card-footer-right">29.9C</div>
                </div>
              </div>
            </div>
            <div className="status-card-container">
              <p className="status-card-title">收支情况</p>
              <div className="status-card-fill">
              </div>
              <div className="status-card-footer">
                <div className="card-footer-row">
                    <div className="card-footer-left">
                      <span>收入：</span>
                    </div>
                  <div className="card-footer-right">$320,106</div>
                </div>
                <div className="card-footer-row">
                  <div className="card-footer-left">
                    <span>支出：</span>
                  </div>
                  <div className="card-footer-right">$210,306</div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-bottom-content">bottom content</div>
        </div>
        <div className="right-content">
          calender
        </div>
      </div>
    );
  }
}

export default App;
