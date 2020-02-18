import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import s from "../../globalStyles";
import logo from "../../assets/logo.png";

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  const { title } = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[s.header, s.contentBet]}>
      <View style={[s.flexRow, s.itemsCenter]}>
        <View>
          <Image source={logo} style={s.logoHeader} />
        </View>
        <View style={[s.borderL, s.mh16]}>
          <Text style={[s.colorSec, s.f14, s.txtBold, s.mh16]}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={s.btnMenu}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="md-menu" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
