import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Foundation
} from "@expo/vector-icons";
import { ButtonComp } from "./styles";
import example from "../../assets/example.jpg";
import s from "../../globalStyles";
import Header from "../../components/Header";
import Survey from "../../components/Survey";
import Vote from "../../components/Vote";
import Like from "../../components/Like";
import Chat from "../../components/Chat";

const Home: React.FC = () => {
  const [likeVisible, setLikeVisible] = useState(false);
  const [surveyVisible, setSurveyVisible] = useState(false);
  const [voteVisible, setVoteVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const { navigate } = useNavigation();

  function setLVisible() {
    if (likeVisible) return setLikeVisible(false);
    setChatVisible(false);
    setSurveyVisible(false);
    setVoteVisible(false);
    return setLikeVisible(true);
  }
  function setSVisible() {
    if (surveyVisible) return setSurveyVisible(false);
    setLikeVisible(false);
    setChatVisible(false);
    setVoteVisible(false);
    return setSurveyVisible(true);
  }
  function setVVisible() {
    if (voteVisible) return setVoteVisible(false);
    setLikeVisible(false);
    setChatVisible(false);
    setSurveyVisible(false);
    return setVoteVisible(true);
  }

  function setCVisible() {
    if (chatVisible) return setChatVisible(false);
    setLikeVisible(false);
    setVoteVisible(false);
    setSurveyVisible(false);
    return setChatVisible(true);
  }

  function nothingSelected() {
    return (
      <View style={[s.center, s.bgDark, { height: "70%", marginTop: -10 }]}>
        <Text style={[s.f18, s.txtBold, s.colorSec]}>
          Selecione uma forma de interação
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Header />
      <View>
        <View style={[s.imgHome, s.mask]} />
        <Image source={example} style={s.imgHome} />
        <View style={s.descipProgram}>
          <Text
            allowFontScaling={false}
            style={[s.mh16, s.colorSec, s.f16, s.txtBold]}
          >
            Fátima Bernardes traz uma mistura de jornalismo, informação, humor e
            música. Com a participação de comentaristas, jornalistas e
            convidados especiais, os assuntos serão abordados pelo programa em
            forma de bate-papo.
          </Text>
        </View>
      </View>
      <View style={[s.flexRow, s.contentCenter]}>
        <ButtonComp active={voteVisible} onPress={() => setVVisible()}>
          <MaterialCommunityIcons name="vote" size={30} color="#fff" />
        </ButtonComp>
        <ButtonComp active={likeVisible} onPress={() => setLVisible()}>
          <AntDesign name="like1" size={30} color="#fff" />
        </ButtonComp>
        <ButtonComp active={surveyVisible} onPress={() => setSVisible()}>
          <Foundation name="clipboard-pencil" size={30} color="#fff" />
        </ButtonComp>
        <ButtonComp active={chatVisible} onPress={() => setCVisible()}>
          <Ionicons name="ios-chatbubbles" size={30} color="#fff" />
        </ButtonComp>
      </View>
      {chatVisible ? <Chat /> : null}
      {likeVisible ? <Like /> : null}
      {surveyVisible ? <Survey /> : null}
      {voteVisible ? <Vote /> : null}
      {likeVisible && surveyVisible && voteVisible && chatVisible
        ? null
        : nothingSelected()}
    </SafeAreaView>
  );
};

export default Home;
