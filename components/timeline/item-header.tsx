import React from "react";

export default function TimelineElementHeader({ role }: { role: string }) {
  return (
    <h3 className="font-semibold capitalize text-sm text-(--text-green-color) dark:text-(--text-green-color-dark) bg-gray-600 p-2 mb-2">
      {role}
    </h3>
  );
}
