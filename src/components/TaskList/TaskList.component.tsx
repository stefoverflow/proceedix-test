import React from "react";

import Task from "components/Task";
import { Flex } from "components/styles";

import TaskModel from "models/Task";

import { useAppDispatch } from "hooks/store";
import { initiateToggleSelectTask } from "store/reducers/users";

type TaskListProps = {
  tasks: TaskModel[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  const onSelect = (id: string) =>
    dispatch({ type: initiateToggleSelectTask, payload: { id } });

  return (
    <Flex
      styles={{
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {tasks.map((t, i) => (
        <Task key={t.id} task={t} index={i} onSelect={onSelect} />
      ))}
    </Flex>
  );
};

export default TaskList;
