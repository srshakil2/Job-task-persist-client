import axios from "axios";

const axsiosUrl = axios.create({
  baseURL: "https://job-task-persist.vercel.app",
});
const useUrl = () => {
  return axsiosUrl;
};

export default useUrl;
