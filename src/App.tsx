import { useState } from "react";
import { MainSection, NavBar, Notification, SideBar } from "./components";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Notification />
      <div className="overflow-x-hidden flex">
        <div
          className={`xl:flex min-w-[23%] bg-[#F3F4F6] overflow-y-auto fixed h-screen transition-transform duration-6000 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <SideBar isOpen={isSidebarOpen} />
        </div>

        <div className="w-full xl:ml-[23%] flex flex-col">
          <NavBar setIsSidebarOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />
          <MainSection />
        </div>
      </div>
    </>
  );
};

export default App;
