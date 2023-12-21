import { FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppPabrikanParamType } from "@utils/types/RootStackParamType";
import Container from "@containers/Container";
import DetailHeader from "@components/shared/DetailHeader";
import DetailFunction from "@components/shared/DetailFunction";
import DetailTableContent from "@components/shared/DetailTableContent";
import DetailModal from "@components/shared/DetailModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { pabrikanDetailActiveScreenState, pabrikanShowDetailModalState } from "@store/atom/pabrikanState";
import { useQuery } from "@tanstack/react-query";
import useFecthData from "@hooks/useFecthData";
import ENDPOINT from "@utils/config/Endpoint";
import CustomTableSkeleton from "@components/custom/CustomTableSkeleton";
import CustomDetailHeaderSkeleton from "@components/custom/CustomDetailHeaderSkeleton";
import { pabrikanDetailSelectorFamily, pabrikanModalDetailSelectorFamily } from "@store/selector/pabrikanSelector";

type Props = NativeStackScreenProps<AppPabrikanParamType, "DetailPabrikan">;

const DetailPabrikan = ({ route }: Props) => {
  const { itemId } = route.params;

  const [pabrikDetailActiveScreen, setPabrikDetailActiveScreen] = useRecoilState(pabrikanDetailActiveScreenState);
  const [showModal, setShowModal] = useRecoilState(pabrikanShowDetailModalState);

  const { getFunction } = useFecthData();
  const { data, isLoading } = useQuery({ queryKey: ["pabrikanDetail"], queryFn: () => getFunction(`${ENDPOINT.factoryDefault}/${itemId}`, true) });

  const detailData = useRecoilValue(pabrikanDetailSelectorFamily(data));
  const modalDetail = useRecoilValue(pabrikanModalDetailSelectorFamily(data));

  const pageRef = useRef<FlatList>(null);

  useEffect(() => {
    pageRef.current?.scrollToIndex({ index: pabrikDetailActiveScreen, animated: false });
  }, [pabrikDetailActiveScreen]);

  return (
    <Container type="app">
      {isLoading || !detailData ? (
        <CustomDetailHeaderSkeleton />
      ) : (
        <>
          <DetailHeader itemName={detailData.pageHeader.title} type={detailData.pageHeader.type} onPress={detailData.pageHeader.onPress} />

          <DetailFunction functionData={detailData.pageHeader.function} activeScreen={pabrikDetailActiveScreen} setActiveScreen={setPabrikDetailActiveScreen} />
        </>
      )}

      {isLoading || !detailData ? <CustomTableSkeleton /> : <DetailTableContent tableContents={detailData.detailData} pageRef={pageRef} />}

      {!isLoading && modalDetail ? <DetailModal visible={showModal} setShowModal={setShowModal} title="Pabrik" detailData={modalDetail} /> : null}
    </Container>
  );
};

export default DetailPabrikan;
