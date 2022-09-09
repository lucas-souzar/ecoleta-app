import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export function Home() {
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  function handleNavigateToPoints() {
    Alert.alert("Informações", `${city.toUpperCase()} - ${uf.toUpperCase()}`);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../assets/images/home-background.png")}
        style={styles.container}
        imageStyle={{ width: 275, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../assets/images/logo.png")} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </Text>
          </View>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite a UF"
            placeholderTextColor="#00000050"
            value={uf}
            onChangeText={setUf}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a cidade"
            placeholderTextColor="#00000050"
            value={city}
            onChangeText={setCity}
          />

          <FontAwesome.Button
            name="chevron-right"
            backgroundColor="#34CB79"
            iconStyle={{
              marginLeft: 110,
            }}
            size={20}
            style={styles.button}
            onPress={handleNavigateToPoints}
          >
            Entrar
          </FontAwesome.Button>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
  },

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    height: 60,
    flexDirection: "row-reverse",
  },
});
