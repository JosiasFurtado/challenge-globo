import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

// import { Container } from './styles';

const WebViewAd: React.FC = props => {
  const link = props.route.params;
  return <WebView source={{ uri: link }} style={{ marginTop: 24 }} />;
};

export default WebViewAd;
