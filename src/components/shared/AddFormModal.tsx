import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import { customStyles } from "@themes/styles";
import { SetterOrUpdater } from "recoil";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import BackButton from "./BackButton";
import { FormType, ValidationErrorType } from "@utils/types/FormType";
import { sizeType } from "@themes/fonts";
import FormInputList from "@components/intermediate/FormInputList";
import { useForm } from "react-hook-form";
import Bar from "./Bar";
import SubmitButton from "./SubmitButton";
import { onCloseModal, onOpenModal } from "@utils/helper/modalAnimHandler";

type Props = {
  visible: boolean;
  setShowModal: SetterOrUpdater<boolean>;
  formData: FormType;
  validationError: ValidationErrorType | null;
  setValidationError: SetterOrUpdater<ValidationErrorType | null>;
  onSubmit?: (data: any) => void;
};

const AddFormModal = ({ visible, setShowModal, formData, validationError, setValidationError, onSubmit }: Props) => {
  const formAnim = useSharedValue(0);

  const { control, handleSubmit } = useForm();

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: formAnim.value,
    };
  });

  useEffect(() => {
    if (visible) {
      onOpenModal(formAnim);
    } else {
      onCloseModal(formAnim, setShowModal, setValidationError);
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={() => onCloseModal(formAnim, setShowModal, setValidationError)}>
        <View style={customStyles.backdrop}>
          <Animated.View style={[customStyles.modalContainer, styles.formContainer, formAnimatedStyle]}>
            <BackButton left={46} top={34} onPress={() => onCloseModal(formAnim, setShowModal, setValidationError)} />

            <Text numberOfLines={1} style={[customStyles.title, sizeType.H1]}>
              {formData.title}
            </Text>

            <View style={styles.content}>
              <FormInputList formInputs={formData.inputs} control={control} validationError={validationError} />

              <Bar />
              {formData.submitButton && <SubmitButton label={formData.submitButton.label} buttonType={formData.submitButton.btnType} labelSize="H2" onPress={onSubmit && handleSubmit(onSubmit)} />}
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
