import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Product } from "../../dataFunctions";

const AddProdModal = (props) => {
  const [prodName, setProdName] = useState("");

  const onAddProduct = () => {
    if (prodName !== "") {
      let newProduct = new Product(prodName, "box");
      props.addProduct(newProduct);
    }
    props.closeModal()
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Новый продукт</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Название продукта</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={text => setProdName(text)}
        />
        <Button title={"Add"} onPress={onAddProduct} />
        <Button title={"Cancel"} />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
    height: "60%",
    left: "10%",
    top: "10%",
  },
  header: {
    borderWidth: 3,
    height: "10%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#cccccc",
    alignItems: "center",
    elevation: 10,
  },
  headerText: { fontSize: 25 },
  body: {
    height: "85%",
    width: "95%",
    left: "2.5%",
    backgroundColor: "#dedede",
    elevation: 10,
  },
  footer: {
    borderWidth: 3,
    height: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#cccccc",
    elevation: 10,
  },
  label: {},
  nameInput: {
    backgroundColor: "#fff",
  },
});

export default AddProdModal;
