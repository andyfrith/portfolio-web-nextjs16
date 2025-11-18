import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ProjectType } from "@/data/data";
import Projects from "./elements/projects";

export default function TimelineElementProjects({
  projects,
}: {
  projects: Array<ProjectType>;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs text-gray-600 font-semibold hover:text-neon-green-500">
        Initiatives & Products ...
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Projects projects={projects} />
      </CollapsibleContent>
    </Collapsible>
  );
}
