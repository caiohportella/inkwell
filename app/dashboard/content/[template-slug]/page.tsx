"use client";

import Templates from "@/app/(data)/Templates";
import FormSection from "@/components/FormSection";
import OutputSection from "@/components/OutputSection";
import { Button } from "@/components/ui/button";
import { TemplateType } from "@/lib/types";
import { chatSession } from "@/lib/utils/gemini";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  params: {
    "template-slug": string;
  };
}

const CreateUserContent = (props: Props) => {
  const selectedTemplate: TemplateType | undefined = Templates.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [geminiOutput, setGeminiOutput] = useState<string>("");

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);

    const selectedPrompt = selectedTemplate?.aiPrompt;

    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    const res = await chatSession.sendMessage(finalAIPrompt);

    console.log(res.response.text());

    setGeminiOutput(res.response.text());

    setLoading(false);
  };

  return (
    <div className="p-8">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />

        <OutputSection geminiOutput={geminiOutput} />
      </div>
    </div>
  );
};
export default CreateUserContent;
