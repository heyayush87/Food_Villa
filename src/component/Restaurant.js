import { IMG_URL } from "../Constant";

const Restaurant = ({
  cloudinaryImageId = "",
  name = "Unknown",
  cuisines = [],
  sla = {},
}) => {
  return (
    <div
      data-testid="rescard"
      className="m-2 p-4 w-full rounded-xl bg-neutral-200 hover:bg-neutral-400 hover:scale-105 transition duration-300 ease-in-out shadow-md flex flex-col items-center"
    >
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="rounded-xl w-full h-[180px] object-cover mb-2"
      />
      <h3 className="font-bold py-2 text-lg text-center">{name}</h3>
      <h4 className="font-semibold text-center text-sm text-gray-700">
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h4>
    </div>
  );
};

export default Restaurant;
