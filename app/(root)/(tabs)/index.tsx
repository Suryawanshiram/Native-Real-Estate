import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Text className="font-bold text-lg my-10">
        WelCome To Restate Project
      </Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties">Properties</Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
