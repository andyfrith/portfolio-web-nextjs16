import React from "react";
import Item from "@/components/timeline/item";
import { ExperienceType } from "@/data/data";

export default function TimelineFragment({ item }: { item: ExperienceType }) {
  return (
    <React.Fragment key={item.id}>
      <Item item={item} />
    </React.Fragment>
  );
}
