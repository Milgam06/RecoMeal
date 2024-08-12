import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as S from "./styled";

export default function App() {
  return (
    <S.MainContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </S.MainContainer>
  );
}
