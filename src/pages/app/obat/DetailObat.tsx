import React, { useEffect, useRef } from "react";
import Container from "@containers/Container";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppObatStackParamType } from "@utils/types/RootStackParamType";
import { useRecoilState, useRecoilValue } from "recoil";
import DetailHeader from "@components/shared/DetailHeader";
import DetailFunction from "@components/shared/DetailFunction";
import { obatDetailActiveScreenState } from "@store/atom/obatState";
import DetailTableContent from "@components/shared/DetailTableContent";
import { FlatList } from "react-native";
import DetailModal from "@components/shared/DetailModal";
import { useQuery } from "@tanstack/react-query";
import { getFunction } from "@utils/helper/fetch";
import { ENDPOINT } from "@utils/config/Endpoint";
import { obatDetailSelectorFamily, obatModalDetailSelectorFamily } from "@store/selector/obatSelector";
import CustomDetailHeaderSkeleton from "@components/custom/CustomDetailHeaderSkeleton";
import CustomTableSkeleton from "@components/custom/CustomTableSkeleton";

type Props = NativeStackScreenProps<AppObatStackParamType, "DetailObat">;

const DetailObat = ({ route }: Props) => {
  const { itemId } = route.params;

  const { data, isLoading } = useQuery({ queryKey: ["drugDetail"], queryFn: () => getFunction(`${ENDPOINT.drugDetail}/${itemId}`, true) });

  const [activeScreen, setActiveScreen] = useRecoilState(obatDetailActiveScreenState);
  const detailData = useRecoilValue(obatDetailSelectorFamily(data));
  const modalDetail = useRecoilValue(obatModalDetailSelectorFamily(data));

  const pageRef = useRef<FlatList>(null);

  useEffect(() => {
    pageRef.current?.scrollToIndex({ index: activeScreen, animated: false });
  }, [activeScreen]);

  return (
    <Container type="app">
      {isLoading || !detailData ? (
        <CustomDetailHeaderSkeleton />
      ) : (
        <>
          <DetailHeader itemName={detailData.pageHeader.title} type={detailData.pageHeader.type} onPress={detailData.pageHeader.onPress} />

          <DetailFunction functionData={detailData.pageHeader.function} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        </>
      )}

      {isLoading || !detailData ? <CustomTableSkeleton /> : <DetailTableContent tableContents={detailData.detailData} pageRef={pageRef} />}

      {!isLoading && modalDetail ? <DetailModal title="Obat" detailData={modalDetail} /> : null}
    </Container>
  );
};

export default DetailObat;
