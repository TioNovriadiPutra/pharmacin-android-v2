import { StyleSheet, View } from "react-native";
import React from "react";
import { drawerItemList } from "@utils/constant/drawer";
import DrawerItemContent from "./DrawerItemContent";

type Props = {
  navigation: any;
  onCloseDrawer: () => void;
  onOpenDrawer: () => void;
};

const DrawerItemList = ({ navigation, onCloseDrawer, onOpenDrawer }: Props) => {
  return (
    <View style={styles.container}>
      {drawerItemList.map((item, index) => (
        <DrawerItemContent
          key={index.toString()}
          item={item}
          status={navigation.getState().index === index + 1 ? "active" : "inactive"}
          navigation={navigation}
          onCloseDrawer={onCloseDrawer}
          onOpenDrawer={onOpenDrawer}
        />
      ))}
    </View>
  );
};

export default DrawerItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
});
