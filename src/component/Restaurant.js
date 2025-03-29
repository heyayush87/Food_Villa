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
      className="res-card m-4 p-4 w-[300px] rounded-xl bg-neutral-200 hover:bg-neutral-400 hover:scale-105 transition duration-300 ease-in-out shadow-md"
    >
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="res-logo rounded-xl w-[300px] h-[200px] object-cover"
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h4 className="font-semibold">
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h4>
    </div>
  );
};

export default Restaurant;
