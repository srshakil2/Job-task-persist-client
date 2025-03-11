import { useState } from "react";
import useAllData from "../../Hooks/useAllData";
import EventCard from "../EventCard/EventCard";
import axios from "axios";
import Swal from "sweetalert2";

const EventList = () => {
  const [search, setSearch] = useState("");
  const [data, refetch] = useAllData(`/allData?search=${search}`);

  const handelSearch = (e) => {
    setSearch(e.target.value);
    refetch();
  };

  const handelModalData = (e) => {
    const data = e.target;
    const title = data.title.value;
    const date = data.date.value;
    const description = data.description.value;
    const location = data.location.value;
    const category = data.category.value;
    if (category == "") return;
    const inputData = {
      Title: title,
      Date: date,
      Location: location,
      Description: description,
      Category: category,
    };
    // console.log(inputData);
    axios
      .post("https://job-task-persist.vercel.app/eventData", inputData)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event data save success",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          data.reset();
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const addEvent = () => {
    document.getElementById("my_modal_5").showModal();
  };

  // location

  return (
    <div>
      <div>
        <title>Events</title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-7 mt-10">
        <p className="text-xl font-bold">Filter by Category</p>
        <input
          onChange={(e) => handelSearch(e)}
          type="text"
          value={search}
          placeholder="Search"
          className="input"
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-5 mb-10  justify-center ">
        {data.map((item) => (
          <EventCard key={item._id} item={item} addEvent={addEvent}></EventCard>
        ))}
      </div>
      {/* modal */}
      <div className="relative ">
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle px-5 md:px-0"
        >
          <div className="modal-box overflow-hidden">
            <button
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn fixed -top-1 -right-1 rounded-full bg-red-400"
            >
              X
            </button>

            {/* modal-action */}
            <div className="">
              <form method="dialog" onSubmit={(e) => handelModalData(e)}>
                {/* if there is a button in form, it will close the modal */}
                <h2 className="text-xl font-bold mb-4">
                  Enter Your Event Details
                </h2>
                {/* title */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">Title:</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* date */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">Date:</label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* location */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">Location:</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* description */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter Description"
                    className="textarea textarea-bordered w-full"
                    required
                  />
                </div>
                {/* select option */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Category:
                  </label>
                  <select
                    name="category"
                    className="select select-bordered w-full"
                  >
                    <option value="">Select a category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                  </select>
                </div>
                <button className="btn w-full bg-indigo-800 hover:bg-indigo-700 text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default EventList;
