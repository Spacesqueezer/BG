import React, { useState } from "react";
import { SectionList, View } from "react-native";

const Inventory = () => {
  const [DATA, setDATA] = useState();
  return (
    <View>
      <SectionList sections={DATA} />
    </View>
  );
};

export default Inventory;
