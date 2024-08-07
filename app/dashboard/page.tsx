"use client";

import SearchSection from "@/components/SearchSection";
import TemplateList from "@/components/TemplateList";
import { useState } from "react";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div>
      <SearchSection onSearchInput={setSearchInput} />
      <TemplateList searchInput={searchInput} />
    </div>
  );
};
export default Dashboard;
