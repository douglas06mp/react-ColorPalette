import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  box: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    margin: '0 auto -3.5px',
    position: 'relative'
  }
};

function DraggableColorBox(props) {
  const { color, name } = props;
  const { box } = props.classes;
  return (
    <div className={box} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
