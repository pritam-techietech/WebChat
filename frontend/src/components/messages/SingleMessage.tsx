import { useUserContext } from "../../context/UserContext";
import { MessageModel } from "../../models/MessageModel";
import { UserModel } from "../../models/UserModel";
import { formatDate } from "../../utils/formatDate";
interface SingleMessageProps{
  data : MessageModel;
}
const SingleMessage = ({data}: SingleMessageProps) => {
  const {user} = useUserContext();
  const userData:UserModel = (user!);
  const userId = userData._id;
  const ifUserSent = data.senderId === userId;
  return (
    <div>
      <div className={`chat ${ifUserSent ? "chat-end" : "chat-start"}`}>
        <div className={`chat-bubble ${ifUserSent ? "chat-bubble-success" : "chat-bubble-info"}`}>
          {data.message}
        </div>
        <div className="chat-footer text-white opacity-80 text-xs"><time>{formatDate(data.createdAt)}</time></div>
      </div>
    </div>
  );
};

export default SingleMessage;
