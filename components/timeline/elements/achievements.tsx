"use client";

import React from "react";
import { ResultType } from "@/data/data";
import Achievement from "./achievement";

export default function Achievements({
  achievements,
}: {
  achievements: Array<ResultType>;
}) {
  return (
    <div id="success">
      <div className="text-sm text-gray-500 font-(family-name:--font-metrophobic)">
        {achievements.map((achievement) => (
          <Achievement key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
