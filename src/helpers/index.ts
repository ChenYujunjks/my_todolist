import { collatedTasks, CollatedTask } from "../constants";
import { Project } from "../hooks";

export const getTitle = (projects: Project[], projectId: string) =>
  projects.find((project) => project.projectId === projectId);

export const getCollatedTitle = (tasks: CollatedTask[], key: string) =>
  tasks.find((project) => project.key === key);

export const collatedTasksExist = (
  selectedProject: string
): CollatedTask | undefined =>
  collatedTasks.find((task) => task.key === selectedProject);

export const generatePushId = (() => {
  const PUSH_CHARS =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

  const lastRandChars: number[] = [];

  return function () {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (let i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join("");

    for (let i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
