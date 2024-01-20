import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@utils/config/queryClient";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import RecoilNexus from "recoil-nexus";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <AppNav />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
