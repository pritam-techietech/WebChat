import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {conversations} = useGetConversations();
  const {setSelectedConversation} = useConversation();
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3){
      toast.error("Atleast 3 characters are required");
      return;
    }
    const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    } else{
      toast.error("No conversation found");
      setSearch("");
    }

  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search here"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
