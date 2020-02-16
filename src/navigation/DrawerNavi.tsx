import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Avatar,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from "react-native-paper";
import StackNavi from "./StackNavi";
import s from "../globalStyles";

const DrawerN = createDrawerNavigator();

function DrawerContent() {
  const [theme, setTheme] = useState(true);
  function handleChange() {
    setTheme(!theme);
  }
  return (
    <View style={s.flex1}>
      <View style={[s.mh16, s.mT35]}>
        <Avatar.Image
          source={{
            uri:
              "https://lh3.googleusercontent.com/-AUa2qihm_VA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd8tOCwKG4uIW9i9aVDajg01C4MLQ.CMID/s192-c/photo.jpg"
          }}
          size={60}
          style={[s.borderAvatar, s.center]}
        />
        <Text style={[s.colorSec, s.mT8, s.txtBold, s.f18]}>
          Josias Furtado
        </Text>
      </View>
      <Drawer.Section style={[s.borderTB, s.mT16]}>
        <TouchableOpacity style={[s.mh16, s.mv16]} onPress={() => {}}>
          <View style={[s.flexRow, s.itemsCenter]}>
            <MaterialCommunityIcons
              name="account-circle"
              color="#999"
              size={30}
            />
            <Text style={[s.mh16, s.f16, s.colorSec]}>Perfil</Text>
          </View>
        </TouchableOpacity>
      </Drawer.Section>
      <Drawer.Section style={s.borderTB}>
        <TouchableOpacity style={[s.mh16, s.mv16]} onPress={() => {}}>
          <View style={[s.flexRow, s.itemsCenter]}>
            <MaterialCommunityIcons
              name="book-open-page-variant"
              color="#999"
              size={30}
            />
            <Text style={[s.mh16, s.f16, s.colorSec]}>Programação</Text>
          </View>
        </TouchableOpacity>
      </Drawer.Section>
      <Drawer.Section>
        <Text style={[s.mv16, s.mh16, s.f16, s.colorSec]}>Preferências</Text>
        <TouchableRipple onPress={() => handleChange()}>
          <View style={[s.drawerOpt, s.itemsCenter]}>
            <Text style={[s.txtBold, s.colorSec, s.f16]}>Tema Escuro</Text>
            <View pointerEvents="none" style={[s.bgLight, s.borderRadius]}>
              <Switch color="#FF3100" value={theme} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}

export default function DrawNavi() {
  return (
    <DrawerN.Navigator
      drawerStyle={s.bgDark}
      drawerPosition="right"
      drawerContent={() => <DrawerContent />}
    >
      <DrawerN.Screen name="Stack" component={StackNavi} />
    </DrawerN.Navigator>
  );
}
