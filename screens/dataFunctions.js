import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const emptyData = [
  {
    title: "Необходимо проверить",
    data: [],
  },
  {
    title: "Заказать",
    data: [],
  },
  {
    title: "Этого хватает",
    data: [],
  },
];

/**
 * The Product function creates a new Product object.
 *
 *
 * @param name Set the name of the product
 * @param unit Set the unit of measure for the product
  this
 *
 * @return An object with the name, count and unit properties
 *
 * @docauthor Trelent
 */
function Product(name, unit) {
  this.name = name;
  this.count = 0;
  this.unit = unit;
}

export { storeData, getData, emptyData, Product };
