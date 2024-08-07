"use client";

import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

const OutputSection = ({ geminiOutput }: { geminiOutput: string }) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();

    if (editorInstance) {
      editorInstance.setMarkdown(geminiOutput);
    } else {
      console.error("Editor instance not found");
    }
  }, [geminiOutput]);

  return (
    <div className="bg-zinc-900 shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        
        <Button className="flex gap-2">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your result will appear here."
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() => {
          console.log(editorRef.current?.getInstance().getMarkdown());
        }}
      />
    </div>
  );
};
export default OutputSection;
