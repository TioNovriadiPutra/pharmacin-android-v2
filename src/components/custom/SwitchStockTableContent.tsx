import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { stockActiveScreenState, stockTableDataState } from "@store/atom/stockState";
import PageTable from "@components/shared/PageTable";
import { WIDTH } from "@themes/styles";

const SwitchStockTableContent = () => {
  const tableData = useRecoilValue(stockTableDataState);
  const activeScreen = useRecoilValue(stockActiveScreenState);

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    listRef.current?.scrollToIndex({ index: activeScreen, animated: false });
  }, [activeScreen]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={tableData.screenData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <PageTable tableData={item} />
          </View>
        )}
      />
    </View>
  );
};

export default SwitchStockTableContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: WIDTH - 96,
  },
});
