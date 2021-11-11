import React from "react";
import styled from "styled-components";

import { Flex } from "components/styles";

import ThemeModel from "models/Theme";
import TaskModel from "models/Task";

const TaskContainer = styled(Flex)<{ theme: ThemeModel }>`
  max-width: calc(100% - 24px);
  margin: 12px;

  border: 1px solid
    ${({
      theme: {
        colors: { lightGrey },
      },
    }) => lightGrey};
  border-radius: 8px;
`;

const TaskRow = styled(Flex)<{ theme: ThemeModel }>`
  width: 100%;
  border-bottom: 1px solid
    ${({
      theme: {
        colors: { lightGrey },
      },
    }) => lightGrey};

  :last-child {
    border: none;
  }
`;

const TaskHeader = styled.div`
  padding: 8px;

  font-weight: bold;
`;

const TaskField = styled(TaskHeader)<{ theme: ThemeModel }>`
  border-left: 1px solid
    ${({
      theme: {
        colors: { lightGrey },
      },
    }) => lightGrey};

  font-weight: normal;
`;

type TaskProps = {
  task: TaskModel;
  index: number;
  onSelect: any;
};

const Task: React.FC<TaskProps> = ({ task, index, onSelect }) => {
  const { id, title, description, score, selected } = task;

  return (
    <TaskContainer
      styles={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <TaskRow styles={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <TaskHeader>{index}</TaskHeader>
      </TaskRow>
      <TaskRow styles={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <TaskHeader>Title</TaskHeader>
        <TaskField>{title}</TaskField>
      </TaskRow>
      <TaskRow styles={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <TaskHeader>Description</TaskHeader>
        <TaskField>{description}</TaskField>
      </TaskRow>
      <TaskRow styles={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <TaskHeader>Score</TaskHeader>
        <TaskField>{score}</TaskField>
      </TaskRow>
      <TaskRow styles={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <TaskHeader>Select</TaskHeader>
        <TaskField>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => onSelect(id)}
          />
        </TaskField>
      </TaskRow>
    </TaskContainer>
  );
};

export default Task;
