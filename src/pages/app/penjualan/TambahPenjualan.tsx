import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { penjualanHeader } from "@utils/constant/pageHeader";

const TambahPenjualan = () => {
  return (
    <Container type="app">
      <PageHeader headerData={penjualanHeader} />
    </Container>
  );
};

export default TambahPenjualan;
