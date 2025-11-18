"use client";

import React from "react";
import { ProjectType } from "@/data/data";
import { Star } from "lucide-react";

export default function Project({ project }: { project: ProjectType }) {
  const hasActions = project.actions;
  const hasChallenges = project.challenges?.[0]?.summary;
  const hasResults = project.results;
  const hasSkills = project.skills;
  const showHeaders = hasActions && (hasChallenges || hasResults);

  return (
    <>
      {hasSkills && (
        <div className="flex flex-wrap justify-left gap-1 mb-1">
          {project.skills?.map((skill) => (
            <div
              key={skill}
              className="bg-gray-500 text-[#39FF14] p-1 text-[9px]"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
      <div className="text-gray-500 mb-1 text-sm  font-(family-name:--font-metrophobic)">
        {project.summary || "[Summary]"}
      </div>
      {hasChallenges && (
        <>
          <div className="text-gray-800 font-bold mb-0 mt-2 text-[10px] uppercase  font-(family-name:--font-metrophobic)">
            Challenge
          </div>
          <div className="text-gray-500 mb-1 mt-0 text-sm  font-(family-name:--font-metrophobic)">
            {project.challenges?.[0]?.summary}
          </div>
        </>
      )}

      {hasActions && (
        <>
          {showHeaders && (
            <div className="text-gray-800 font-bold mb-0 mt-2 text-[10px] uppercase  font-(family-name:--font-metrophobic)">
              Actions
            </div>
          )}
          <div className="text-sm">
            {project.actions?.map((action) => (
              <div
                key={action.id}
                className="flex items-baseline text-gray-500 text-sm  font-(family-name:--font-metrophobic)"
              >
                <div className="mr-1">
                  <Star size={10} strokeWidth={0} fill="#6b7280" />
                </div>
                <div>{action.summary}</div>
              </div>
            ))}
          </div>
        </>
      )}
      {hasResults && (
        <div className="text-gray-800 font-bold mb-0 mt-2 text-[10px] uppercase  font-(family-name:--font-metrophobic)">
          [Results]
        </div>
      )}
    </>
  );
}
