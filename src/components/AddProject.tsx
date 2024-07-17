import React, { useState } from "react";
import { db } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";
import { collection, addDoc } from "firebase/firestore";

interface AddProjectProps {
  shouldShow?: boolean;
}

export const AddProject: React.FC<AddProjectProps> = ({
  shouldShow = false,
}) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { projects, setProjects } = useProjectsValue();

  const addProject = async () => {
    if (projectName) {
      try {
        await addDoc(collection(db, "projects"), {
          projectId,
          name: projectName,
          userId: "jlIFXIwyAL3tzHMtzRbw",
        });
        setProjects([...projects, { projectId, name: projectName }]);
        setProjectName("");
        setShow(false);
      } catch (error) {
        console.error("Error adding project: ", error);
      }
    }
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={addProject}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setShow(false);
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShow(!show);
        }}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};
