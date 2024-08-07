import { Search } from "lucide-react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-2xl">
        <Search />
        <Input type="text" placeholder="Search..." className="outline-none" />
      </div>

      <div className="bg-logoPurple p-1 rounded-full text-xs text-white px-2">
        <h2>Join Membership for just $9.99/month</h2>
      </div>
    </div>
  );
};
export default Header;
