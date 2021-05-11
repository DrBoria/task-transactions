import styled from 'styled-components';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

export const ArrowDownIcon = styled(FiArrowDown)`
  color: ${({ theme }) => theme.colors.redMedium};
`;

export const ArrowDropDownIcon = styled(FiArrowDown)`
  color: ${({ theme }) => theme.colors.greenMedium};
`;

export const ArrowUpIcon = styled(FiArrowUp)`
  color: ${({ theme }) => theme.colors.greenMedium};
`;
