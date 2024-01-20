import { StyleSheet } from "react-native";
import React from "react";
import Container from "@containers/Container";
import ListData from "@components/ListData";
import Header from "@components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <ListData />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
