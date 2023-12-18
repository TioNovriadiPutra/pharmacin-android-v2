import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { stockOpnameHeader } from "@utils/constant/pageHeader";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStockStackParamType } from "@utils/types/RootStackParamType";
import { useRecoilValue } from "recoil";
import { opnameTableDataState } from "@store/atom/stockState";
import PageTable from "@components/shared/PageTable";

const OpnameStock = () => {
  const opnameTableData = useRecoilValue(opnameTableDataState);

  const nav = useNavigation<NativeStackNavigationProp<AppStockStackParamType, "OpnameStock">>();

  return (
    <Container type="app">
      <PageHeader headerData={stockOpnameHeader} />
      <PageTable tableData={opnameTableData} nav={nav} />
    </Container>
  );
};

export default OpnameStock;
