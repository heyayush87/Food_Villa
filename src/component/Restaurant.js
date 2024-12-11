import { IMG_URL } from "../Constant";

const Restaurant = ({ cloudinaryImageId, name, cuisines, sla }) => {
  return (
    <div className="w-[250px]  px-[10px] py-[5px] rounded-[5px] transition duration-300 ease-in-out hover:scale-110 shadow-md">
      <img src={IMG_URL + cloudinaryImageId} />

      <h3 className="m-[2px] font-Arvo font-normal">{name}</h3>
      <h5 className="text-wrap whitespace-normal overflow-hidden text-ellipsis">
        {cuisines.join(",")}
      </h5>
      <h4>{sla.lastMileTravelString} </h4>
    </div>
  );
};

export default Restaurant;
