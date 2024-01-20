import { moviePageState } from "@store/movieState";
import { ENDPOINT } from "@utils/config/endpoint";
import axios, { AxiosResponse } from "axios";
import { getRecoil } from "recoil-nexus";

const fetchMovie = async () => {
  const response: AxiosResponse<any, any> = await axios(
    `${ENDPOINT}${getRecoil(moviePageState)}`
  );

  return response.data;
};

export { fetchMovie };
