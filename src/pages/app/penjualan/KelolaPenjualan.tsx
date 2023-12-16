import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { kelolaPenjualanHeader } from "@utils/constant/pageHeader";

const KelolaPenjualan = () => {
  return (
    <Container type="app">
      <PageHeader headerData={kelolaPenjualanHeader} />
    </Container>
  );
};

export default KelolaPenjualan;
