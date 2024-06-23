import { useMediaQuery } from "react-responsive";
import useConversation from "../../zustand/useConversation";
import { IoArrowBackSharp } from "react-icons/io5";

interface MessageHeaderProps {
  fullName: string;
}
const MessageHeader = ({ fullName }: MessageHeaderProps) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 639px)" });
  const { setSelectedConversation } = useConversation();
  return (
    <div className="bg-gray-900 px-4 py-2 rounded-md mb-2 flex text-white">
      {isSmallScreen && (
        <button 
        className="me-4"
        onClick={() => setSelectedConversation(null)}
        >
          <IoArrowBackSharp />
        </button>
      )}
      
      <div className=" font-bold flex-1 text-center me-10">{fullName}</div>
    </div>
  );
};

export default MessageHeader;
