import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import s from "../../globalStyles";

const Survey: React.FC = () => {
  return (
    <SafeAreaView style={[s.bgDark, s.compView]}>
      <Text style={s.colorSec}>Survey Component</Text>
    </SafeAreaView>
  );
};

export default Survey;
