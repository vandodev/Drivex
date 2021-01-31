import styled from 'styled-components/native';
import theme from './theme.json';

export const Container = styled.View`
  flex: 1;
  background: ${(props) =>
    props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'center'};
  padding: ${(props) => props.padding || 0}px;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;
