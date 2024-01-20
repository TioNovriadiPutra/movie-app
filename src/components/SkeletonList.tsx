import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const SkeletonList = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Skeleton height={67} style={styles.skeleton} />
          </View>
        )}
      />
    </>
  );
};

export default SkeletonList;

const styles = StyleSheet.create({
  container: {
    padding: 12.5,
  },
  list: {
    paddingBottom: 25,
  },
  skeleton: {
    borderRadius: 10,
  },
});
