import { Redirect, Slot } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { useGlobalContext } from "@/lib/global-provider";

export default function AppLayout() {
  //   const { loading, isLogged } = useGlobalContext();
  const [loading, isLogged] = useState(false);

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
