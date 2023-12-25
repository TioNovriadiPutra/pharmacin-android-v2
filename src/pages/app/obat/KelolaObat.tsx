import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { obatHeader } from "@utils/constant/pageHeader";
import PageTable from "@components/shared/PageTable";
import AddFormModal from "@components/shared/AddFormModal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppObatStackParamType } from "@utils/types/RootStackParamType";
import { useQuery } from "@tanstack/react-query";
import { getFunction } from "@utils/helper/fetch";
import { ENDPOINT } from "@utils/config/Endpoint";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { obatAddFormSelector, obatTableSelectorFamily } from "@store/selector/obatSelector";
import CustomTableSkeleton from "@components/custom/CustomTableSkeleton";
import CustomPageHeaderSkeleton from "@components/custom/CustomPageHeaderSkeleton";
import { editFromState } from "@store/atom/globalState";

const KelolaObat = () => {
  const nav = useNavigation<NativeStackNavigationProp<AppObatStackParamType, "KelolaObat">>();
  const { data, isLoading } = useQuery({ queryKey: ["getClinicDrugs"], queryFn: () => getFunction(ENDPOINT.drugDefault, true) });

  const tableData = useRecoilValue(obatTableSelectorFamily(data));
  const formData = useRecoilValueLoadable(obatAddFormSelector);
  const editData = useRecoilValue(editFromState);

  return (
    <Container type="app">
      {formData.state === "loading" ? <CustomPageHeaderSkeleton headerData={obatHeader} /> : <PageHeader headerData={obatHeader} />}

      {isLoading || !tableData ? <CustomTableSkeleton /> : <PageTable tableData={tableData} nav={nav} />}

      <AddFormModal formData={editData ? editData : formData.contents} />
    </Container>
  );
};

export default KelolaObat;
