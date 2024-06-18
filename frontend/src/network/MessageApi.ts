import { SendMessageInterface } from "../interfaces/SendMessageInterface";
import { MessageModel } from "../models/MessageModel";
import { fetchData } from "./UsersApi";

export async function sendMessage(
  credentials: SendMessageInterface
): Promise<MessageModel> {
  const response = await fetchData("/api/message/send", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getMessages(credentials: {
  receiverId: string | undefined;
}): Promise<MessageModel[]> {
  if (!credentials.receiverId) {
    return [];
  }
  const response = await fetchData("/api/message", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
