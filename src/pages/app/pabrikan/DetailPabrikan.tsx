import { FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppPabrikanParamType } from "@utils/types/RootStackParamType";
import Container from "@containers/Container";
import DetailHeader from "@components/shared/DetailHeader";
import { useRecoilState, useRecoilValue } from "recoil";
import { pabrikanDetailDataFamily, pabrikanMainDetailDataFamily } from "@store/selector/pabrikanSelector";
import DetailFunction from "@components/shared/DetailFunction";
import { pabrikanDetailActiveScreenState, pabrikanShowDetailModalState } from "@store/atom/pabrikanState";
import DetailTableContent from "@components/shared/DetailTableContent";
import DetailModal from "@components/shared/DetailModal";

type Props = NativeStackScreenProps<AppPabrikanParamType, "DetailPabrikan">;

const DetailPabrikan = ({ route }: Props) => {
  const { itemId } = route.params;

  const pabrikDetailData = useRecoilValue(pabrikanDetailDataFamily(itemId));
  const pabrikMainDetailData = useRecoilValue(pabrikanMainDetailDataFamily(itemId));
  const [pabrikDetailActiveScreen, setPabrikDetailActiveScreen] = useRecoilState(pabrikanDetailActiveScreenState);
  const [showModal, setShowModal] = useRecoilState(pabrikanShowDetailModalState);

  const pageRef = useRef<FlatList>(null);

  useEffect(() => {
    pageRef.current?.scrollToIndex({ index: pabrikDetailActiveScreen, animated: false });
  }, [pabrikDetailActiveScreen]);

  return (
    <Container type="app">
      <DetailHeader itemName={pabrikDetailData.pageHeader.title} type={pabrikDetailData.pageHeader.type} onPress={pabrikDetailData.pageHeader.onPress} />
      <DetailFunction functionData={pabrikDetailData.pageHeader.function} activeScreen={pabrikDetailActiveScreen} setActiveScreen={setPabrikDetailActiveScreen} />
      <DetailTableContent tableContents={pabrikDetailData.detailData} pageRef={pageRef} />
      <DetailModal visible={showModal} setShowModal={setShowModal} title="Pabrik" detailData={pabrikMainDetailData} />
    </Container>
  );
};

export default DetailPabrikan;
