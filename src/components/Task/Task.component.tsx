import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

import { Flex, Label } from "components/styles";

import ThemeModel from "models/Theme";
import TaskModel from "models/Task";

const TaskContainer = styled(Flex)<{ theme: ThemeModel }>`
  margin: 12px 0;
  padding: 20px;

  font-size: ${({ theme: { fontSize } }) => fontSize};
  color: ${({
    theme: {
      colors: { textColor },
    },
  }) => textColor};

  background-color: ${({
    theme: {
      colors: { lightGrey },
    },
  }) => lightGrey};
  border-radius: 8px;
`;

const Checkbox = styled.div`
  margin-right: 8px;
`;

const Field = styled(Label)<{ theme: ThemeModel }>`
  font-weight: bold;
  width: 100%;
  color: ${({
    theme: {
      colors: { textColor },
    },
  }) => textColor};
`;

const ToggleButton = styled.button<{ theme: ThemeModel }>`
  border: 0;
  cursor: pointer;
  color: ${({
    theme: {
      colors: { mainBlue },
    },
  }) => mainBlue};
  font-size: 16px;
  background-color: transparent;
`;

const TaskDescriptionContainer = styled(Flex)`
  padding-top: 20px;
`;

const DescriptionLabel = styled(Label)`
  width: 80px;
`;

const DescriptionText = styled.div<{ theme: ThemeModel }>`
  width: 100%;
  color: ${({
    theme: {
      colors: { textColor },
    },
  }) => textColor};
`;

type TaskProps = {
  task: TaskModel;
  index: number;
  onSelect: (id: string) => void;
};

const Task: React.FC<TaskProps> = ({ task, index, onSelect }) => {
  const { id, title, description, score, selected } = task;
  const [showMore, setShowMore] = useState(false);

  return (
    <TaskContainer
      styles={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <Flex styles={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Flex styles={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Checkbox>
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onSelect(id)}
            />
          </Checkbox>
          <Field>
            {index + 1}. {title}
          </Field>
        </Flex>
        <ToggleButton onClick={() => setShowMore(!showMore)}>
          {!showMore ? <ChevronDown /> : <ChevronUp />}
        </ToggleButton>
      </Flex>
      {showMore && (
        <TaskDescriptionContainer
          styles={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <Flex
            styles={{
              flexDirection: "column",
              justifyContent: "flex-start",
              flexBasis: "10%",
            }}
          >
            <Label>Score</Label>
            <Field>{score}</Field>
          </Flex>
          <Flex
            styles={{ flexDirection: "column", justifyContent: "flex-start" }}
          >
            <DescriptionLabel>Description</DescriptionLabel>
            <DescriptionText>{description}</DescriptionText>
          </Flex>
        </TaskDescriptionContainer>
      )}
    </TaskContainer>
  );
};

export default Task;
