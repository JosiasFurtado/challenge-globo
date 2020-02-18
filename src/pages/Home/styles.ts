import styled from "styled-components/native";

export const ButtonComp = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => (props.active ? "#000" : "#333")};
  border-radius: 50;
  elevation: 2;
  height: 55;
  justify-content: center;
  margin-top: -50;
  width: 55;
  margin-left: 10;
  margin-right: 10;
`;
