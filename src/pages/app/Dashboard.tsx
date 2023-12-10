import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { colors } from "@themes/colors";
import { useRecoilValueLoadable } from "recoil";
import { dashboardHeaderSelector } from "@store/selector/dashboardSelector";
import DashboardStat from "@components/custom/DashboardStat";
import DashboardContent from "@components/custom/DashboardContent";

const Dashboard = () => {
  const dashboardHeader = useRecoilValueLoadable(dashboardHeaderSelector);

  return (
    <Container type="app" color={colors.PageDefault}>
      {dashboardHeader.state === "hasValue" && <PageHeader headerData={dashboardHeader.contents} />}
      <DashboardStat />
      <DashboardContent />
    </Container>
  );
};

export default Dashboard;
