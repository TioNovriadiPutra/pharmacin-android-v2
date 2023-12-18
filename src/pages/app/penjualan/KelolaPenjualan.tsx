import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { kelolaPenjualanHeader } from "@utils/constant/pageHeader";
import PageTable from "@components/shared/PageTable";
import { useRecoilValue } from "recoil";
import { penjualanTableDataState } from "@store/atom/kelolaPenjualanState";

const KelolaPenjualan = () => {
  const penjualanTableData = useRecoilValue(penjualanTableDataState);

  return (
    <Container type="app">
      <PageHeader headerData={kelolaPenjualanHeader} />
      <PageTable tableData={penjualanTableData} />
    </Container>
  );
};

export default KelolaPenjualan;
