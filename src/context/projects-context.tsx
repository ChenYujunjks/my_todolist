import React, { createContext, useContext, ReactNode } from "react";
import { useProjects, Project } from "../hooks";

interface ProjectsContextProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
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

//获取ProjectContext的值，并确保该Hook只能在ProjectProvider中使用。
export const useProjectsValue = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjectsValue must be used within a ProjectsProvider");
  }
  return context;
};
