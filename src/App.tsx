import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import "./Appnn.scss";

interface AppProps {
  darkModeDefault?: boolean;
}

const App = ({ darkModeDefault = false }: AppProps) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
