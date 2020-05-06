import * as React from 'react'
import { styles } from './styles'
import { css } from 'aphrodite'
import { FoodMenuPagePropsType } from './types'
import { meal } from './types'
import { AlertDialog } from 'src/components/core/simple-dialog'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

export const FoodMenuPage: React.FC<FoodMenuPagePropsType> = props => {

  let propMeals: meal[];
  if(props.meals !== null && typeof props.meals !== 'undefined'){
    propMeals = props.meals;
  } else {
    propMeals = [];
  }

  console.log("props meals: ", propMeals);

  return (
    <div className={css(styles.root)}>
      <GridList cellHeight={250} className={css(styles.gridList)}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Menu</ListSubheader>
        </GridListTile>
        {propMeals!.map((meal) => (
          <GridListTile key={meal._id} className={css(styles.tile)} >
            <img
              src={process.env.PUBLIC_URL + "/img/meals/" + meal._id + '.png'}
              alt={meal.name}
              className={css(styles.tileImg)}/>
            <GridListTileBar
              title={<Typography className={css(styles.gridListTileBarTitle)}>{meal.name}</Typography>}
              subtitle={<span>{meal.type}</span>}
              actionIcon={<AlertDialog name={meal.name} price={meal.price}/>}
            ></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}



