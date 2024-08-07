export declare interface TemplateType {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: Form[];
}

export declare interface Form {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export declare interface SelectedTemplate {
  selectedTemplate?: TemplateType;
  userFormInput: (formData: any) => void;
  loading: boolean;
}