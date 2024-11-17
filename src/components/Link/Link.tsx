import { ElementType, FC, ReactNode } from 'react';
import { LinkProps, NavLink as ReactRouterLink } from 'react-router-dom';
import { chakra, Link as ChakraLink } from '@chakra-ui/react';

type Props = Pick<LinkProps, 'to' | 'children'>;
type IChakraLink = LinkProps & (ElementType & 'a') | undefined;
const LinkComponent = (props: Props): ReactNode => <ChakraLink
  as={ReactRouterLink as unknown as IChakraLink}
  to={props.to}>
  {props.children}
</ChakraLink>;

const ChakraLinkComponent: FC<Props> = chakra(LinkComponent, {
  baseStyle: {},
}) as FC;

export const Link: FC<LinkProps> = (props: Props) => <ChakraLinkComponent to={props.to} children={props.children} />;
