import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaHandPaperSolid } from "react-icons/lia";
import { CgSearch } from "react-icons/cg";
import { WiTime3 } from "react-icons/wi";
import { PiWechatLogoLight } from "react-icons/pi";
import { FaCaretRight, FaSortDown } from "react-icons/fa";
import { channels } from "../data";
import { logo } from "../assets";
import { buttons } from "../constants";

interface ClickedFiles {
  [channelIndex: number]: string | null;
}

const SideBar = ({ isOpen }: any) => {
  const [openChannels, setOpenChannels] = useState<boolean[]>(
    channels.map(() => false)
  );
  const [clickedFiles, setClickedFiles] = useState<ClickedFiles>({});

  const toggleFile = (channelIndex: number, file: string) => {
    setClickedFiles((prevClickedFiles) => {
      const updatedClickedFiles = { ...prevClickedFiles };

      // Remove background from previously clicked file, if any
      for (const index in updatedClickedFiles) {
        if (index !== channelIndex.toString()) {
          updatedClickedFiles[index] = null;
        }
      }

      // Toggle background for the clicked file
      if (updatedClickedFiles[channelIndex] === file) {
        updatedClickedFiles[channelIndex] = null;
      } else {
        updatedClickedFiles[channelIndex] = file;
      }

      return updatedClickedFiles;
    });
  };
  return (
    <>
      {isOpen && (
        <aside className="p-3 text-[#57585a] flex flex-col gap-3  ">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <img src={logo} alt="logo" className="w-12 h-10" />
              <span className="text-black font-medium">refero team</span>
            </div>
            <IoNotificationsOutline size={20} />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 bg-white items-center rounded-xl py-2 px-2 w-full">
              <LiaHandPaperSolid size={25} />
              <input
                type="text"
                placeholder="Ask your AI assistant"
                className="outline-none w-full"
              />
            </div>
            <div className="bg-white cursor-pointer py-2 rounded-md w-[50px] flex items-center justify-center ">
              <CgSearch size={20} />
            </div>
          </div>
          <div className="bg-[#E4E5E7] px-6 py-2 flex flex-col  justify-center rounded-md">
            <h3 className="font-medium text-black">
              Your team used 8/50 free docs
            </h3>
            <p className="text-[13px]">Upgrade to create unlimited docs</p>
          </div>

          <div className="flex flex-col gap-2 justify-center ml-5 mt-3 cursor-pointer ">
            <h2 className="flex items-center gap-2 text-[17px] text-black ">
              <WiTime3 size={25} className="text-[#57585a] " />
              <span>Catch up</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 justify-center ml-5 cursor-pointer ">
            <h2 className="flex items-center gap-2 text-[17px] text-black ">
              <PiWechatLogoLight size={25} className="text-[#57585a] " />
              <span>Discussions</span>
            </h2>
          </div>

          <div className="mt-3 ml-5">
            <h2 className="font-medium text-black">Favorites</h2>
            <p className="mt-2 text-sm font-medium"> 🖐️ Getting started </p>
          </div>

          <div className="mt-3 ml-5 flex flex-col gap-2">
            <h2 className="font-medium text-black">My Channels</h2>
            {channels.map((channel, channelIndex: number) => (
              <div
                key={channel.id}
                className="flex flex-col gap-1 mt-3 cursor-pointer"
                onClick={() => {
                  const updatedChannels = [...openChannels];
                  updatedChannels[channelIndex] =
                    !updatedChannels[channelIndex];
                  setOpenChannels(updatedChannels);
                }}
              >
                <div className="flex gap-2">
                  {openChannels[channelIndex] ? (
                    <FaSortDown />
                  ) : (
                    <FaCaretRight />
                  )}
                  <span className="w-5 h-5">{channel.icon}</span>
                  <p className="text-sm font-medium">{channel.title}</p>
                </div>
                <div>
                  {openChannels[channelIndex]
                    ? channel.files.map((file) => (
                        <p
                          key={file}
                          id={file}
                          className={`ml-5 mt-2 text-sm px-6 py-2 rounded-xl ${
                            clickedFiles[channelIndex] === file
                              ? "bg-[#E5E9F5]"
                              : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFile(channelIndex, file);
                          }}
                        >
                          {file}
                        </p>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 ml-5">
            {buttons.map((btn) => (
              <div
                key={btn.id}
                className="flex items-center gap-3 cursor-pointer"
              >
                <span> {btn.icon} </span>
                <span> {btn.title} </span>
              </div>
            ))}
          </div>
        </aside>
      )}
    </>
  );
};

export default SideBar;
