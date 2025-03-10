const EventCard = ({ item, addEvent }) => {
  //   console.log(item);
  return (
    <div className="relative max-w-sm p-5 bg-white shadow-xl rounded-2xl border border-gray-200 transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-xl font-bold text-primary mb-2">{item.Title}</h2>
      <span className="mt-3 text-sm font-medium  ">{item.Category}</span>
      <p className="text-sm text-gray-500">
        {item.Date} • {item.Location}
      </p>
      <p className="mt-2 text-gray-700">
        {item.Description.split(" ").slice(0, 25).join(" ")}
      </p>
      {/* Add Add New Events btn */}
      <div className="inline-block mt-10">
        <button
          onClick={addEvent}
          className="btn fixed right-4 bottom-3  bg-indigo-800 text-white hover:bg-indigo-900 border-none  shadow-none "
        >
          Add New Events
        </button>
      </div>
    </div>
  );
};

export default EventCard;
