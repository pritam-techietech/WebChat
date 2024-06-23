import { useMediaQuery } from "react-responsive";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 639px)" });
  return (
    <div
      className={`${!isSmallScreen && "border-r border-slate-500"} ${
        isSmallScreen && `w-full`
      } px-2 flex flex-col`}
    >
      <SidebarHeader />
      <SearchInput />
      <div className="divider bg-white h-[1px]"></div>
      <Conversations />
      {/* <Logoutbutton /> */}
    </div>
  );
};

export default Sidebar;
