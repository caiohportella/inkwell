"use client";

import Templates from "@/app/(data)/Templates";
import { TemplateType } from "@/lib/types";
import TemplateCard from "./TemplateCard";
import { useDebounce } from "@/lib/useDebouce";
import { useEffect, useState } from "react";

const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(Templates);
  const debouncedSearchInput = useDebounce(searchInput, 500);

  const filterTemplates = (input: string) => {
    setTemplateList(
      input
        ? Templates.filter((item: TemplateType) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )
        : Templates
    );
  };

  useEffect(() => {
    filterTemplates(debouncedSearchInput);
  }, [debouncedSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TemplateType, i: number) => (
        <div key={item.slug}>
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
};
export default TemplateList;
