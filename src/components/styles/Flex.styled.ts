import styled from "styled-components";

interface flexOptions {
  flexDirection: "row" | "column";
  justifyContent: "center" | "space-between" | "flex-start" | "flex-end";
  alignItems?: "center" | "space-between" | "flex-start" | "flex-end";
  flexBasis?: string;
  width?: string;
  maxWidth?: string;
}

const Flex = styled.div<{ styles: flexOptions }>`
  width: ${({ styles: { width } }) => (width ? width : "100%")};
  max-width: ${({ styles: { maxWidth } }) => (maxWidth ? maxWidth : "100%")};

  display: flex;
  flex-direction: ${({ styles: { flexDirection } }) => flexDirection};
  flex-basis: ${({ styles: { flexBasis } }) =>
    flexBasis ? flexBasis : "100%"};
  align-items: ${({ styles: { alignItems } }) =>
    alignItems ? alignItems : "flex-start"};
  justify-content: ${({ styles: { justifyContent } }) => justifyContent};
`;

export default Flex;
