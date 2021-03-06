import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DraggableColorBox from './DraggableColorBox';
import styles from '../styles/DraggableColorListStyle';

const DraggableColorList = SortableContainer(
  ({ colors, deleteColor, classes }) => {
    return (
      <div className={classes.colorBoxes}>
        {colors.map((color, idx) => (
          <DraggableColorBox
            index={idx}
            key={color.name}
            color={color.color}
            name={color.name}
            deleteColor={() => deleteColor(color.name)}
          />
        ))}
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorList);
