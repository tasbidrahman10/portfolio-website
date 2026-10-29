/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stat {
  value: number;
  label: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  acronym: string;
  badges: string[];
  collaboration: string;
  abstract: string;
  highlights: string[];
  stack?: string[];
  poster?: string;
  github?: string;
}

export interface EngineeringProject {
  id: string;
  title: string;
  oneLine: string;
  longDescription: string;
  techStack: string[];
  links: { github?: string; demo?: string };
  thumbnails: string[];
}
