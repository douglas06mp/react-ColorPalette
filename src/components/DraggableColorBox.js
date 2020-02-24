import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';

const styles = {
  box: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    margin: '0 auto -3.5px',
    position: 'relative',
    cursor: 'pointer',

    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.3)'
    }
  },
  content: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '700',
    color: 'rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteIcon: {
    transition: 'all .4s ease-in-out'
  }
};

function DraggableColorBox(props) {
  const { color, name } = props;
  const { box, content, deleteIcon } = props.classes;
  return (
    <div className={box} style={{ backgroundColor: color }}>
      <div className={content}>
        <span>{name}</span>
        <DeleteIcon className={deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
