import { TouchableOpacity, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.screenButton}
        onPress={() => navigation.navigate("inventory")}
      />
      <TouchableOpacity
        style={styles.screenButton}
        onPress={() => navigation.navigate("recipes")}
      />
      <TouchableOpacity
        style={styles.setsButton}
        onPress={() => navigation.navigate("sets")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: "100%", height: "100%", backgroundColor: "#d4d4d4" },
  screenButton: {
    width: "35%",
    aspectRatio: 1,
    marginLeft: "32.5%",
    marginTop: "40%",
    backgroundColor: "#0f0",
  },
  setsButton: {
    position: "absolute",
    left: "75%",
    top: "85%",
    width: "10%",
    aspectRatio: 1,
    backgroundColor: "#f00",
  },
});

export default HomeScreen;
