import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Task } from "../utils";

interface Props {
  tasks: Task[];
}

const Main: React.FC<Props> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [objOnWindow, setWindowObj] = useState<Task | undefined>();

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    let element = evt.currentTarget as HTMLDivElement;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragEnter = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    let element = evt.currentTarget as HTMLDivElement;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
    let currentTarget = evt.currentTarget as HTMLDivElement;
    let newTarget = evt.relatedTarget as HTMLDivElement;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget as HTMLDivElement;
    element.classList.remove("dragged-over");
  };

  const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = (
    evt: React.DragEvent<HTMLDivElement>,
    value: boolean,
    status: string
  ) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let updatedTasks = taskList.find(
      (task) => task.id.toString() === data.toString()
    );
    setWindowObj(updatedTasks);
  };


  let pending: Task[] = tasks.filter((data) => data.status === "In Progress");

  return (
    <div>
      <Dashboard
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragOver={onDragOver}
        objOnWindow={objOnWindow}
        pending={pending}
      />
    </div>
  );
};

export default Main;
