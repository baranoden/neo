import { View } from "react-native";
import React, { useState } from "react";
import useAuthStore from "../store/authSlice";
import Button from "components/Button/Button";
import EmailIcon from "assets/emailIcon.svg";
import Input from "components/Input/Input";
import LockIcon from "assets/lockIcon.svg";
import EyeIcon from "assets/eyeIcon.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const [secure, setSecure] = useState(true);

  const { login, user } = useAuthStore();

  const handleSubmit = () => {
    login(userCred);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <Input
          value={userCred.email}
          placeholder="Your Email"
          onChangeText={(e) => setUserCred({ ...userCred, email: e })}
          prefixIcon={<EmailIcon />}
        />
        <Input
          spellCheck={false}
          autoCorrect={false}
          value={userCred.password}
          placeholder="Your Password"
          secure={secure}
          onChangeText={(e) => setUserCred({ ...userCred, password: e })}
          prefixIcon={<LockIcon />}
          suffixIcon={<EyeIcon onPress={() => setSecure(!secure)} />}
        />
        <Button onPress={handleSubmit} title={"Login"} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
