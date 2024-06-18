import { create } from "zustand";
import { UserModel } from "../models/UserModel";
import { MessageModel } from "../models/MessageModel";

interface store {
    selectedConversation : UserModel | null;
    setSelectedConversation : (selectedConversation: UserModel | null) => void;
    getSelectedConversation : () => UserModel | null;
    messages : MessageModel[];
    setMessages : (messages: MessageModel[]) => void;
    getMessages : () => MessageModel[];
}

const useConversation = create<store>((set, get)=>({
    selectedConversation : null,
    setSelectedConversation : (selectedConversation) => set({selectedConversation}),
    getSelectedConversation : () => {return get().selectedConversation},
    messages : [],
    setMessages : (messages) => set({messages}),
    getMessages : () => get().messages,
}));

export default useConversation;