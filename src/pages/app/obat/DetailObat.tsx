import React, { useEffect, useRef } from "react";
import Container from "@containers/Container";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppObatStackParamType } from "@utils/types/RootStackParamType";
import { useRecoilState, useRecoilValue } from "recoil";
import { obatDetailDataFamily, obatMainDetailDataFamily } from "@store/selector/obatSelector";
import DetailHeader from "@components/shared/DetailHeader";
import DetailFunction from "@components/shared/DetailFunction";
import { obatDetailActiveScreenState, obatShowDetailModalState } from "@store/atom/obatState";
import DetailTableContent from "@components/shared/DetailTableContent";
import { FlatList } from "react-native";
import DetailModal from "@components/shared/DetailModal";

type Props = NativeStackScreenProps<AppObatStackParamType, "DetailObat">;

const DetailObat = ({ route }: Props) => {
  const { itemId } = route.params;

  const detailData = useRecoilValue(obatDetailDataFamily(itemId));
  const mainDetailData = useRecoilValue(obatMainDetailDataFamily(itemId));
  const [activeScreen, setActiveScreen] = useRecoilState(obatDetailActiveScreenState);
  const [showModal, setShowModal] = useRecoilState(obatShowDetailModalState);

  const pageRef = useRef<FlatList>(null);

  useEffect(() => {
    pageRef.current?.scrollToIndex({ index: activeScreen, animated: false });
  }, [activeScreen]);

  return (
    <Container type="app">
      <DetailHeader itemName={detailData.pageHeader.title} type={detailData.pageHeader.type} onPress={detailData.pageHeader.onPress} />
      <DetailFunction functionData={detailData.pageHeader.function} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      <DetailTableContent tableContents={detailData.detailData} pageRef={pageRef} />
      <DetailModal visible={showModal} setShowModal={setShowModal} title="Obat" detailData={mainDetailData} />
    </Container>
  );
};

export default DetailObat;
