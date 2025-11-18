import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Skills from "@/components/skills";

export default function TimelineElementSkills({
  skills,
}: {
  skills: Array<string>;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold hover:text-neon-green-500 text-gray-600">
        Technologies & Skills ...
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Skills skills={skills} />
      </CollapsibleContent>
    </Collapsible>
  );
}
