import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "screens/auth/Login/Login";
import Home from "screens/home/Home";
import useAuthStore from "screens/auth/store/authSlice";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

const AppNavigator = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Home" component={Home} />
  </AppStack.Navigator>
);

export const RootNavigator = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      {user.data?.email ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
