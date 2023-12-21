import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useFecthData from "@hooks/useFecthData";
import ENDPOINT from "@utils/config/Endpoint";
import { useRecoilState } from "recoil";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";
import DrawerSubMenu from "./DrawerSubMenu";
import { drawerProfile } from "@utils/constant/drawer";
import useAuth from "@hooks/useAuth";
import { drawerPressIndexState } from "@store/atom/drawerState";
import CustomProfileSkeletonPlaceholder from "@components/custom/CustomProfileSkeletonPlaceholder";
import { useQuery } from "@tanstack/react-query";

type Props = {
  navigation: any;
  onCloseDrawer: () => void;
  onOpenDrawer: () => void;
};

const DrawerAccount = ({ navigation, onCloseDrawer, onOpenDrawer }: Props) => {
  const [drawerIndex, setDrawerIndex] = useRecoilState(drawerPressIndexState);

  const { getFunction } = useFecthData();
  const { logout } = useAuth();
  const { data, isLoading } = useQuery({ queryKey: ["userProfile"], queryFn: () => getFunction(ENDPOINT.userDefault, true) });

  const onPress = () => {
    onOpenDrawer();

    setDrawerIndex("profile");
  };

  const onPressSubMenu = (destination: string) => {
    onCloseDrawer();
    if (destination === "") {
      logout();
    } else {
      navigation.navigate("Pengaturan", {
        screen: destination,
      });
    }
  };

  if (isLoading) return <CustomProfileSkeletonPlaceholder />;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require("@assets/images/profilePic.png")} />
      <View style={styles.info}>
        <Text numberOfLines={1} style={[styles.name, sizeType.H2]}>
          {data.data[0].profile.full_name}
        </Text>
        <Text numberOfLines={1} style={[styles.email, sizeType.BodyText]}>
          {data.data[0].role.role_name}
        </Text>
      </View>
      <Image source={require("@assets/images/dotdot.png")} />

      {drawerIndex === "profile" && <DrawerSubMenu subMenuItems={drawerProfile} onPressSubMenu={onPressSubMenu} />}
    </TouchableOpacity>
  );
};

export default DrawerAccount;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 13,
    gap: 13,
  },
  name: {
    color: colors.DarkGray,
  },
  email: {
    color: colors.Profile,
  },
  info: {
    flex: 1,
  },
});
