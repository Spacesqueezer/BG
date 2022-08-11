import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import AddProdModal from "./AddNewProductModal";

const Editor = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  let list = [];

  const addProduct = (product) => {
    list.push(product);
    props.addProduct(product);
  };

  useEffect(() => {
    list = props.data.forEach((item) => {
      item.data.forEach((product) => {
        list.push(product);
      });
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          <Text>{item}</Text>;
        }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <AddProdModal
          addProduct={addProduct}
          closeModal={() => setIsModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: "100%", height: "100%", backgroundColor: "#cccccc" },
  addButton: {
    width: "15%",
    aspectRatio: 1,
    backgroundColor: "#064de3",
    position: "absolute",
    left: "75%",
    top: "85%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default Editor;
