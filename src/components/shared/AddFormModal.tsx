import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import { customStyles } from "@themes/styles";
import { useRecoilValue } from "recoil";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import BackButton from "./BackButton";
import { FormType } from "@utils/types/FormType";
import { sizeType } from "@themes/fonts";
import FormInputList from "@components/intermediate/FormInputList";
import { useForm } from "react-hook-form";
import Bar from "./Bar";
import SubmitButton from "./SubmitButton";
import { onCloseModal, onOpenModal } from "@utils/helper/modalAnimHandler";
import { modalValidationErrorState, showAddModalState } from "@store/atom/globalState";

type Props = {
  formData: FormType;
};

const AddFormModal = ({ formData }: Props) => {
  const showAddModal = useRecoilValue(showAddModalState);
  const modalValidationError = useRecoilValue(modalValidationErrorState);

  const formAnim = useSharedValue(0);

  const { control, handleSubmit } = useForm();

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: formAnim.value,
    };
  });

  useEffect(() => {
    if (showAddModal) {
      onOpenModal(formAnim);
    } else {
      onCloseModal(formAnim, "form");
    }
  }, [showAddModal]);

  return (
    <Modal visible={showAddModal} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={() => onCloseModal(formAnim, "form")}>
        <View style={customStyles.backdrop}>
          <Animated.View style={[customStyles.modalContainer, styles.formContainer, formAnimatedStyle]}>
            <BackButton left={46} top={34} onPress={() => onCloseModal(formAnim, "form")} />

            <Text numberOfLines={1} style={[customStyles.title, sizeType.H1]}>
              {formData.title}
            </Text>

            <View style={styles.content}>
              <FormInputList formInputs={formData.inputs} control={control} validationError={modalValidationError} />

              <Bar />

              {formData.submitButton && (
                <SubmitButton label={formData.submitButton.label} buttonType={formData.submitButton.btnType} labelSize="H2" onPress={handleSubmit(formData.submitButton.onPress)} />
              )}
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
    left: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  content: {
    flex: 1,
  },
});
