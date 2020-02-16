import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import RegisterModal from "../../components/RegisterModal";
import logo from "../../assets/logo.png";
import * as LoginActions from "../../store/ducks/login/actions";
import s from "../../globalStyles";

const Login: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  function fakeLogin() {
    dispatch(LoginActions.loadRequest());
  }

  return (
    <SafeAreaView style={[s.flex1, s.bgDark]}>
      <View style={s.flexSpace}>
        <View style={s.center}>
          <Image source={logo} style={s.logo} resizeMode="contain" />
        </View>
        <KeyboardAvoidingView
          style={s.itemsCenter}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}
          enabled
        >
          <TextInput
            style={[s.input, s.borderRadius, s.mT8, s.pad8]}
            placeholder="Email"
            placeholderTextColor="#555"
            autoCorrect={false}
            allowFontScaling={false}
            autoCapitalize="none"
            returnKeyType="next"
          />
          <TextInput
            style={[s.input, s.borderRadius, s.mT8, s.pad8]}
            placeholder="Senha"
            placeholderTextColor="#555"
            autoCorrect={false}
            allowFontScaling={false}
            autoCapitalize="none"
            returnKeyType="send"
          />
          <TouchableOpacity
            style={[s.btn, s.bgPri, s.borderRadius, s.center, s.mT16]}
            onPress={() => fakeLogin()}
          >
            <Text style={[s.txtBold, s.colorSec, s.f18]}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[s.txtBold, s.colorSec, s.f14, s.mT16]}>
              Registrar
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <RegisterModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
