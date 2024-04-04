import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Notification = () => {
  const [notification, setNotification] = useState(true);
  return (
    <>
      {notification && (
        <div className="bg-[#4488ED] py-3 text-white top-0 sticky z-10">
          <div className="relative">
            <p className="text-center text-[11px] px-6 xl:text-sm ">
              Enable browser notifications to avoid missing out on important
              activity.
            </p>
            <IoMdClose
              size={20}
              className="cursor-pointer xl:hidden absolute top-[-7px] right-2"
              onClick={() => setNotification(false)}
            />
            <div className="absolute right-4 top-0 bottom-0  hidden xl:flex items-center gap-3 ">
              <button className="flex gap-1 items-center bg-[#1F6DE1] px-2 py-1 rounded-md">
                <span>
                  <IoNotificationsOutline />
                </span>
                Enable Notification
              </button>
              <IoMdClose
                size={25}
                className="cursor-pointer"
                onClick={() => setNotification(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
