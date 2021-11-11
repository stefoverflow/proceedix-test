import styled from "styled-components";
import ThemeModel from "models/Theme";

const Label = styled.div<{ theme: ThemeModel }>`
  font-size: ${({ theme: { fontSize } }) => fontSize};
  width: 56px;
  margin-bottom: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({
    theme: {
      colors: { lightTextColor },
    },
  }) => lightTextColor};
`;

export default Label;
