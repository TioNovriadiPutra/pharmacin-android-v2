import React from "react";
import Container from "@containers/Container";
import PageHeader from "@components/shared/PageHeader";
import { stockHeader } from "@utils/constant/pageHeader";
import { useRecoilState } from "recoil";
import { stockActiveScreenState } from "@store/atom/stockState";
import SwitchStockTableContent from "@components/custom/SwitchStockTableContent";

const StockStock = () => {
  const [activeScreen, setActiveScreen] = useRecoilState(stockActiveScreenState);

  return (
    <Container type="app">
      <PageHeader headerData={stockHeader} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      <SwitchStockTableContent />
    </Container>
  );
};

export default StockStock;
