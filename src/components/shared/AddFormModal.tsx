import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import { customStyles } from "@themes/styles";
import { SetterOrUpdater } from "recoil";
import { colors } from "@themes/colors";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import BackButton from "./BackButton";
import { FormType } from "@utils/types/FormType";
import { sizeType } from "@themes/fonts";
import FormInputList from "@components/intermediate/FormInputList";
import { useForm } from "react-hook-form";
import Bar from "./Bar";
import SubmitButton from "./SubmitButton";

type Props = {
  visible: boolean;
  setShowModal: SetterOrUpdater<boolean>;
  position?: "left" | "right";
  formData: FormType;
};

const AddFormModal = ({ visible, setShowModal, position = "left", formData }: Props) => {
  const formAnim = useSharedValue(0);

  const { control, handleSubmit } = useForm();

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: formAnim.value,
    };
  });

  const onCloseModal = () => {
    formAnim.value = withTiming(0, { duration: 500 });
    setTimeout(() => {
      setShowModal(false);
    }, 450);
  };

  useEffect(() => {
    if (visible) {
      formAnim.value = withTiming(542, { duration: 500 });
    } else {
      onCloseModal();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={customStyles.backdrop}>
          <Animated.View style={[styles.formContainer, position === "left" ? styles.formLeft : styles.formRight, formAnimatedStyle]}>
            <BackButton left={46} top={34} onPress={onCloseModal} />
            <Text numberOfLines={1} style={[styles.title, sizeType.H1]}>
              {formData.title}
            </Text>
            <FormInputList formInputs={formData.inputs} control={control} />
            <View style={styles.footer}>
              <Bar />
              <SubmitButton label={formData.submitButton.label} buttonType={formData.submitButton.btnType} />
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddFormModal;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.White,
    height: "100%",
    position: "absolute",
    paddingHorizontal: 46,
    paddingTop: 36,
    overflow: "hidden",
    gap: 34,
  },
  formLeft: {
    left: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  formRight: {
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    color: colors.Black,
    textAlign: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
