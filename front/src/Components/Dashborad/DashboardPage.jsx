import React from 'react'

const DashboardPage = () => {
    return (
        <div className="dashboardD-container">
          <h1>Welcome to Dashboard</h1>
          <p>This is the main dashboard page where you can view various metrics and summaries.</p>
          <div className="dashboardD-content">
            <h2>Summary</h2>
            <p>Here you'll find an overview of important statistics and information.</p>
            <h2>Recent Activity</h2>
            <ul>
              <li>User interactions</li>
              <li>Recent updates</li>
              <li>Notifications</li>
            </ul>
            <h2>Quick Actions</h2>
            <ul>
              <li>Create new entries</li>
              <li>View reports</li>
              <li>Manage settings</li>
            </ul>
          </div>
        </div>
  )
}

export default DashboardPage
