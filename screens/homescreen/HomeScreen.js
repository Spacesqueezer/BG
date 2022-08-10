import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";
import barcode from "../../images/barcode-product.png";
import recipe from "../../images/recipe-book.png";
import cog from "../../images/cog-wheel.png";
import PropTypes from "prop-types";

/**
 * The HomeScreen function renders the HomeScreen component.
 *
 *
 * @param {navigation} Navigate to other screens
 *
 * @return The following:
 *
 * @doc-author Trelent
 */

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonsContainer}>
        <Shadow
          distance={10}
          offset={[6, 6]}
          radius={20}
          startColor={"rgba(183,183,183,0.5)"}
        >
          <Shadow
            distance={10}
            offset={[-6, -6]}
            startColor={"rgba(255,255,255,0.5)"}
          >
            <TouchableOpacity
              style={styles.screenButton}
              onPress={() => navigation.navigate("inventory")}
            >
              <Image
                source={barcode}
                resizeMode={"contain"}
                style={styles.buttonPicture}
              />
            </TouchableOpacity>
          </Shadow>
        </Shadow>
        <Shadow
          distance={10}
          offset={[6, 6]}
          radius={20}
          startColor={"rgba(183,183,183,0.5)"}
        >
          <Shadow
            distance={10}
            offset={[-6, -6]}
            startColor={"rgba(255,255,255,0.5)"}
          >
            <TouchableOpacity
              style={styles.screenButton}
              onPress={() => navigation.navigate("recipes")}
            >
              <Image
                source={recipe}
                resizeMode={"contain"}
                style={styles.buttonPicture}
              />
            </TouchableOpacity>
          </Shadow>
        </Shadow>
      </View>
      <TouchableOpacity
        style={styles.setsButton}
        onPress={() => navigation.navigate("sets")}
      >
        <Image
          source={cog}
          resizeMode={"contain"}
          style={styles.buttonPicture}
        />
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  wrapper: { width: "100%", height: "100%", backgroundColor: "#e1e1e1" },
  buttonsContainer: {
    width: "30%",
    height: "40%",
    top: "30%",
    left: "35%",
    justifyContent: "space-between",
  },
  screenButton: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#e1e1e1",
    borderRadius: 20,
  },
  buttonPicture: {
    width: "80%",
    height: "80%",
    left: "10%",
    top: "10%",
  },
  setsButton: {
    left: "75%",
    top: "40%",
    width: "10%",
    aspectRatio: 1,
  },
  shadow: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00f",
    left: -5,
    top: -5,
    elevation: 2,
  },
});

export default HomeScreen;
