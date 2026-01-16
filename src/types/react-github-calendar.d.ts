declare module "react-github-calendar";

import { TechIcons } from "@/components/TechIcons";

type Technology = {
  name: string;
  url: string;
  iconKey: keyof typeof TechIcons;
  icon: string;
};

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  github:string;
  live:string
};
