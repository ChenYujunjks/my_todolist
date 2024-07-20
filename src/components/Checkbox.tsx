import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

interface CheckboxProps {
  id: string;
  taskDesc: string;
}

export const Checkbox = ({ id, taskDesc }: CheckboxProps) => {
  const archiveTask = async () => {
    const taskDoc = doc(db, "task", id);
    await updateDoc(taskDoc, {
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={archiveTask}
      onKeyDown={(e) => {
        if (e.key === "Enter") archiveTask();
      }}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};
