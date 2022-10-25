import { PlainText } from 'components/Typography';
import { StyledTextCell } from './styles';

type TBoldTextCellProps = {
  text: any;
  align?: 'center' | 'left' | 'right';
};

const BoldTextCell = ({ text, align = 'left', ...props }: TBoldTextCellProps) => {
  return (
    <StyledTextCell align={align} {...props}>
      <b>
        <PlainText>{text}</PlainText>
      </b>
    </StyledTextCell>
  );
};

export default BoldTextCell;
