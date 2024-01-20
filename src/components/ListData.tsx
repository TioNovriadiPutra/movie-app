import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import { fetchMovie } from "@utils/controller/movieController";
import MovieList from "./MovieList";
import SkeletonList from "./SkeletonList";

const ListData = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchMovieData"],
    queryFn: fetchMovie,
  });

  return (
    <View>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <MovieList
          data={data.data.movies}
          isLoading={isLoading}
          refetch={refetch}
        />
      )}
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({});
