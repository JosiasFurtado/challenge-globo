import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView
} from "react-native";
import s from "../../globalStyles";

const Shop: React.FC = () => {
  const fakeShopJSON = [
    {
      id: "01",
      title: "Vestido Vermelho",
      img: "https://i.shafacdn.net/images/67407-65-auto-auto-VPra6vMQRV8.jpg",
      price: "R$ 89,90"
    },
    {
      id: "02",
      title: "Bolsa Vermelha",
      img:
        "https://marialindaonline.com.br/wp-content/uploads/2018/06/bolsa-lorena-vermelha-schutz-4.jpg",
      price: "R$ 79,90"
    },
    {
      id: "03",
      title: "Batom Líquido Matte",
      img:
        "https://d531mnmtf91fa.cloudfront.net/Custom/Content/Products/98/63/986307_batom-liquido-matte-goiabinha-colecao-fashion-mimi-by-mais-vaidosa-901_l1_636802121916830197.jpg",
      price: "R$ 29,90"
    },
    {
      id: "04",
      title: "Jaqueta Jeans",
      img:
        "https://assets.xtechcommerce.com/uploads/images/medium/3333bf15f529b216c0d3fd207952f85f.jpg",
      price: "R$ 99,90"
    }
  ];
  return (
    <SafeAreaView style={[s.bgDark, s.compView]}>
      <View style={s.itemsCenter}>
        <Text style={[s.colorSec, s.txtBold, s.f18, s.mv16]}>
          Produtos que apareceram no programa
        </Text>
      </View>
      <FlatList
        data={fakeShopJSON}
        horizontal
        keyExtractor={item => item.id}
        renderItem={item => (
          <TouchableOpacity key={item.item.id} style={s.mh16}>
            <View style={s.itemsCenter}>
              <Image
                source={{ uri: item.item.img }}
                style={{ height: 400, width: 200, borderRadius: 10 }}
              />
              <View>
                <Text style={[s.colorSec, s.txtBold, s.f18]}>
                  {item.item.title}
                </Text>
              </View>
              <Text style={[s.colorSec, s.f16]}>{item.item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Shop;
