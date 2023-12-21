import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { colors } from "@themes/colors";
import DashboardStat from "@components/custom/DashboardStat";
import DashboardContent from "@components/custom/DashboardContent";
import { useRecoilValue } from "recoil";
import { cashierStatusState } from "@store/atom/dashboardState";
import { dashboardHeaderClose, dashboardHeaderOpen } from "@utils/constant/pageHeader";
import useFecthData from "@hooks/useFecthData";
import ENDPOINT from "@utils/config/Endpoint";
import CustomDashboardStatSkeleton from "@components/custom/CustomDashboardStatSkeleton";
import { useQuery } from "@tanstack/react-query";
import CustomDashboardContentSkeleton from "@components/custom/CustomDashboardContentSkeleton";

const Dashboard = () => {
  const cashierStatus = useRecoilValue(cashierStatusState);

  const { getFunction } = useFecthData();
  const { data, isLoading, error } = useQuery({ queryKey: ["dashboardReport"], queryFn: () => getFunction(ENDPOINT.clinicReport, true) });

  return (
    <Container type="app" color={colors.PageDefault}>
      <PageHeader headerData={cashierStatus ? dashboardHeaderOpen : dashboardHeaderClose} />
      {isLoading ? <CustomDashboardStatSkeleton /> : <DashboardStat data={data.data} />}
      {isLoading ? <CustomDashboardContentSkeleton /> : <DashboardContent data={data.data} />}
    </Container>
  );
};

export default Dashboard;
