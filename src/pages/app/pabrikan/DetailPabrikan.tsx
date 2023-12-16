import { StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppPabrikanParamType } from "@utils/types/RootStackParamType";
import Container from "@containers/Container";
import DetailHeader from "@components/shared/DetailHeader";
import { useRecoilState, useRecoilValue } from "recoil";
import { pabrikanDetailDataFamily } from "@store/selector/pabrikanSelector";
import DetailFunction from "@components/shared/DetailFunction";
import { pabrikanDetailActiveScreenState } from "@store/atom/pabrikanState";

type Props = NativeStackScreenProps<AppPabrikanParamType, "DetailPabrikan">;

const DetailPabrikan = ({ route }: Props) => {
  const { itemId } = route.params;

  const pabrikDetailData = useRecoilValue(pabrikanDetailDataFamily(itemId));
  const [pabrikDetailActiveScreen, setPabrikDetailActiveScreen] = useRecoilState(pabrikanDetailActiveScreenState);

  return (
    <Container type="app">
      <DetailHeader itemName={pabrikDetailData.name} />
      <DetailFunction functionData={pabrikDetailData.functions} searchData={pabrikDetailData.searchData} activeScreen={pabrikDetailActiveScreen} />
    </Container>
  );
};

export default DetailPabrikan;

const styles = StyleSheet.create({});
