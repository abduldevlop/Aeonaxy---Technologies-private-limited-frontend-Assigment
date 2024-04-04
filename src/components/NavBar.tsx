import { CiMenuKebab } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { GoChevronLeft, GoInbox } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuChevronRight } from "react-icons/lu";
import { PiChatTeardropLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = ({ setIsSidebarOpen, isOpen }: any) => {
  return (
    <nav className="flex justify-between p-2 xl:p-4 text-[#68696b]">
      <div className="flex  items-center w-full justify-center xl:justify-start flex-wrap gap-1 xl:gap-3  ">
        <GoInbox className="text-[#626366]" />
        <div className="flex items-center gap-2 text-[#b7babf]">
          <GoChevronLeft />
          <LuChevronRight />
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-[#5e5f60]">
            <IoLockClosedOutline size={15} />
          </span>
          <span className="mt-[2px] text-[10px] xl:text-sm ">
            My private channel / 🖐️ Getting started
          </span>
        </div>
      </div>
      {!isOpen ? (
        <>
          <RxHamburgerMenu
            size={25}
            className="xl:hidden "
            onClick={() => setIsSidebarOpen((prev: any) => !prev)}
          />
        </>
      ) : (
        <>
          <IoMdClose
            size={25}
            className="xl:hidden "
            onClick={() => setIsSidebarOpen((prev: any) => !prev)}
          />
        </>
      )}
      <div className=" hidden  xl:flex items-center gap-5 cursor-pointer">
        <p>Share</p>
        <span>
          <PiChatTeardropLight size={20} />
        </span>
        <span>
          <FaRegStar size={18} />
        </span>
        <CiMenuKebab size={20} className="text-black" />
      </div>
    </nav>
  );
};

export default NavBar;
