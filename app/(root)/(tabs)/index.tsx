import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="px-4 font-bold text-lg my-10 font-rubik">
        Welcome To Restate Project
      </Text>
      <Link href="/sign-in" className="text-blue-500 mb-2">
        Sign In
      </Link>
      <Link href="/explore" className="text-blue-500 mb-2">
        Explore
      </Link>
      <Link href="/profile" className="text-blue-500 mb-2">
        Profile
      </Link>
      <Link href="/properties" className="text-blue-500">
        Properties
      </Link>
    </View>
  );
};

export default Index;
