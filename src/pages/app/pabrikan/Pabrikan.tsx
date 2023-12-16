import { StyleSheet } from "react-native";
import React from "react";
import Container from "@containers/Container";
import { useRecoilState, useRecoilValue } from "recoil";
import { pabrikanShowAddModalState, pabrikanTableDataState } from "@store/atom/pabrikanState";
import PageHeader from "@components/shared/PageHeader";
import PageTable from "@components/shared/PageTable";
import AddFormModal from "@components/shared/AddFormModal";
import { addPabrikForm } from "@utils/constant/appForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppPabrikanParamType } from "@utils/types/RootStackParamType";
import { pabrikanHeader } from "@utils/constant/pageHeader";

const Pabrikan = () => {
  const pabrikanTableData = useRecoilValue(pabrikanTableDataState);
  const [showAddModal, setShowAddModal] = useRecoilState(pabrikanShowAddModalState);

  const nav = useNavigation<NativeStackNavigationProp<AppPabrikanParamType, "PabrikanPabrikan">>();

  return (
    <Container type="app">
      <PageHeader headerData={pabrikanHeader} />
      <PageTable tableData={pabrikanTableData} nav={nav} />
      <AddFormModal visible={showAddModal} setShowModal={setShowAddModal} formData={addPabrikForm} />
    </Container>
  );
};

export default Pabrikan;

const styles = StyleSheet.create({});
