import axios from "axios";

const axsiosUrl = axios.create({
  baseURL: "http://localhost:5000",
});
const useUrl = () => {
  return axsiosUrl;
};

export default useUrl;
