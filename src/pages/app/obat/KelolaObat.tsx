import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { obatHeader } from "@utils/constant/pageHeader";
import PageTable from "@components/shared/PageTable";
import { useRecoilState, useRecoilValue } from "recoil";
import { kelolaObatTableDataState, obatShowAddModalState } from "@store/atom/obatState";
import AddFormModal from "@components/shared/AddFormModal";
import { addObatForm } from "@utils/constant/appForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppObatStackParamType } from "@utils/types/RootStackParamType";

const KelolaObat = () => {
  const tableData = useRecoilValue(kelolaObatTableDataState);
  const [showAddModal, setShowAddModal] = useRecoilState(obatShowAddModalState);

  const nav = useNavigation<NativeStackNavigationProp<AppObatStackParamType, "KelolaObat">>();

  return (
    <Container type="app">
      <PageHeader headerData={obatHeader} />
      <PageTable tableData={tableData} nav={nav} />
      <AddFormModal formData={addObatForm} visible={showAddModal} setShowModal={setShowAddModal} />
    </Container>
  );
};

export default KelolaObat;
