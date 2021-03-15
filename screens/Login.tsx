import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Link, useHistory } from "react-router-native";
import { useMutation, gql, useLazyQuery } from "@apollo/client";
import { TouchableOpacity } from "react-native";
import { MyIcon } from "../components/MyIcon";

interface LoginProps {}
const Login: React.FC<LoginProps> = ({}) => {
  const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        accessToken
      }
    }
  `;

  const history = useHistory();
  const [variables, onChangeVariable] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const { email, password } = variables;

  const [login, { data }] = useMutation(LOGIN, {
    update: (_, __) => history.push("/"),
    onError: (err) => {
      if (err.graphQLErrors[0]) {
        setErrors(err.graphQLErrors[0]);
      }
      console.log(err);
      setErrors(err);
    },
    onCompleted(data) {
      console.log(data);
      history.push("/");
    },
  });

  const submitLogin = () => {
    login({ variables });

    onChangeVariable({ ...variables, email: "", password: "" });
  };
  return (
    <View style={styles.signContainerOuter}>
      {/* <View style={styles.signContainerInner}>
        <Text style={{ fontSize: 25, fontWeight: "700" }}>BOT THK</Text>
        <MyIcon size={60} />
      </View> */}
      <Text style={styles.signTitle}>邮箱账号登录</Text>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email) => onChangeVariable({ ...variables, email })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ letterSpacing: 1 }}>密码</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) =>
            onChangeVariable({ ...variables, password })
          }
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
  signContainerOuter: {
    height: "80%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 20,
    borderWidth: 0,
    borderRadius: 20,
  },
  signContainerInner: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 35,
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
