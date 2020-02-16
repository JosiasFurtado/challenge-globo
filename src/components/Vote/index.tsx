import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import s from "../../globalStyles";

const Vote: React.FC = () => {
  const [vote, setVote] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: "01",
      name: "Interestelar",
      select: false,
      img:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png"
    },
    {
      id: "02",
      name: "Vingadores Ultimato",
      select: false,
      img:
        "https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/cb/2b/96/cb2b96dd-7cd0-ba41-e742-e90045218c3e/DIS_AV_ENDGAME_BRP_FINAL_BR_ARTWORK_PT-BR_2000x3000_1OWPBJ00000FMO.lsr/268x0w.jpg"
    },
    {
      id: "03",
      name: "Coringa",
      select: false,
      img:
        "http://www.centrodeartes.uff.br/wp-content/uploads/2019/10/coringa.jpg"
    }
  ]);

  function handleCheck(id: string) {
    const moviesCheck = movies.map(item => {
      return id === item.id ? { ...item, select: !item.select } : item;
    });
    setMovies(moviesCheck);
  }
  return (
    <SafeAreaView style={[s.bgDark, s.compView]}>
      <View style={[s.itemsCenter, s.flex1, s.mT35]}>
        {vote ? (
          <View style={[s.center, s.flex1, s.negMT30]}>
            <Text style={[s.colorSec, s.txtBold, s.f18]}>
              Você já votou, obrigado.
            </Text>
          </View>
        ) : (
          <>
            <Text style={[s.colorSec, s.txtBold, s.f18]}>
              Que filme gostaria de ver hoje na Tela Quente?
            </Text>
            <FlatList
              style={{ maxHeight: 330 }}
              horizontal
              data={movies}
              keyExtractor={movie => movie.id}
              renderItem={movie => (
                <View style={[s.mh16, s.mv16, s.itemsCenter, s.borderSolid]}>
                  {movie.item.select ? (
                    <TouchableOpacity
                      style={s.mT8}
                      onPress={() => handleCheck(movie.item.id)}
                    >
                      <MaterialIcons name="check-box" size={30} color="#fff" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={s.mT8}
                      onPress={() => handleCheck(movie.item.id)}
                    >
                      <MaterialIcons
                        name="check-box-outline-blank"
                        size={30}
                        color="#fff"
                      />
                    </TouchableOpacity>
                  )}
                  <Image
                    source={{ uri: movie.item.img }}
                    style={[{ height: 220, width: 160 }, s.mT8, s.borderRadius]}
                  />
                  <Text style={[s.colorSec, s.f16]}>{movie.item.name}</Text>
                </View>
              )}
            />
            <TouchableOpacity
              onPress={() => setVote(true)}
              style={[s.btn, s.bgPri, s.borderRadius, s.center, s.mT8]}
            >
              <Text style={[s.txtBold, s.colorSec, s.f18]}>Votar</Text>
            </TouchableOpacity>
            <View />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Vote;
