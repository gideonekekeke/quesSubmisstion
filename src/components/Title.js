import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  return (
  <Typography style = {{background : '#BDBDBD', margin : '10px', color : 'black', padding : '10px'}}   component="h2" variant="h6" color="white" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;