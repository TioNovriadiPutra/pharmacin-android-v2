import React from "react";
import Container from "@containers/Container";
import { useRecoilValue } from "recoil";
import PageHeader from "@components/shared/PageHeader";
import PageTable from "@components/shared/PageTable";
import AddFormModal from "@components/shared/AddFormModal";
import { addPabrikForm } from "@utils/constant/appForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppPabrikanParamType } from "@utils/types/RootStackParamType";
import { pabrikanHeader } from "@utils/constant/pageHeader";
import { useQuery } from "@tanstack/react-query";
import { ENDPOINT } from "@utils/config/Endpoint";
import CustomTableSkeleton from "@components/custom/CustomTableSkeleton";
import { pabrikanTableSelectorFamily } from "@store/selector/pabrikanSelector";
import { getFunction } from "@utils/helper/fetch";

const Pabrikan = () => {
  const nav = useNavigation<NativeStackNavigationProp<AppPabrikanParamType, "PabrikanPabrikan">>();
  const { data, isLoading } = useQuery({ queryKey: ["getClinicFactories"], queryFn: () => getFunction(ENDPOINT.factoryDefault, true) });

  const tableData = useRecoilValue(pabrikanTableSelectorFamily(data));

  return (
    <Container type="app">
      <PageHeader headerData={pabrikanHeader} />

      {isLoading || !tableData ? <CustomTableSkeleton /> : <PageTable tableData={tableData} nav={nav} />}

      <AddFormModal formData={addPabrikForm} />
    </Container>
  );
};

export default Pabrikan;
