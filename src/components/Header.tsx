import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import { useForm } from "react-hook-form";

const Header = () => {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <SearchInput control={control} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 12.5,
  },
});
