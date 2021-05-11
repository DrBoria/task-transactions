import MaterialAvatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import { withBasicElementOffsets, IWithBasicElementOffsets } from 'styles/helpers';

type Props = {
  size?: 'small' | 'big';
};

const sizes = {
  big: '10rem',
  small: '3rem',
};

// TODO: TFR-45:Avatar make unique name or do not export
const Avatar = styled(MaterialAvatar)<Props & IWithBasicElementOffsets>`
  && {
    height: ${({ size = 'small' }) => sizes[size]};
    width: ${({ size = 'small' }) => sizes[size]};

    ${withBasicElementOffsets}
  }
`;

export default Avatar;
