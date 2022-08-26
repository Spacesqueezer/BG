import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Alert,
  SectionList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { storeData, emptyData, getData } from "../dataFunctions";
import InvScreen from "./components/InvScreen";
import Editor from "./components/Editor";

const Inventory = ({ navigation }) => {
  const [DATA, setDATA] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Adds button, that switches visible screen between Inventory and
   * editing
   */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title={!isEditing ? "Edit" : "Save"}
          onPress={() => setIsEditing(!isEditing)}
        />
      ),
    });
  });

  const addProduct = (product) => {
    let prodCopy = [...DATA];
    prodCopy[0].data.push(product);
    setDATA(prodCopy);
  };

  useEffect(() => {
    // get saved data or set blank
    getData("current_inventory").then((loadedData) => {
      if (loadedData == null) {
        setDATA(emptyData);
        storeData("current_inventory", emptyData).then(() =>
          Alert.alert("Нет сохранённых данных, сделал новые")
        );
      } else {
        setDATA(loadedData);
      }
    });
  }, []);

  useEffect(() => {
    storeData("current_inventory", DATA);
  }, [DATA]);

  return !isEditing ? (
    <InvScreen data={DATA} />
  ) : (
    <Editor data={DATA} addProduct={addProduct} />
  );
};

export default Inventory;
