import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { RadioButton } from "react-native-paper";
import s from "../../globalStyles";

const Survey: React.FC = () => {
  const [checked, setCheked] = useState("");
  const [vote, setVote] = useState(false);

  function voteSurvey() {
    setCheked("unchecked");
    setVote(true);
  }

  return (
    <ScrollView style={[s.bgDark, s.compView]}>
      <View style={[s.mh16, s.mv16, s.center]}>
        <Text style={[s.colorSec, s.txtBold, s.f18, s.mv16]}>Enquete:</Text>
        <Text style={[s.colorSec, s.txtBold, s.f32]}>
          Você cuida da sua saude mental?
        </Text>
      </View>
      {!vote ? (
        <>
          <View>
            <TouchableOpacity
              onPress={() => setCheked("first")}
              style={[
                s.flexRow,
                s.itemsCenter,
                s.mv8,
                s.mh16,
                s.center,
                s.borderSolid
              ]}
            >
              <RadioButton
                value="first"
                uncheckedColor="#FFf"
                color="#FF3100"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setCheked("first")}
              />
              <Text style={[s.colorSec, s.txtBold, s.f18]}>Sempre cuidei</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCheked("second")}
              style={[
                s.flexRow,
                s.itemsCenter,
                s.mv8,
                s.mh16,
                s.center,
                s.borderSolid
              ]}
            >
              <RadioButton
                value="second"
                uncheckedColor="#FFf"
                color="#FF3100"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setCheked("second")}
              />
              <Text style={[s.colorSec, s.txtBold, s.f18]}>Nunca cuidei</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCheked("third")}
              style={[
                s.flexRow,
                s.itemsCenter,
                s.mv8,
                s.mh16,
                s.center,
                s.borderSolid
              ]}
            >
              <RadioButton
                value="third"
                uncheckedColor="#FFf"
                color="#FF3100"
                status={checked === "third" ? "checked" : "unchecked"}
                onPress={() => setCheked("third")}
              />
              <Text style={[s.colorSec, s.txtBold, s.f18]}>
                Não sei o que é
              </Text>
            </TouchableOpacity>
          </View>
          <View style={s.center}>
            <TouchableOpacity
              onPress={() => voteSurvey()}
              style={[s.btn, s.bgPri, s.borderRadius, s.center, s.mT8]}
            >
              <Text style={[s.txtBold, s.colorSec, s.f18]}>Votar</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          <View
            style={[
              s.flexRow,
              s.itemsCenter,
              s.mv8,
              s.mh16,
              s.center,
              s.borderSolid,
              { height: 40 }
            ]}
          >
            <Text style={[s.colorSec, s.txtBold, s.colorPri, s.f18]}>2%</Text>
            <Text style={[s.colorSec, s.txtBold, s.f18]}> - Sempre cuidei</Text>
          </View>
          <View
            style={[
              s.flexRow,
              s.itemsCenter,
              s.mv8,
              s.mh16,
              s.center,
              s.borderSolid,
              { height: 40 }
            ]}
          >
            <Text style={[s.colorSec, s.txtBold, s.colorPri, s.f18]}>65%</Text>
            <Text style={[s.colorSec, s.txtBold, s.f18]}> - Nunca cuidei</Text>
          </View>
          <View
            style={[
              s.flexRow,
              s.itemsCenter,
              s.mv8,
              s.mh16,
              s.center,
              s.borderSolid,
              { height: 40 }
            ]}
          >
            <Text style={[s.colorSec, s.txtBold, s.colorPri, s.f18]}>33%</Text>
            <Text style={[s.colorSec, s.txtBold, s.f18]}>
              {" "}
              - Não sei o que é
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Survey;
