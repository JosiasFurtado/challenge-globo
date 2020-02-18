import { StyleSheet, Dimensions } from "react-native";

const s = StyleSheet.create({
  absolute: {
    position: "absolute"
  },
  bgDark: {
    backgroundColor: "#000"
  },
  bgLight: {
    backgroundColor: "#fafafa"
  },
  bgModal: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    flex: 1
  },
  bgPri: {
    backgroundColor: "#FF3100"
  },
  bgTerciary: {
    backgroundColor: "rgba(0, 0, 0, 0.92)"
  },
  borderAvatar: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 32
  },
  borderL: {
    borderColor: "#fff",
    borderLeftWidth: 1,
    borderStyle: "solid"
  },
  borderRadius: {
    borderRadius: 5
  },
  borderSolid: {
    borderColor: "#fff",
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1
  },
  borderTB: {
    borderBottomWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderTopWidth: 1
  },
  btn: {
    height: 45,
    width: "90%"
  },
  btnComps: {
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 50,
    elevation: 2,
    height: 60,
    justifyContent: "center",
    marginTop: -50,
    width: 60
  },
  btnLike: {
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    marginLeft: 16,
    marginTop: 16,
    width: 150
  },
  btnMenu: {
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    height: 35,
    justifyContent: "center",
    width: 35
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  chat: {
    marginBottom: 15,
    width: "100%"
  },
  clReverse: {
    flexDirection: "column-reverse"
  },
  colorDark: {
    color: "#000"
  },
  colorPri: {
    color: "#FF3100"
  },
  colorSec: {
    color: "#fff"
  },
  compView: {
    marginTop: -10,
    minHeight: "49%"
  },
  contentAround: {
    justifyContent: "space-around"
  },
  contentBet: {
    justifyContent: "space-between"
  },
  contentCenter: {
    justifyContent: "center"
  },
  contentEnd: {
    justifyContent: "flex-end"
  },
  contentStart: {
    justifyContent: "flex-start"
  },
  descipProgram: {
    bottom: 50,
    elevation: 1,
    marginBottom: 10,
    position: "absolute"
  },
  drawerOpt: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  f14: {
    fontSize: 14
  },
  f16: {
    fontSize: 16
  },
  f18: {
    fontSize: 18
  },
  f32: {
    fontSize: 32
  },
  fakeInput: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#EDF2F7",
    borderRadius: 5,
    height: 45,
    justifyContent: "space-between",
    width: "90%"
  },
  flex1: {
    flex: 1
  },
  flexRow: {
    flexDirection: "row"
  },
  flexSpace: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  header: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    elevation: 2,
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 30,
    position: "absolute",
    width: Dimensions.get("screen").width / 1.1,
    zIndex: 1
  },
  iconChat: {
    position: "absolute",
    right: 30,
    top: 10
  },
  imgHome: {
    height: 300,
    width: "100%"
  },
  input: {
    backgroundColor: "#EDF2F7",
    height: 45,
    width: "90%"
  },
  itemsCenter: {
    alignItems: "center"
  },
  itemsEnd: {
    alignItems: "flex-end"
  },
  itemsStart: {
    alignItems: "flex-start"
  },
  logo: {
    height: Dimensions.get("screen").height / 4,
    marginBottom: -30
  },
  logoHeader: {
    height: 35,
    width: 35
  },
  mB16: {
    marginBottom: 16
  },
  mT16: {
    marginTop: 16
  },
  mT35: {
    marginTop: 35
  },
  mT8: {
    marginTop: 8
  },
  mask: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    elevation: 1,
    position: "absolute"
  },
  mh16: {
    marginHorizontal: 16
  },
  mh8: {
    marginHorizontal: 8
  },
  minH: {
    minHeight: Dimensions.get("screen").height / 1.89
  },
  movie: {
    height: 170,
    marginHorizontal: 5,
    width: 130
  },
  msgView: {
    alignItems: "flex-end",
    backgroundColor: "#555",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 8,
    maxWidth: 200,
    minHeight: 30,
    padding: 5
  },
  mv16: {
    marginVertical: 16
  },
  mv8: {
    marginVertical: 8
  },
  negMT30: {
    marginTop: -30
  },
  pad8: {
    padding: 8
  },
  selfStart: {
    alignSelf: "flex-start"
  },
  txtBold: {
    fontWeight: "bold"
  }
});

export default s;
