import React from "react";

export default function TimelineElementHeader({
  role,
  dates,
}: {
  role: string;
  dates: string;
}) {
  return (
    <h3 className="font-semibold capitalize text-sm text-(--text-green-color) dark:text-(--text-green-color-dark) bg-gray-600 p-2 mb-2">
      {role}
      <div className="mt-1 text-gray-300 font-semibold text-xs">{dates}</div>
    </h3>
  );
}
