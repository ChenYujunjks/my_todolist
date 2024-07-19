/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import moment from "moment";
import { db } from "../firebase";
import { collatedTasksExist } from "../helpers";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

interface Task {
  id: string;
  projectId: string;
  date: string;
  archived: boolean;
  task: string;
}

export interface Project {
  projectId: string;
  docId?: string;
  key?: string;
  name?: string;
}

export const useTasks = (selectedProject: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [archivedTasks, setArchivedTasks] = useState<Task[]>([]);

  useEffect(() => {
    let q = query(
      collection(db, "tasks"),
      where("userId", "==", "jlIFXIwyAL3tzHMtzRbw")
    );

    if (selectedProject && !collatedTasksExist(selectedProject)) {
      q = query(q, where("projectId", "==", selectedProject));
    } else if (selectedProject === "TODAY") {
      q = query(q, where("date", "==", moment().format("DD/MM/YYYY")));
    } else if (selectedProject === "INBOX" || selectedProject === "0") {
      q = query(q, where("date", "==", ""));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      })) as Task[];

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "projects"),
      where("userId", "==", "jlIFXIwyAL3tzHMtzRbw"),
      orderBy("projectId")
    );

    getDocs(q).then((snapshot) => {
      const allProjects = snapshot.docs.map((project) => ({
        ...project.data(),
        docId: project.id,
      })) as Project[];

      if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
        setProjects(allProjects);
      }
    });
  }, [projects]);

  return { projects, setProjects };
};
