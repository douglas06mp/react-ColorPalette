import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/DraggableColorBoxStyle';

const DraggableColorBox = SortableElement(props => {
  const { color, name, deleteColor } = props;
  const { box, content, deleteIcon } = props.classes;
  return (
    <div className={box} style={{ backgroundColor: color }}>
      <div className={content}>
        <span>{name}</span>
        <DeleteIcon className={deleteIcon} onClick={deleteColor} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
