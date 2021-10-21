import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useHistory } from "react-router-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { Alert, AlertType } from "../components/Alert";

const NewPost = () => {
  const history = useHistory();
  const [title, onChangeTitle] = useState("");
  const [content, onChangeContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  //从图片库选择图片
  const pickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      const { uri } = result as ImageInfo;
      const name = title ? title : uri.slice(uri.lastIndexOf("/") + 1);
      const mime = uri.slice(uri.lastIndexOf(".") + 1);
      const source = { uri, type: `image/${mime}`, name };
      console.log(source);
      cloudinaryUpload(source);
    }
  };

  //上传到Cloudinary
  const cloudinaryUpload = (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", process.env.CLOUDINARY_PRESET);
    data.append("cloud_name", process.env.CLOUDINARY_NAME);
    fetch(process.env.CLOUDINARY_URI, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setImage(data.secure_url))
      .catch((err) => setError(err.toString()));
  };

  const publish = () => {
    console.log(content);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("抱歉，请允许相机权限后重试");
        }
      }
    })();
  }, []);

  return (
    <SafeAreaProvider style={styles.editor}>
      {error ? <Alert message={error} type={AlertType.ERROR} /> : null}
      <View style={styles.editor}>
        <View style={styles.btnGroup}>
          <AntDesign
            name='close'
            size={24}
            color='#000'
            style={{
              marginHorizontal: 12,
            }}
            onPress={() => history.push("/")}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name='picture'
              size={24}
              color='black'
              onPress={pickImage}
            />
            <TouchableOpacity onPress={publish}>
              <Text style={styles.submit}>发布</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.title}
          placeholder='输入题目...'
          onChangeText={(text) => onChangeTitle(text)}
        />
        <View>
          <TextInput
            placeholder='开始书写...'
            style={styles.content}
            multiline={true}
            numberOfLines={22}
            maxLength={100000}
            editable
            onChangeText={(text) => onChangeContent(text)}
          />
        </View>
        {image ? <Image source={{ uri: image }} style={styles.img} /> : null}
      </View>
    </SafeAreaProvider>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  editor: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EFF3F8",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  submit: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  title: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginVertical: 20,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 40,
  },
  content: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginVertical: 0,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  img: {
    width: 200,
    height: 200,
  },
});
