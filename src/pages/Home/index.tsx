import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation
} from "@expo/vector-icons";
import { ButtonComp } from "./styles";
import s from "../../globalStyles";
import Header from "../../components/Header";
import Survey from "../../components/Survey";
import Vote from "../../components/Vote";
import Like from "../../components/Like";
import Chat from "../../components/Chat";
import Shop from "../../components/Shop";

const Home: React.FC = () => {
  const [likeVisible, setLikeVisible] = useState(false);
  const [surveyVisible, setSurveyVisible] = useState(false);
  const [voteVisible, setVoteVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [shopVisible, setShopVisible] = useState(false);
  const [key, setKey] = useState(0);
  const { navigate } = useNavigation();

  const fakeData = [
    {
      id: "01",
      title: "Encontro c/ Fátima",
      link: null,
      img:
        "https://img.imirante.com.br/2019/02/12/1549984249-372696396-810x471.jpg",
      descript:
        "Fátima Bernardes traz uma mistura de jornalismo, informação, humor e música. Com a participação de comentaristas, jornalistas e convidados especiais, os assuntos serão abordados pelo programa em forma de bate-papo."
    },
    {
      id: "02",
      title: "Magazine Luiza",
      link:
        "https://www.magazineluiza.com.br/xiaomi/celulares-e-smartphones/s/te/xiao/",
      img:
        "https://www.meioemensagem.com.br/wp-content/uploads/2019/05/Magalu_SmartphonizaBrasil_575.jpg",
      descript:
        "MagaLu traz uma oferta especial aos usuários da Interativa: Toque aqui e confira"
    }
  ];

  function setLVisible() {
    if (likeVisible) return setLikeVisible(false);
    setShopVisible(false);
    setChatVisible(false);
    setSurveyVisible(false);
    setVoteVisible(false);
    return setLikeVisible(true);
  }
  function setSVisible() {
    if (surveyVisible) return setSurveyVisible(false);
    setShopVisible(false);
    setLikeVisible(false);
    setChatVisible(false);
    setVoteVisible(false);
    return setSurveyVisible(true);
  }
  function setVVisible() {
    if (voteVisible) return setVoteVisible(false);
    setShopVisible(false);
    setLikeVisible(false);
    setChatVisible(false);
    setSurveyVisible(false);
    return setVoteVisible(true);
  }

  function setCVisible() {
    if (chatVisible) return setChatVisible(false);
    setShopVisible(false);
    setLikeVisible(false);
    setVoteVisible(false);
    setSurveyVisible(false);
    return setChatVisible(true);
  }

  function setSpVisible() {
    if (shopVisible) return setShopVisible(false);
    setChatVisible(false);
    setLikeVisible(false);
    setVoteVisible(false);
    setSurveyVisible(false);
    return setShopVisible(true);
  }

  function setAd() {
    return key === 0 ? setKey(1) : setKey(0);
  }

  function nothingSelected() {
    return (
      <View style={[s.center, s.bgDark, { height: "70%", marginTop: -10 }]}>
        <Text style={[s.f18, s.txtBold, s.colorSec]}>
          Selecione uma forma de interação acima
        </Text>
        <TouchableOpacity onPress={() => setAd()}>
          <MaterialIcons name="touch-app" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  function checkNavigation() {
    if (fakeData[key].link === null) return;
    navigate("WebViewAd", fakeData[key].link);
  }
  return (
    <SafeAreaView>
      <Header title={fakeData[key].title} />
      <TouchableOpacity onPress={() => checkNavigation()}>
        <>
          <View style={[s.imgHome, s.mask]} />
          <Image source={{ uri: fakeData[key].img }} style={s.imgHome} />
          <View style={s.descipProgram}>
            <Text
              allowFontScaling={false}
              style={[s.mh16, s.colorSec, s.f16, s.txtBold]}
            >
              {fakeData[key].descript}
            </Text>
          </View>
        </>
      </TouchableOpacity>
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
        <ButtonComp active={shopVisible} onPress={() => setSpVisible()}>
          <MaterialCommunityIcons name="shopping" size={30} color="#fff" />
        </ButtonComp>
        <ButtonComp active={chatVisible} onPress={() => setCVisible()}>
          <Ionicons name="ios-chatbubbles" size={30} color="#fff" />
        </ButtonComp>
      </View>
      {chatVisible ? <Chat /> : null}
      {likeVisible ? <Like /> : null}
      {surveyVisible ? <Survey /> : null}
      {voteVisible ? <Vote /> : null}
      {shopVisible ? <Shop /> : null}
      {likeVisible && surveyVisible && voteVisible && chatVisible && shopVisible
        ? null
        : nothingSelected()}
    </SafeAreaView>
  );
};

export default Home;
