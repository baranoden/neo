import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "components/Button/Button";
import useAuthStore from "screens/auth/store/authSlice";

const Home = () => {
  const { logout } = useAuthStore();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Welcome, Hyades!</Text>
      <Button onPress={() => logout()} title={"Logout"} />
    </SafeAreaView>
  );
};

export default Home;
