import styled from "styled-components";

import ThemeModel from "models/Theme";

const LayoutWrapper = styled.div<{ theme: ThemeModel }>`
  background-color: ${({
    theme: {
      colors: { darkGrey },
    },
  }) => darkGrey};

  min-height: 100vh;

  padding: 50px 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default LayoutWrapper;
