import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SubmitButton } from "../components/SubmitButton";

interface RegisterProps {}
const Register: React.FC<RegisterProps> = ({}) => {
  const [values, onChangeValues] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = values;

  const submitRegister = async () => {
    console.log("object");
  };
  return (
    <View style={styles.signContainerOuter}>
      <View style={styles.signContainerInner}>
        <Text style={styles.signTitle}>注册</Text>
        <View style={styles.inputContainer}>
          <Text>用户名</Text>
          <TextInput
            style={styles.input}
            placeholder='请输入用户名'
            value={username}
            onChangeText={(username) => onChangeValues({ ...values, username })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='请输入邮箱'
            value={email}
            onChangeText={(email) => onChangeValues({ ...values, email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>密码</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='请输入密码'
            value={password}
            onChangeText={(password) => onChangeValues({ ...values, password })}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <SubmitButton onPress={submitRegister}>
            <Text style={{ color: "white" }}>登录</Text>
          </SubmitButton>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  signContainerOuter: {
    height: "max-content",
    width: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 20,
    paddingTop: 10,
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: "#88a5bf",
    shadowInset: { width: 3, height: 3 },
    shadowOpacity: 0.48,
    shadowRadius: 7,
  },
  signContainerInner: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 25,
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: "#fff",
    shadowInset: { width: -3, height: -3 },
    shadowOpacity: 0.48,
    shadowRadius: 7,
  },
  signTitle: {
    fontSize: 22,
    marginBottom: 50,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  input: {
    height: 40,
    width: 220,
    marginBottom: 10,
    marginTop: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
