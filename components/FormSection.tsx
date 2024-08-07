"use client";

import { SelectedTemplate } from "@/lib/types";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

const FormSection = ({
  selectedTemplate,
  userFormInput,
  loading,
}: SelectedTemplate) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-zinc-900/80">
      <Image
        src={selectedTemplate?.icon ?? "/logo.png"}
        alt={selectedTemplate?.name ?? "logo"}
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 mt-5 text-logoPurple">
        {selectedTemplate?.name}
      </h2>
      <p className="text-white text-sm">{selectedTemplate?.description}</p>

      <form className="mt-6" onSubmit={handleSubmit}>
        {selectedTemplate?.form?.map((item, i) => (
          <div key={i} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}

        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading ? <Loader2Icon className="animate-spin" /> : "Generate Content"}
        </Button>
      </form>
    </div>
  );
};
export default FormSection;
