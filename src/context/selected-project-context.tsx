import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedProjectContextProps {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedProjectContext = createContext<
  //return a Context object
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
  //获取SelectedProjectContext的值，并确保该Hook只能在SelectedProjectProvider中使用。
  const context = useContext(SelectedProjectContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedProjectValue must be used within a SelectedProjectProvider"
    );
  }
  return context;
};
