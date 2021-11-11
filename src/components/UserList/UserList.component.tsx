import React from "react";

import UserModel from "models/User";
import { Flex } from "components/styles";
import User from "components/User";

type UserListProps = {
  users: UserModel[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Flex
      styles={{
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "900px",
        width: "calc(100% - 24px)",
      }}
    >
      <Flex styles={{ flexDirection: "column", justifyContent: "center" }}>
        {users.map((u) => (
          <User user={u} key={u.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default UserList;
