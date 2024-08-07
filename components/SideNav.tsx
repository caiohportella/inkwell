"use client";

import { menuList } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const path = usePathname();

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>

      <div className="mt-10">
        {menuList.map((item, i) => (
          <div
            key={i}
            className={`flex gap-2 mb-2 p-3 hover:bg-logoPurple hover:text-white rounded-xl cursor-pointer items-center ${
              path === item.path ? "bg-logoPurple/80 text-white" : ""
            }`}
          >
            <item.icon className="h-6 w-6" />
            <h2 className="text-lg">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideNav;
