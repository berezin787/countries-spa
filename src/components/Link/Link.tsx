import { ElementType, FC } from 'react';
import { NavLink as ReactRouterLink, NavLinkProps } from 'react-router-dom';
import { chakra, Link as ChakraLink } from '@chakra-ui/react';

export type IChakraLink = NavLinkProps & (ElementType & 'a') | undefined;
const LinkComponent = (props) => <ChakraLink as={ReactRouterLink as IChakraLink} { ...props } />;

const ChakraLinkComponent: FC = chakra(LinkComponent, {
  baseStyle: {},
});

export const Link: FC<NavLinkProps> = (props) => {
  return (<ChakraLinkComponent { ...props } />);
};
