import React, { createContext, useContext, ReactNode } from "react";
import { useProjects } from "../hooks";

interface ProjectsContextType {
  projects: any[]; // 替换为项目的实际类型
  setProjects: (projects: any[]) => void; // 替换为项目的实际类型
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjectsValue must be used within a ProjectsProvider");
  }
  return context;
};
