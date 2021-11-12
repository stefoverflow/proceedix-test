import React, { useMemo } from "react";
import styled from "styled-components";

import { Flex, Label } from "components/styles";
import TaskList from "components/TaskList";

import ThemeModel from "models/Theme";
import UserModel from "models/User";
import TaskModel from "models/Task";

import { useAppSelector } from "hooks/store";

type UserProps = {
  user: UserModel;
};

const Container = styled.div<{ theme: ThemeModel }>`
  width: calc(100% - 24px);
  margin: 40px 12px;

  border-radius: 8px;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
`;

const InformationContainer = styled(Flex)<{ theme: ThemeModel }>`
  padding: 32px;
  border-radius: 8px 8px 0 0;
  display: flex;

  background-color: ${({
    theme: {
      colors: { lightGrey },
    },
  }) => lightGrey};

  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

const TasksContainer = styled(Flex)<{ theme: ThemeModel }>`
  padding: 32px;
  border-radius: 0 0 8px 8px;

  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

const Title = styled.div<{ theme: ThemeModel }>`
  color: ${({
    theme: {
      colors: { textColor },
    },
  }) => textColor};
  font-size: ${({ theme: { titleFontSize } }) => titleFontSize};
  font-weight: bold;
`;

const Information = styled.div`
  margin-top: 20px;
`;

const NameLabel = styled(Label)`
  width: 120px;
`;

const Field = styled(Label)`
  font-weight: bold;
  color: ${({
    theme: {
      colors: { textColor },
    },
  }) => textColor};
`;

const NameField = styled(Field)`
  width: 120px;
  color: ${({
    theme: {
      colors: { textColor },
    },
  }) => textColor};
`;

const AverageScoreNotSelectedContainer = styled(Flex)<{ theme: ThemeModel }>`
  padding: 12px;
  font-size: ${({ theme: { fontSize } }) => fontSize};
  color: ${({
    theme: {
      colors: { mainBlue },
    },
  }) => mainBlue};
  text-align: center;
  border: 1px solid
    ${({
      theme: {
        colors: { mainBlue },
      },
    }) => mainBlue};
  border-radius: 8px;
  background-color: ${({
    theme: {
      colors: { mainBlue },
    },
  }) => `${mainBlue}1A`};
`;

const AverageScore = styled.div<{ theme: ThemeModel }>`
  font-size: 42px;
  font-weight: bold;

  text-align: center;

  color: ${({
    theme: {
      colors: { mainBlue },
    },
  }) => mainBlue};
`;

const AverageScoreLabel = styled.div<{ theme: ThemeModel }>`
  font-size: ${({ theme: { fontSize } }) => fontSize};
  text-align: center;

  color: ${({
    theme: {
      colors: { lightTextColor },
    },
  }) => lightTextColor};
`;

const User: React.FC<UserProps> = ({ user }) => {
  const { firstName, lastName, age, tasks } = user;
  const { selectedTasks } = useAppSelector((state) => state.usersPage);

  const averageScore = useMemo(
    () =>
      tasks.reduce((acc: number, t: TaskModel) => (acc += t.score), 0) /
      tasks.length,
    [tasks]
  );
  const showGreatMessage = useMemo(
    () => (age < 30 ? averageScore >= 4 : averageScore >= 4.33),
    [averageScore, age]
  );

  const selectedTasksForThisUser = useMemo(
    () =>
      tasks.filter((task: TaskModel) =>
        selectedTasks.find(
          (selectedTaskId: string) => selectedTaskId === task.id
        )
      ),
    [tasks, selectedTasks]
  );
  const averageOfSelectedTasks = useMemo(
    () =>
      selectedTasksForThisUser
        ? selectedTasksForThisUser.reduce(
            (acc: number, t: TaskModel) => (acc += t.score),
            0
          ) / selectedTasksForThisUser.length
        : 0,
    [selectedTasksForThisUser]
  );

  return (
    <Container>
      <InformationContainer
        styles={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          styles={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Title>Information</Title>
          <Information>
            <Flex
              styles={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <NameLabel>Name</NameLabel>
              <Label>Age</Label>
              <Label>Is great?</Label>
            </Flex>
            <Flex
              styles={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <NameField>
                {firstName} {lastName}
              </NameField>
              <Field>{age}</Field>
              <Field>{showGreatMessage && "Great!"}</Field>
            </Flex>
          </Information>
        </Flex>
        <Flex
          styles={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexBasis: "21%",
          }}
        >
          {averageOfSelectedTasks ? (
            <>
              <AverageScore>{averageOfSelectedTasks.toFixed(2)}</AverageScore>
              <AverageScoreLabel>Average of selected</AverageScoreLabel>
            </>
          ) : (
            <AverageScoreNotSelectedContainer
              styles={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Check minimum 1 task to get score.
            </AverageScoreNotSelectedContainer>
          )}
        </Flex>
      </InformationContainer>
      <TasksContainer
        styles={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Title>Tasks</Title>
        <TaskList tasks={tasks} />
      </TasksContainer>
    </Container>
  );
};

export default User;
