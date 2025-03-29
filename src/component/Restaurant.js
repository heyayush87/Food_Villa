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
      className="w-[250px] px-[10px] py-[5px] rounded-[5px] transition duration-300 ease-in-out hover:scale-110 shadow-md"
    >
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="object-contain"
      />

      <h3 className="m-[2px] font-Arvo font-normal">{name}</h3>
      <h5 className="text-wrap whitespace-normal overflow-hidden text-ellipsis">
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h5>
      <h4>{sla?.lastMileTravelString || "N/A"}</h4>
    </div>
  );
};

export default Restaurant;
