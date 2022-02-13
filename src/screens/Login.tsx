import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Link, useHistory } from "react-router-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/auth/auth.actions";
import { selectAuthError } from "../redux/auth/auth.selector";
import { MutationLoginArgs } from "../graphql/types";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [variables, setVariables] = useState<MutationLoginArgs>({
    email: "",
    password: "",
  });

  const error = useSelector(selectAuthError);

  const { email, password } = variables;

  const submitLogin = () => {
    dispatch(loginStart(variables));
    setVariables({ ...variables, email: "", password: "" });
    if (error) Alert.alert(error);
    history.push("/");
  };

  return (
    <View style={styles.signContainer}>
      <Text style={styles.signTitle}>邮箱账号登录</Text>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email) => setVariables({ ...variables, email })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ letterSpacing: 1 }}>密码</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setVariables({ ...variables, password })}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <TouchableOpacity style={styles.submitBtn} onPress={submitLogin}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>登 录</Text>
        </TouchableOpacity>
      </View>
      <Link to='/register'>
        <Text>还没有账号？注册账号</Text>
      </Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  signContainer: {
    height: "80%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 80,
    paddingBottom: 20,
    borderWidth: 0,
    borderRadius: 20,
  },
  signTitle: {
    fontSize: 30,
    marginBottom: 100,
    letterSpacing: 2,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  input: {
    height: 40,
    width: 240,
    marginBottom: 15,
    marginTop: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderEndColor: "#000",
    paddingHorizontal: 8,
  },
  submitBtn: {
    padding: 12,
    backgroundColor: "#000",
    width: 240,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
});
