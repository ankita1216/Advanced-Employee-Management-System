// src/pages/Dashboard.js
import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
  font-family: 'Arial', sans-serif;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.isCollapsed ? "80px" : "250px")};
  background: #130052;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.isCollapsed ? "10px" : "20px")};
  transition: width 0.3s;
`;

const SidebarHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: ${(props) => (props.isCollapsed ? "center" : "left")};
  display: ${(props) => (props.isCollapsed ? "none" : "block")};
`;

const CollapseButton = styled.button`
  background: #342f69;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  transition: background 0.3s;

  &:hover {
    background: #5e57a1;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  text-align: ${(props) => (props.isCollapsed ? "center" : "left")};

  &:hover {
    background: #342f69;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TopNav = styled.div`
  height: 60px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 300px;
  outline: none;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eeeeee;
`;

const MainDashboard = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const DashboardCard = styled.div`
  flex: 1;
  min-width: 250px;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #130052;
`;

const ChartPlaceholder = styled.div`
  flex: 1;
  min-width: 500px;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #cccccc;
`;

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({
    totalEmployees: 120,
    activeProjects: 8,
    attendanceToday: 105,
    pendingRequests: 14,
  });

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <DashboardContainer>
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed}>
        <SidebarHeader isCollapsed={isSidebarCollapsed}>
          EMS Dashboard
        </SidebarHeader>
        <CollapseButton onClick={handleSidebarToggle}>
          {isSidebarCollapsed ? ">" : "<"}
        </CollapseButton>
        <SidebarMenu>
          <SidebarMenuItem isCollapsed={isSidebarCollapsed}>
            Overview
          </SidebarMenuItem>
          <SidebarMenuItem isCollapsed={isSidebarCollapsed}>
            Employee Records
          </SidebarMenuItem>
          <SidebarMenuItem isCollapsed={isSidebarCollapsed}>
            Attendance
          </SidebarMenuItem>
          <SidebarMenuItem isCollapsed={isSidebarCollapsed}>
            Performance
          </SidebarMenuItem>
          <SidebarMenuItem isCollapsed={isSidebarCollapsed}>
            Payroll
          </SidebarMenuItem>
          <SidebarMenuItem isCollapsed={isSidebarCollapsed}>
            Settings
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <TopNav>
          <SearchBar
            placeholder="Search for employees, projects..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ProfileSection>
            <Avatar />
            <span>Admin</span>
          </ProfileSection>
        </TopNav>
        <MainDashboard>
          {/* Dashboard Cards */}
          <DashboardCard>
            <CardTitle>Total Employees</CardTitle>
            <CardValue>{data.totalEmployees}</CardValue>
          </DashboardCard>
          <DashboardCard>
            <CardTitle>Active Projects</CardTitle>
            <CardValue>{data.activeProjects}</CardValue>
          </DashboardCard>
          <DashboardCard>
            <CardTitle>Attendance Today</CardTitle>
            <CardValue>{data.attendanceToday}</CardValue>
          </DashboardCard>
          <DashboardCard>
            <CardTitle>Pending Requests</CardTitle>
            <CardValue>{data.pendingRequests}</CardValue>
          </DashboardCard>
          <ChartPlaceholder>Chart Placeholder</ChartPlaceholder>
        </MainDashboard>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
