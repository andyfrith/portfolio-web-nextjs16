import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { CompanyType } from "@/data/data";
import Company from "./elements/company";

export default function ItemCompany({ company }: { company: CompanyType }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold text-gray-600 hover:text-neon-green-500">
        {company.name} • {company.city}, {company.state} ...
      </CollapsibleTrigger>
      <CollapsibleContent className="mb-2! font-normal! text-gray-500 text-sm! font-(family-name:--font-metrophobic)">
        <Company company={company} />
      </CollapsibleContent>
    </Collapsible>
  );
}
