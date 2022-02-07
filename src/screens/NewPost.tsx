/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Alert as RNAlert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useHistory } from "react-router-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { Alert, AlertType } from "../components/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBlog, delCloudImg } from "../requests/blog";

interface NewPostProps {
  mode: "create" | "edit";
}

const NewPost: React.FC<NewPostProps> = ({ mode }) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  //从图片库选择图片
  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("抱歉，请允许相机权限后重试");
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //图片比例
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      const { uri } = result as ImageInfo;
      const name = title ? title : uri.slice(uri.lastIndexOf("/") + 1);
      const mime = uri.slice(uri.lastIndexOf(".") + 1);
      const source = { uri, type: `image/${mime}`, name };
      // console.log(source);
      RNAlert.alert("上传图片", "确认上传选中的图片？", [
        { text: "取消", onPress: () => alert("已取消上传") },
        { text: "确认", onPress: () => cloudinaryUpload(source) },
      ]);
    }
  };

  //上传到Cloudinary
  const cloudinaryUpload = (photo: any) => {
    const data = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    data.append("file", photo);
    data.append("upload_preset", process.env.CLOUDINARY_PRESET!);
    data.append("cloud_name", process.env.CLOUDINARY_NAME!);

    fetch(process.env.CLOUDINARY_URI!, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setImage(data.secure_url as string))
      .catch((err) => setError(err.toString() as string));
  };

  //删除图片
  const deleteImage = () => {
    delCloudImg(image)
      .then(() => setImage(""))
      .catch((err: any) => {
        console.log(err);
        setError(err.toString() as string);
      });
  };

  //保存草稿
  const save = async () => {
    try {
      await createBlog({
        imageUrn: image,
        isPublished: false,
        body: content,
        title,
      });

      await AsyncStorage.setItem("title", title);
      await AsyncStorage.setItem("content", content);
      await AsyncStorage.setItem("image", image);

      alert("草稿已成功保存！");
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      alert(error.message);
    }
  };

  //发布文章
  const publish = async () => {
    if (!image || image === "") RNAlert.alert("提示", "请先上传图片");
    try {
      await createBlog({
        imageUrn: image,
        isPublished: true,
        body: content,
        title,
      });

      setTitle("");
      setContent("");
      setImage("");

      await AsyncStorage.setItem("title", title);
      await AsyncStorage.setItem("content", content);
      await AsyncStorage.setItem("image", image);

      alert("文章已成功发布！");
      // history.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  //如果为编辑模式，获取缓存数据
  const getCachedData = async () => {
    if (mode === "edit") {
      const cachedTitle = (await AsyncStorage.getItem("title")) ?? "";
      const cachedContent = (await AsyncStorage.getItem("content")) ?? "";
      const cachedImage = (await AsyncStorage.getItem("image")) ?? "";
      setTitle(cachedTitle);
      setContent(cachedContent);
      setImage(cachedImage);
    }
    return;
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getCachedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <TouchableOpacity onPress={save}>
              <Text style={styles.submit}>保存</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={publish}>
              <Text style={styles.submit}>发布</Text>
            </TouchableOpacity>
          </View>
        </View>
        <>
          {image && image !== "" ? (
            <View style={styles.imgCon}>
              <View style={styles.imgWrp}>
                <AntDesign
                  name='delete'
                  size={14}
                  color='#c92c2c'
                  style={styles.delBtn}
                  onPress={deleteImage}
                />
                <Image source={{ uri: image }} style={styles.img} />
              </View>
            </View>
          ) : null}
        </>
        <TextInput
          style={styles.title}
          placeholder='输入题目...'
          onChangeText={(text) => setTitle(text)}
        />
        <View>
          <TextInput
            placeholder='输入内容...'
            style={styles.content}
            multiline={true}
            numberOfLines={22}
            maxLength={100000}
            editable
            onChangeText={(text) => setContent(text)}
          />
        </View>
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
  imgCon: {
    width: "100%",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  imgWrp: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 240,
    height: 135,
  },
  delBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
  },
  img: {
    borderWidth: 1,
    position: "relative",
    width: 240,
    height: 135,
  },
});
