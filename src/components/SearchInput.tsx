import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { Control, FieldValues, useController } from "react-hook-form";

type Props = {
  control: Control<FieldValues, any>;
};
const SearchInput = ({ control }: Props) => {
  const { field } = useController({
    name: "search",
    defaultValue: null,
    control,
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={field.value}
        placeholder="Input movie title!"
        placeholderTextColor={colors.Placeholder}
        onChangeText={field.onChange}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Grey,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  input: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.Black,
  },
});
