import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  isLoading: boolean;
};

const ListLoader = ({ isLoading }: Props) => {
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={"blue"} />
    </View>
  ) : null;
};

export default ListLoader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "red",
    height: 92,
  },
});
