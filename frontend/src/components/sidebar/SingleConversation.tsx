// import useGetMessages from "../../hooks/useGetMessages";
import { UserModel } from "../../models/UserModel";
import useConversation from "../../zustand/useConversation";
interface SingleConversationProps {
  data: UserModel;
}
const SingleConversation = ({ data }: SingleConversationProps) => {
  const {
    selectedConversation,
    setSelectedConversation,
    getSelectedConversation,
  } = useConversation();
  // const {getMessages} = useGetMessages();
  const isSelected = selectedConversation?._id === data._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected && "bg-sky-500"
        }`}
        onClick={() => {
          setSelectedConversation(data);

          console.log(getSelectedConversation());
          // getMessages();
        }}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={data.profilePic} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{data.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default SingleConversation;
