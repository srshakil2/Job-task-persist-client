import useAllData from "../../Hooks/useAllData";

const EventList = () => {
  const [data, refetch] = useAllData("/allData");
  console.log(data);
  return (
    <div>
      <p className="text-3xl font-semibold">This is event list Page</p>
    </div>
  );
};

export default EventList;
