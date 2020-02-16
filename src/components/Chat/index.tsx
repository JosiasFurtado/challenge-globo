import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform
} from "react-native";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import s from "../../globalStyles";

const Chat: React.FC = () => {
  const [msg, setMsg] = useState([]);
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (value === "") return;
    setMsg([...msg, { id: "userID", textMsg: value }]);
    setValue("");
  }
  return (
    <KeyboardAvoidingView
      style={[s.bgDark, s.compView]}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}
      enabled
    >
      <View style={[s.minH, s.contentEnd]}>
        {msg.map(item => (
          <View
            key={item.textMsg}
            style={[s.itemsEnd, s.contentEnd, s.flexRow]}
          >
            <View style={s.msgView}>
              <View>
                <Text style={[s.txtBold, s.f14, s.colorSec]}>
                  Josias Furtado
                </Text>
              </View>
              <Text style={[s.f16, s.colorSec]}>{item.textMsg}</Text>
            </View>
            <Avatar.Image
              source={{
                uri:
                  "https://lh3.googleusercontent.com/-AUa2qihm_VA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd8tOCwKG4uIW9i9aVDajg01C4MLQ.CMID/s192-c/photo.jpg"
              }}
              size={35}
              style={[s.mh8, s.selfStart, s.mT8]}
            />
          </View>
        ))}
      </View>
      <View style={s.chat}>
        <View style={[s.center, s.flexRow]}>
          <TextInput
            style={[s.input, s.borderRadius, s.mB16, s.pad8]}
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
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
