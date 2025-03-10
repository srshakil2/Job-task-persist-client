import { useQuery } from "@tanstack/react-query";
import useUrl from "./useURL";

const useAllData = (input) => {
  const axiosUrl = useUrl();
  // TanStack Query
  const { refetch, data = [] } = useQuery({
    queryKey: [`${input}`, input],
    queryFn: async () => {
      const res = await axiosUrl.get(input);
      return res.data;
    },
    enabled: !!input,
  });
  return [data, refetch];
};

export default useAllData;
