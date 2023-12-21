import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { pembelianHeader } from "@utils/constant/pageHeader";
import { useRecoilValue } from "recoil";
import { kelolaPembelianTableDataState } from "@store/atom/pembelianState";
import PageTable from "@components/shared/PageTable";

const KelolaPembelian = () => {
  const tableData = useRecoilValue(kelolaPembelianTableDataState);

  return (
    <Container type="app">
      <PageHeader headerData={pembelianHeader} />
      <PageTable tableData={tableData} />
    </Container>
  );
};

export default KelolaPembelian;
