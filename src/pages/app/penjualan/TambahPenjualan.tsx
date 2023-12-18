import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { penjualanHeader } from "@utils/constant/pageHeader";
import { useForm } from "react-hook-form";
import TransactionContent from "@components/shared/TransactionContent";
import { sellingForm } from "@utils/constant/appForm";

const TambahPenjualan = () => {
  const { control, handleSubmit } = useForm();

  return (
    <Container type="app">
      <PageHeader headerData={penjualanHeader} />
      <TransactionContent control={control} inputData={sellingForm} />
    </Container>
  );
};

export default TambahPenjualan;
