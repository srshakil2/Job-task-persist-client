import useAllData from "../../Hooks/useAllData";
import EventCard from "../EventCard/EventCard";

const EventList = () => {
  const [data, refetch] = useAllData("/allData");
  // console.log(data);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-5 mb-10  justify-center ">
      {data.map((item) => (
        <EventCard key={item._id} item={item} refetch={refetch}></EventCard>
      ))}
    </div>
  );
};

export default EventList;
