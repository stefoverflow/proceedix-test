import React, { useMemo } from "react";
import styled from "styled-components";

import { Flex } from "components/styles";
import TaskList from "components/TaskList";

import ThemeModel from "models/Theme";
import UserModel from "models/User";
import TaskModel from "models/Task";

type UserProps = {
  user: UserModel;
};

const UserContainer = styled.div<{ theme: ThemeModel }>`
  width: 100%;
  margin: 20px 0;

  border: 1px solid
    ${({
      theme: {
        colors: { mainBlack },
      },
    }) => mainBlack};
  border-radius: 8px;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
`;

const UserRow = styled(Flex)<{ theme: ThemeModel }>`
  width: 100%;
  border-bottom: 1px solid
    ${({
      theme: {
        colors: { mainBlack },
      },
    }) => mainBlack};
`;

const UserHeader = styled.div<{ theme: ThemeModel }>`
  width: 100px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 8px;

  font-weight: bold;

  border-right: 1px solid
    ${({
      theme: {
        colors: { mainBlack },
      },
    }) => mainBlack};
`;

const UserField = styled(UserHeader)`
  font-weight: normal;
  border: 0;
`;

const TasksTitle = styled.div`
  margin: 0;
  padding: 8px;

  font-weight: bold;
`;

const User: React.FC<UserProps> = ({ user }) => {
  const { firstName, lastName, age, tasks } = user;
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

  return (
    <UserContainer>
      <Flex
        styles={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <UserRow
          styles={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <UserHeader>First Name</UserHeader>
          <UserField>{firstName}</UserField>
        </UserRow>
        <UserRow
          styles={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <UserHeader>Last Name</UserHeader>
          <UserField>{lastName}</UserField>
        </UserRow>
        <UserRow
          styles={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <UserHeader>Age</UserHeader>
          <UserField>{age}</UserField>
        </UserRow>
        <UserRow
          styles={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <UserHeader>Is great?</UserHeader>
          {showGreatMessage && <UserField>Great!</UserField>}
        </UserRow>
        <TasksTitle>Tasks </TasksTitle>
        <TaskList tasks={tasks} />
      </Flex>
    </UserContainer>
  );
};

export default User;
