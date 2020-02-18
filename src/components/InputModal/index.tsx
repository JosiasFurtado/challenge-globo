import React from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import s from "../../globalStyles";

interface Props {
  value: string;
  handleSubmit(): void;
  setValue(string): void;
}

const InputModal: React.FC<Props> = props => {
  const { value, handleSubmit, setValue } = props;
  return (
    <View style={[s.chat, s.flex1, s.contentEnd]}>
      <KeyboardAvoidingView style={[s.center, s.flexRow]}>
        <TextInput
          style={[s.input, s.borderRadius, s.pad8]}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#555"
          autoCorrect={false}
          allowFontScaling={false}
          value={value}
          onChangeText={text => setValue(text)}
          onSubmitEditing={handleSubmit}
          autoCapitalize="none"
          returnKeyType="send"
        />
        <TouchableOpacity style={s.iconChat} onPress={() => handleSubmit()}>
          <MaterialCommunityIcons name="send" size={25} color="#000" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputModal;
