import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Link, useHistory } from "react-router-native";
import { useMutation, gql, useLazyQuery } from "@apollo/client";
import { TouchableOpacity } from "react-native";
import { SubmitButton } from "../components/SubmitButton";
import { MyIcon } from "../components/MyIcon";

interface RegisterProps {}
const Register: React.FC<RegisterProps> = ({}) => {
  const [variables, onChangeVariable] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = variables;

  const history = useHistory();

  const REGISTER = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
      register(username: $username, email: $email, password: $password) {
        accessToken
      }
    }
  `;

  const [register, { data }] = useMutation(REGISTER, {
    update: (_, __) => history.push("/"),
    onError: (err) => {
      if (err.graphQLErrors[0]) {
      }
      console.log(err);
    },
  });

  const submitRegister = () => {
    register({ variables });

    onChangeVariable({ ...variables, email: "", password: "", username: "" });
  };
  return (
    <View style={styles.signContainerOuter}>
      <View style={styles.signContainerInner}>
        <Text style={{ fontSize: 25, fontWeight: "700" }}>BOT THK</Text>
        <MyIcon size={60} />
      </View>
      <Text style={styles.signTitle}>新账号注册</Text>
      <View style={styles.inputContainer}>
        <Text>用户名</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(username) =>
            onChangeVariable({ ...variables, username })
          }
        />
      </View>
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
        <TouchableOpacity style={styles.submitBtn} onPress={submitRegister}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>注 册</Text>
        </TouchableOpacity>
      </View>
      <Link to='/register'>
        <Text>已经有账号了？点击登录</Text>
      </Link>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  signContainerOuter: {
    height: "90%",
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
    paddingBottom: 30,
    borderWidth: 0,
    borderRadius: 20,
  },
  signTitle: {
    fontSize: 30,
    marginBottom: 60,
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
  },
  submitBtn: {
    padding: 12,
    backgroundColor: "#000",
    width: 240,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
});
