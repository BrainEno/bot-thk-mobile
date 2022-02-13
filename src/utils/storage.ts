import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToken = async (token: string) => {
  try {
    const prev = await AsyncStorage.getItem("token");
    if (prev) await AsyncStorage.removeItem("token");
    await AsyncStorage.setItem("token", token);
  } catch (err) {
    console.log(err);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) return null;
    return token;
  } catch (err) {
    console.log(err);
    return "";
  }
};
