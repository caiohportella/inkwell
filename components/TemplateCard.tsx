import { TemplateType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: TemplateType) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className="p-5 shadow-md rounded-md border bg-zinc-500 flex flex-col h-full justify-between cursor-pointer hover:scale-105 transition-all">
        <div>
          <Image src={item.icon} alt={item.name} width={50} height={50} />
          <h2 className="font-medium text-lg">{item.name}</h2>
        </div>
        <p className="text-white line-clamp-3">{item.description}</p>
      </div>
    </Link>
  );
};
export default TemplateCard;
