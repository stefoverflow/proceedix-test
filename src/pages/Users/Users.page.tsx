import React, { useEffect } from "react";

import { Error, LayoutWrapper } from "components/styles";
import UserList from "components/UserList";
import { initiateFetchUsers } from "store/reducers/users";
import { useAppSelector, useAppDispatch } from "hooks/store";

function App() {
  const dispatch = useAppDispatch();
  const { users, fetchInProgress, fetchError } = useAppSelector(
    (state) => state.usersPage
  );

  useEffect(() => {
    dispatch({ type: initiateFetchUsers });
  }, [dispatch]);

  return (
    <LayoutWrapper>
      {fetchInProgress ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <Error>{fetchError}</Error>
      ) : (
        <UserList users={users} />
      )}
    </LayoutWrapper>
  );
}

export default App;
