import { IoLockClosed } from "react-icons/io5";
import { idea, intro } from "../assets";

const MainSection = () => {
  return (
    <main className="px-5 xl:px-40 py-5 text-[#48484E] flex flex-col ">
      <h1 className="text-2xl xl:text-4xl font-bold">Getting started</h1>
      <div className="flex gap-2 mt-5 w-full max-w-[600px] bg-[#f0f1f3] p-5 rounded-xl">
        <IoLockClosed size={25} className="text-yellow-500" />
        <div className="flex flex-col gap-5 text-sm">
          <p>
            This dot is in your private channel, where you can store your
            private work. You can share docs one by one from here, but to
            properly organize your team's knowledge base, use workspace
            channels.
          </p>
          <p>
            You can make channels public to make all docs visible to everyone on
            the team, or private if you want the channel's docs to only be
            visible by a selection of teammates.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5 w-full max-w-[600px]">
        <h1 className="text-xl xl:text-2xl font-bold">
          Collaborate with your team with these three features
        </h1>
        <p className="font-semibold text-xl">✍ Docs</p>
        <img src={intro} alt="" />
        <p className="flex items-center gap-1">
          <img src={idea} alt="" className="w-5 h-5" />{" "}
          <span className="text-[14px] font-medium">
            Give it a go by typing / below
          </span>
        </p>
      </div>
    </main>
  );
};

export default MainSection;
