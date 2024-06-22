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
    <div className="bg-slate-500 px-4 py-2 mb-2 flex">
      {isSmallScreen && (
        <button 
        className="me-4"
        onClick={() => setSelectedConversation(null)}
        >
          <IoArrowBackSharp />
        </button>
      )}
      
      <div className="text-green-900 font-bold flex-1 text-center me-10">{fullName}</div>
    </div>
  );
};

export default MessageHeader;
