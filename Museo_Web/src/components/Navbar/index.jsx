import { useState } from "react";
import { MdMuseum } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Search } from "../Search";

const Navbar = () => {
  const [ShowSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    setShowSearch(!ShowSearch);
  };

  return (
    <nav className="bg-black text-white w-full h-16 ">
      <div className="flex justify-between items-center h-full p-3">
        <div className="flex items-center gap-2">
          <MdMuseum className="text-3xl" />
          <h1 className="text-3xl font-bold">Museum</h1>
        </div>
        <ul className="flex items-center gap-2 text-lg">
          <p className="font-light text-sm pr-3">zair.b@gmail.com</p>
          <a href="#Pay" className="p-3 text-2xl">
            <FaTicketAlt />
          </a>
          <button className="p-2">EN</button>
          <button className="p-2 text-2xl" onClick={handleSearch}>
            <IoIosSearch />
          </button>
        </ul>
      </div>
      <Search ShowSearch={ShowSearch}/>
    </nav>
  );
};

export default Navbar;
