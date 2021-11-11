import React, { useMemo } from "react";
import styled from "styled-components";

import Task from "components/Task";
import { Flex } from "components/styles";

import ThemeModel from "models/Theme";
import TaskModel from "models/Task";

import { useAppDispatch } from "hooks/store";
import { initiateToggleSelectTask } from "store/reducers/users";

const AverageSelectedTasks = styled.div<{ theme: ThemeModel }>`
  padding: 8px;

  color: ${({
    theme: {
      colors: { mainBlue },
    },
  }) => mainBlue};
  font-weight: bold;
`;

type TaskListProps = {
  tasks: TaskModel[];
};

// type AccType = {
//   sum: number;
//   count: number;
// };

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  // ========== TODO: ref sum and number calculations into one reduce function (accumultor should be object of sum and count) ==========

  // const sumOfSelectedTasks = useMemo(
  //   () =>
  //     tasks.reduce(
  //       (acc: AccType, t: TaskModel) => {
  //         // (t.selected ?
  //         //   {
  //         //     acc.sum += t.score;
  //         //     return acc;
  //         //   } : acc
  //       },
  //       { sum: 0, count: 0 }
  //     ),
  //   [tasks]
  // );
  const sumOfSelectedTasks = useMemo(
    () =>
      tasks.reduce(
        (acc: number, t: TaskModel) => (t.selected ? (acc += t.score) : acc),
        0
      ),
    [tasks]
  );

  const numberOfSelectedTasks = useMemo(
    () =>
      tasks.reduce(
        (acc: number, t: TaskModel) => (t.selected ? (acc += 1) : acc),
        0
      ),
    [tasks]
  );

  const onSelect = (id: string) =>
    dispatch({ type: initiateToggleSelectTask, payload: { id } });

  const averageOfSelectedTasks = useMemo(
    () => (sumOfSelectedTasks ? sumOfSelectedTasks / numberOfSelectedTasks : 0),
    [sumOfSelectedTasks, numberOfSelectedTasks]
  );

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
      {averageOfSelectedTasks > 0 && (
        <AverageSelectedTasks>
          Average of selected: {averageOfSelectedTasks.toFixed(2)}
        </AverageSelectedTasks>
      )}
    </Flex>
  );
};

export default TaskList;
