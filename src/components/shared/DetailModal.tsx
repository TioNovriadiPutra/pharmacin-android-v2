import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { customStyles } from "@themes/styles";
import { onCloseModal, onOpenModal } from "@utils/helper/modalAnimHandler";
import BackButton from "./BackButton";
import { sizeType } from "@themes/fonts";
import DetailList from "@components/intermediate/DetailList";
import { MainDetailType } from "@utils/types/TableType";
import DetailFooter from "@components/intermediate/DetailFooter";
import { showDetailModalState } from "@store/atom/globalState";

type Props = {
  title: string;
  detailData: MainDetailType;
};

const DetailModal = ({ title, detailData }: Props) => {
  const showDetailModal = useRecoilValue(showDetailModalState);

  const detailAnim = useSharedValue(0);

  const detailAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: detailAnim.value,
    };
  });

  useEffect(() => {
    if (showDetailModal) {
      onOpenModal(detailAnim);
    } else {
      onCloseModal(detailAnim, "detail");
    }
  }, [showDetailModal]);

  return (
    <Modal visible={showDetailModal} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={() => onCloseModal(detailAnim, "detail")}>
        <View style={customStyles.backdrop}>
          <Animated.View style={[customStyles.modalContainer, styles.detailContainer, detailAnimatedStyle]}>
            <BackButton left={46} top={34} onPress={() => onCloseModal(detailAnim, "detail")} />
            <Text numberOfLines={1} style={[customStyles.title, sizeType.H1]}>
              Informasi {title}
            </Text>
            <DetailList detailData={detailData.detailData} />
            <DetailFooter detailStat={detailData.statData} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  detailContainer: {
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
