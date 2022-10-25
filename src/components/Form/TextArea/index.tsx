import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { withOffsetBottom, withOffsetsRight, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TTextAreaProps = {
  name: string;
  onChagne?: ChangeEventHandler<HTMLTextAreaElement>;
  id?: string;
  type?: string;
} & TWithBasicElementOffsets &
  TFullWidth;

const TextArea = styled.textarea<TTextAreaProps>`
  display: block;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  height: ${({ theme }) => `calc(${theme.elements.form.height} * 2)`};
  margin-right: ${withOffsetsRight};
  margin-bottom: ${withOffsetBottom};
  padding: ${({ theme }) => theme.offsets.elementContent};

  color: ${({ theme }) => theme.colors.sectionContent};
  font: ${basicFont};

  background: ${({ theme }) => theme.colors.overlay};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export { TextArea };
TextArea;
