import styled from "styled-components";

interface flexOptions {
  flexDirection: "row" | "column";
  justifyContent: "center" | "space-between" | "flex-start";
  maxWidth?: string;
}

const Flex = styled.div<{ styles: flexOptions }>`
  width: 100%;
  max-width: ${({ styles: { maxWidth } }) => (maxWidth ? maxWidth : "100%")};

  display: flex;
  flex-direction: ${({ styles: { flexDirection } }) =>
    flexDirection === "row" ? "row" : "column"};
  align-items: flex-start;
  justify-content: ${({ styles: { justifyContent } }) => justifyContent};
`;

export default Flex;
