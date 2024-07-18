import React, { createContext, useContext, ReactNode } from "react";
import { useProjects } from "../hooks";

interface ProjectsContextProps {
  projects: any[]; // Replace `any` with the actual type of your projects
  setProjects: React.Dispatch<React.SetStateAction<any[]>>; // Replace `any` with the actual type of your projects
}

export const ProjectsContext = createContext<ProjectsContextProps | undefined>(
  undefined
);

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjectsValue must be used within a ProjectsProvider");
  }
  return context;
};
