import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('current_inventory')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}

const emptyData = [{
    title: 'Необходимо проверить',
    data: []
},{
    title: 'Заказать',
    data: []
},{
    title: 'Этого хватает',
    data: []
}]

export {storeData, getData, removeValue, emptyData}