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

  return !isEditing ? <InvScreen data={DATA} /> : <Editor data={DATA} />;
};

export default Inventory;
