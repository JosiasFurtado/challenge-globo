import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import s from "../../globalStyles";

const Like: React.FC = () => {
  const [count, setCount] = useState(1562156);

  return (
    <SafeAreaView style={[s.bgDark, s.compView]}>
      <View style={[s.itemsCenter, s.flex1, s.mh16]}>
        <View style={[s.center, s.mT35]}>
          <Text style={[s.colorSec, s.txtBold, s.f18]}>Likes Recebidos:</Text>
          <Text style={[s.colorSec, s.txtBold, s.f32]}>{count}</Text>
        </View>
        <View style={[s.center, s.flex1, s.negMT30]}>
          <Text style={[s.colorSec, s.txtBold, s.f18]}>
            Você gosta do Encontro c/ Fátima?
          </Text>
          <View style={s.flexRow}>
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              style={s.btnLike}
            >
              <AntDesign name="like1" size={30} color="#52F29C" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCount(count - 1)}
              style={s.btnLike}
            >
              <AntDesign name="dislike1" size={30} color="#FF3100" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Like;
