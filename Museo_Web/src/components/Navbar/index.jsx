import { MdMuseum } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-black text-white w-full h-16 p-3">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-2">
          <MdMuseum className="text-3xl" />
          <h1 className="text-3xl font-bold">Museum</h1>
        </div>
        <ul className="flex items-center gap-2 text-lg">
          <p className="font-light text-sm pr-3">zair.b@gmail.com</p>
          <a href="#Pay" className="p-3 text-2xl">
            <FaTicketAlt />
          </a>
          <button className="p-2">
            EN
            </button>
          <a href="#" className="p-2 text-2xl">
            <IoIosSearch />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
