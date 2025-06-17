const TempShimmer = ({ variant = "card" }) => {
  const isMenu = variant === "menu";



  return (
    <div
      className={
        isMenu
          ? "flex flex-col gap-4 w-[80%] mx-auto"
          : "flex flex-wrap gap-4 justify-center"
      }
    >
      {Array(isMenu ? 6 : 20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className={
              isMenu
                ? "w-full h-5 bg-gray-200 rounded-md animate-pulse shadow-sm"
                : "w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-[260px] bg-gray-200 rounded-xl animate-pulse shadow"
            }
          ></div>
        ))}
    </div>
  );
};

export default TempShimmer;
