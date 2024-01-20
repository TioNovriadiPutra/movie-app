import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MovieType } from "@utils/model/movieModel";
import MovieItem from "./MovieItem";
import ListLoader from "./ListLoader";
import { getRecoil, setRecoil } from "recoil-nexus";
import { moviePageState } from "@store/movieState";

type Props = {
  data: MovieType[];
  isLoading: boolean;
  refetch: any;
};

const MovieList = ({ data, isLoading, refetch }: Props) => {
  const handleLoadMore = () => {
    const page = getRecoil(moviePageState);
    setRecoil(moviePageState, page + 1);
    refetch();
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        ListFooterComponent={<ListLoader isLoading={isLoading} />}
        style={styles.listContainer}
        contentContainerStyle={{ paddingBottom: isLoading ? 50 : 25 }}
        renderItem={({ item }) => <MovieItem item={item} />}
        onEndReachedThreshold={0}
        onEndReached={handleLoadMore}
      />
    </>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 50,
  },
  listContainer: {
    backgroundColor: "red",
    flexGrow: 1,
  },
});
