import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedProjectContextProps {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedProjectContext = createContext<
  SelectedProjectContextProps | undefined
>(undefined);

interface SelectedProjectProviderProps {
  children: ReactNode;
}

export const SelectedProjectProvider = ({
  children,
}: SelectedProjectProviderProps) => {
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
  if (context === undefined) {
    throw new Error(
      "useSelectedProjectValue must be used within a SelectedProjectProvider"
    );
  }
  return context;
};
