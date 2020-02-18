import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  TouchableHighlight
} from "react-native";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import s from "../../globalStyles";
import InputModal from "../InputModal";

const Chat: React.FC = () => {
  const [msg, setMsg] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (value === "") return;
    setMsg([...msg, { id: "userID", textMsg: value }]);
    setValue("");
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={[s.bgDark, s.compView]}>
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
      {!modalVisible ? (
        <TouchableHighlight
          onPress={() => setModalVisible(true)}
          style={[s.fakeInput, s.pad8, s.flexRow]}
        >
          <>
            <Text style={{ color: "#555" }}>Digite sua mensagem</Text>
            <MaterialCommunityIcons name="send" size={25} color="#000" />
          </>
        </TouchableHighlight>
      ) : (
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <InputModal
            handleSubmit={handleSubmit}
            value={value}
            setValue={setValue}
          />
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Chat;
