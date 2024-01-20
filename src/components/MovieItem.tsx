import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MovieType } from "@utils/model/movieModel";
import { colors } from "@themes/colors";

type Props = {
  item: MovieType;
};

const MovieItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: item.small_cover_image }} style={styles.cover} />
      </TouchableOpacity>

      <View style={styles.desc}>
        <TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        <Text style={styles.rating}>rating : {item.rating}</Text>
      </View>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  cover: {
    width: 45,
    height: 67,
    borderRadius: 10,
  },
  container: {
    padding: 12.5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  desc: {
    gap: 3,
  },
  title: {
    fontWeight: "700",
    fontSize: 14,
    color: colors.Black,
  },
  rating: {
    fontWeight: "400",
    fontSize: 12,
    color: colors.Placeholder,
  },
});
