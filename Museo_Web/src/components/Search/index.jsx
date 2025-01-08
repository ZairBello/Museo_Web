import { VscSend } from "react-icons/vsc";

export const Search = (props) => {
  const { ShowSearch } = props;

  return (
    <div
      className={`h-48 z-10 w-full text-black flex flex-col justify-end items-end relative duration-500 
  ${ShowSearch ? "top-0" : "-top-[1000px]"} `}
    >
      <div className="z-10 bg-white h-44 mt-3 w-2/6 flex flex-col justify-center items-center rounded-xl shadow shadow-black mr-3">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className=" w-full h-12 bg-black border border-blue-500 rounded-2xl text-white p-6 focus:bg-white focus:text-black focus:border-black duration-200 "
          ></input>
          <button className="w-16 h-12 text-white bg-blue-500 rounded-2xl hover:bg-blue-600">
            <VscSend className="text-2xl m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};
