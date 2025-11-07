import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileCard
          name="Ada"
          role="job01"
          imageSource={require("./assets/ada.png")}
        />
        <ProfileCard
          name="Grace"
          role="job02"
          imageSource={require("./assets/grace.png")}
        />
        <ProfileCard
          name="Hedy"
          role="job03"
          imageSource={require("./assets/hedy.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
