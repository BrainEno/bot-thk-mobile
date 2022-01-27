import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Link, useHistory } from "react-router-native";
import { TouchableOpacity } from "react-native";
import { registerRequest } from "../requests/auth";
import { MutationRegisterArgs } from "../graphql/types";

interface RegisterProps {}
const Register: React.FC<RegisterProps> = () => {
  const [success, setSuccess] = useState(false);

  const [variables, onChangeVariable] = useState<MutationRegisterArgs>({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = variables;

  const history = useHistory();

  const submitRegister = async () => {
    try {
      const res = await registerRequest(variables);
      setSuccess(res);
      if (success) history.push("/");
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.graphQLErrors[0]) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(err.graphQLErrors[0]);
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(err.message);
    }

    onChangeVariable({ ...variables, email: "", password: "", username: "" });
  };

  return (
    <View style={styles.signContainer}>
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
      <Link to='/login'>
        <Text>已经有账号了？点击登录</Text>
      </Link>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  signContainer: {
    height: "90%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "8%",
    paddingBottom: "8%",
    borderWidth: 0,
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
