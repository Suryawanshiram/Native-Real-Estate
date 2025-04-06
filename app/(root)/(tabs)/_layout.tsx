import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Index from ".";

const AppLayout = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>
        <Index />
      </Text>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
