import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { kategoriObatHeader } from "@utils/constant/pageHeader";
import PageTable from "@components/shared/PageTable";
import { useRecoilValue } from "recoil";
import { kategoriObatTableDataState } from "@store/atom/obatState";

const KategoriObat = () => {
  const tableData = useRecoilValue(kategoriObatTableDataState);

  return (
    <Container type="app">
      <PageHeader headerData={kategoriObatHeader} />
      <PageTable tableData={tableData} />
    </Container>
  );
};

export default KategoriObat;
