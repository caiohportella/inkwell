import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/lib/useDebouce";

const SearchSection = ({ onSearchInput }: { onSearchInput: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    onSearchInput(debouncedInputValue);
  }, [debouncedInputValue, onSearchInput]);

  return (
    <div className="p-10 bg-gradient-to-bl from-logoPurple via-logoPurple/50 to-logoPink flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Browse all templates</h2>
      <p>What would you like to create today?</p>

      <div className="relative my-5 mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="text-logoPurple w-5 h-5" />
        </div>
        <Input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 rounded-xl bg-zinc-200 text-logoPurple focus:outline-none focus:ring-2 focus:ring-logoPink"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};
export default SearchSection;
