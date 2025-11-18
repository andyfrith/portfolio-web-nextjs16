import { optii } from "./data-optii";
import { avero } from "./data-avero";
import { blueSpruce } from "./data-blue-spruce";
import { darkOwl } from "./data-dark-owl";
import { isobar } from "./data-isobar";
import { turngate } from "./data-turngate";

export type ActionType = {
  id: number;
  name?: string;
  summary: string;
  skills?: Array<string>;
};

export type ChallengeType = {
  id: number;
  name?: string;
  summary: string;
};

export type CompanyType = {
  name: string;
  city: string;
  state: string;
  summary: string;
  industries: Array<IndustryType>;
  size: string;
};

export type ExperienceType = {
  id: number;
  company: CompanyType;
  role: string;
  dates: string;
  summary: string;
  results: Array<ResultType>;
  skills: Array<string>;
  projects?: Array<ProjectType>;
};

export type IndustryType = {
  id: number;
  summary: string;
};

export type ProjectType = {
  id: number;
  name: string;
  summary: string;
  actions?: Array<ActionType>;
  challenges?: Array<ChallengeType>;
  timeline?: TimelineType;
  skills?: Array<string>;
  results?: Array<ResultType>;
};

export type ResultType = {
  id: number;
  summary: string;
};

export type TimelineType = {
  id: number;
  summary: string;
};

export type SectionName = string;

export const experiencesData: Array<ExperienceType> = [
  { ...turngate },
  { ...optii },
  { ...avero },
  { ...blueSpruce },
  { ...darkOwl },
  { ...isobar },
] as const;
