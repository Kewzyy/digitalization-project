import * as React from 'react'
import { styles } from './styles'
import { FoodMenuPagePropsType } from './types'
import { IMeal } from './types'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export const FoodMenuPage: React.FC<FoodMenuPagePropsType> = props => {
  const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
  }));

  const classes = useStyles();

  let jsonObj: any = JSON.parse(props.meals);
  let propMeals: IMeal[] = jsonObj;

  console.log("props meals: ", props.meals);
  //TODO: assign props.meals to meals properly
  let meals: IMeal[];
  meals = [];
  if(props.meals !== null && typeof props.meals !== 'undefined'){
    meals = props.meals;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Text can be inserted here</ListSubheader>
        </GridListTile>
        {meals.map((tile) => (
          <GridListTile>
            <GridListTileBar title={tile!.name} subtitle={<span>type: {tile.type}</span>} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}



