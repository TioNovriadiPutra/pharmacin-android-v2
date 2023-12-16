import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { colors } from "@themes/colors";
import DashboardStat from "@components/custom/DashboardStat";
import DashboardContent from "@components/custom/DashboardContent";
import { useRecoilValue } from "recoil";
import { cashierStatusState } from "@store/atom/dashboardState";
import { dashboardHeaderClose, dashboardHeaderOpen } from "@utils/constant/pageHeader";

const Dashboard = () => {
  const cashierStatus = useRecoilValue(cashierStatusState);

  return (
    <Container type="app" color={colors.PageDefault}>
      <PageHeader headerData={cashierStatus ? dashboardHeaderOpen : dashboardHeaderClose} />
      <DashboardStat />
      <DashboardContent />
    </Container>
  );
};

export default Dashboard;
