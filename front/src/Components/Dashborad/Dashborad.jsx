import React, { useState } from 'react';
import './Dashboard.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import FeedbackPage from './FeedbackPage';
import Review from './ReviewPage';
import History from './History';
import Logout from './Logout';
import ProfileUpdate from './ProfileUpdate';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <NavLink to="/dashboard" activeClassName="active" onClick={() => setActivePage('Dashboard')}>
          Dashboard
        </NavLink>
        <NavLink to="/review" activeClassName="active" onClick={() => setActivePage('Review')}>
          Review
        </NavLink>
        <NavLink to="/feedbackd" activeClassName="active" onClick={() => setActivePage('Feedback')}>
          Feedback
        </NavLink>
        <NavLink to="/history" activeClassName="active" onClick={() => setActivePage('History')}>
          History
        </NavLink>
        <NavLink to="/profileupdate" activeClassName="active" onClick={() => setActivePage('ProfileUpdate')}>
          Profile Update
        </NavLink>
        <NavLink to="/logout" activeClassName="active" onClick={() => setActivePage('Logout')}>
          Logout
        </NavLink>
      </div>
      <div className="main-content">
        <Switch>
          <Route path="/Dashborad">
            <DashboardPage />
          </Route>
          <Route path="/Dashborad">
            <Review />
          </Route>
          <Route path="/Dashborad">
            <FeedbackPage />
          </Route>
          <Route path="/Dashborad">
            <History />
          </Route>
          <Route path="/Dashborad">
            <ProfileUpdate />
          </Route>
          <Route path="/Dashborad">
            <Logout />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
