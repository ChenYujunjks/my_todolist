import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedProjectContextType {
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}

const SelectedProjectContext = createContext<
  SelectedProjectContextType | undefined
>(undefined);

export const SelectedProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => {
  const context = useContext(SelectedProjectContext);
  if (!context) {
    throw new Error(
      "useSelectedProjectValue must be used within a SelectedProjectProvider"
    );
  }
  return context;
};
