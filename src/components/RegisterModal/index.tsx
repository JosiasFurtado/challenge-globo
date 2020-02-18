import React from "react";
import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import s from "../../globalStyles";

interface Props {
  modalVisible;
  setModalVisible;
}

const RegisterModal: React.FC<Props> = props => {
  const { modalVisible, setModalVisible } = props;
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={s.bgModal}>
        <View style={[s.flex1, s.contentCenter]}>
          <View
            style={[
              s.bgTerciary,
              s.mh16,
              s.mv16,
              s.borderRadius,
              s.itemsCenter,
              s.pad8
            ]}
          >
            <Text
              textBreakStrategy="highQuality"
              allowFontScaling={false}
              style={[s.txtBold, s.colorSec, s.f18, s.mT16, s.mh16]}
            >
              Registre-se para interagir com seus programas preferidos
            </Text>
            <TextInput
              style={[s.input, s.borderRadius, s.mT16, s.pad8]}
              placeholder="Nome"
              placeholderTextColor="#555"
              autoCorrect={false}
              allowFontScaling={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              style={[s.input, s.borderRadius, s.mT16, s.pad8]}
              placeholder="Sobrenome"
              placeholderTextColor="#555"
              autoCorrect={false}
              allowFontScaling={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              style={[s.input, s.borderRadius, s.mT16, s.pad8]}
              placeholder="Email"
              placeholderTextColor="#555"
              autoCorrect={false}
              allowFontScaling={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              style={[s.input, s.borderRadius, s.mT16, s.pad8]}
              placeholder="Senha"
              placeholderTextColor="#555"
              autoCorrect={false}
              allowFontScaling={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              style={[s.input, s.borderRadius, s.mT16, s.pad8]}
              placeholder="Repita sua senha"
              placeholderTextColor="#555"
              autoCorrect={false}
              allowFontScaling={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              style={[s.input, s.borderRadius, s.mT16, s.pad8]}
              placeholder="Data de nascimento"
              placeholderTextColor="#555"
              autoCorrect={false}
              allowFontScaling={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TouchableOpacity
              style={[s.btn, s.bgPri, s.borderRadius, s.center, s.mv16]}
              onPress={() => {}}
            >
              <Text style={[s.txtBold, s.colorSec, s.f18]}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RegisterModal;
