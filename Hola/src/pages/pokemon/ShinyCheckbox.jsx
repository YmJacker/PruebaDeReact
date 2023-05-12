import React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';

const StyledCheckbox = styled(Checkbox)({
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: 'gold',
  },
});

const ShinyCheckbox = (props) => {
  return (
    <StyledCheckbox
      {...props}
      icon={<StarIcon />}
      checkedIcon={<StarIcon />}
    />
  );
};

export default ShinyCheckbox;