"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineFragment from "./timeline-fragment";
import { ExperienceType } from "@/data/data";

function Timeline({ data }: { data: Array<ExperienceType> }) {
  return (
    <>
      <VerticalTimeline
        className="vertical-timeline-component w-full! mt-4!"
        layout="1-column-left"
        lineColor="grey"
      >
        {data.map((item) => (
          <TimelineFragment key={item.id} item={item} />
        ))}
      </VerticalTimeline>
    </>
  );
}

export { Timeline };
