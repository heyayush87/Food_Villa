import { IMG_URL } from "../Constant";

const Restaurant = ({ cloudinaryImageId, name, cuisines, sla }) => {
  return (
    <div className="  p-2 m-5 shadow-lg bg-slate-500 h-full w-52 overflow-hidden rounded-lg">
      <img src={IMG_URL + cloudinaryImageId} />

      <h2 className="font-bold text-xl">{name}</h2>
      <h5 className="text-wrap whitespace-normal overflow-hidden text-ellipsis">
        {cuisines.join(",")}
      </h5>
      <h4>{sla.lastMileTravelString} </h4>
    </div>
  );
};

export default Restaurant;
