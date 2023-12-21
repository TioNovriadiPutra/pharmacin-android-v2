import React, { useEffect } from "react";
import Container from "@containers/Container";
import { useRecoilState, useRecoilValue } from "recoil";
import { pabrikanAddErrorState, pabrikanShowAddModalState } from "@store/atom/pabrikanState";
import PageHeader from "@components/shared/PageHeader";
import PageTable from "@components/shared/PageTable";
import AddFormModal from "@components/shared/AddFormModal";
import { addPabrikForm } from "@utils/constant/appForm";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppPabrikanParamType } from "@utils/types/RootStackParamType";
import { pabrikanHeader } from "@utils/constant/pageHeader";
import { useQuery } from "@tanstack/react-query";
import useFecthData from "@hooks/useFecthData";
import ENDPOINT from "@utils/config/Endpoint";
import CustomTableSkeleton from "@components/custom/CustomTableSkeleton";
import { pabrikanTableSelectorFamily } from "@store/selector/pabrikanSelector";

const Pabrikan = () => {
  const [showAddModal, setShowAddModal] = useRecoilState(pabrikanShowAddModalState);
  const [errorMessage, setErrorMessage] = useRecoilState(pabrikanAddErrorState);

  const isFocused = useIsFocused();
  const nav = useNavigation<NativeStackNavigationProp<AppPabrikanParamType, "PabrikanPabrikan">>();
  const { getFunction, postFunction } = useFecthData();
  const { data, isLoading, refetch } = useQuery({ queryKey: ["getClinicFactories"], queryFn: () => getFunction(ENDPOINT.factoryDefault, true) });

  const tableData = useRecoilValue(pabrikanTableSelectorFamily(data));

  const onSubmit = (data: any) => {
    postFunction(ENDPOINT.factoryDefault, data, true)
      .then(() => {
        setShowAddModal(false);
        refetch();
      })
      .catch((error: any) => {
        setErrorMessage(error);
      });
  };

  useEffect(() => {
    if (!isFocused) {
      setErrorMessage(null);
    }
  }, [isFocused]);

  return (
    <Container type="app">
      <PageHeader headerData={pabrikanHeader} />

      {isLoading ? <CustomTableSkeleton /> : <PageTable tableData={tableData} nav={nav} />}

      <AddFormModal visible={showAddModal} setShowModal={setShowAddModal} formData={addPabrikForm} validationError={errorMessage} setValidationError={setErrorMessage} onSubmit={onSubmit} />
    </Container>
  );
};

export default Pabrikan;
