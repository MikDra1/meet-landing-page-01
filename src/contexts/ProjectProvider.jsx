/* eslint-disable react/prop-types */
import { useContext, useEffect, useState, createContext } from "react";
import useScreenSize from "../hooks/useScreenSize";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 600);
      setIsTablet(screenSize.width <= 1200);
    },
    [screenSize.width]
  );

  return (
    <ProjectContext.Provider
      value={{
        isMobile: isMobile ?? false,
        isTablet: isTablet ?? false,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined)
    throw new Error("ProjectContext was used outside the ProjectProvider");
  return context;
}

export { ProjectProvider, useProject };
