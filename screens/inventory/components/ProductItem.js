import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProductItem = (props) => {
  let product = props.item;
  let name = product.name;
  let idx = props.idx+1;
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        style={styles.gradient}
        colors={["#a4a4a4", "#f3f3f3"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <Text style={styles.prodIdx}>{idx}.</Text>
      <Text style={styles.prodName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    width: "95%",
    aspectRatio: 4,
    left: "2.5%",
  },
  prodIdx: { fontSize: 15 },
  prodName: { fontSize: 20 },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flexDirection: "row",
  },
});

export default ProductItem;
