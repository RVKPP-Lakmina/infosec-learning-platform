import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" flex flex-col w-screen h-screen justify-center items-center">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
      <div className="py-6 font-semibold text-[#306cce]">Loading...</div>
    </div>
  );
};

export default Loader;
