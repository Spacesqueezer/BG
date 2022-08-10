import React from "react";
import { SectionList, Text, View, StyleSheet } from "react-native";

const InvScreen = (props) => {
  return (
    <View style={styles.wrapper}>
      <SectionList
        style={styles.sectList}
        sections={props.data}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderSectionFooter={({ section: {} }) => (
          <Text style={styles.sectionFooter} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: "100%", height: "100%", backgroundColor: "#e1e1e1" },
  sectList: { width: "100%", height: "100%" },
  sectionHeader: {
    borderWidth: 3,
    width: "100%",
    aspectRatio: 10,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#e1e1e1",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sectionFooter: {
    borderWidth: 3,
    width: "100%",
    aspectRatio: 15,
    backgroundColor: "#e1e1e1",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default InvScreen;
