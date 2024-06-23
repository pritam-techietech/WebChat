import { useMediaQuery } from "react-responsive";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";
import useConversation from "../zustand/useConversation";

const HomePage = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 639px)" });
  const { getSelectedConversation } = useConversation();
  const selectedConversation = getSelectedConversation();
  // console.log("selectedConversation : " + selectedConversation);
  // console.log("isSmallScreen : " + isSmallScreen);

  return (
    <div className="flex h-[90%] min-w-fit w-[90%] bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 p-2]">
      {isSmallScreen ? (
        selectedConversation ? (
          <MessageContainer />
        ) : (
          <Sidebar />
        )
      ) : (
        <>
          <Sidebar />

          <MessageContainer />
        </>
      )}
      {/* <Sidebar/> */}
      {/* <div className='hidden md:min-w-[450px] sm:flex flex-col'> */}

      {/* {!isSmallScreen && <MessageContainer/>} */}
      {/* <MessageContainer/> */}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
