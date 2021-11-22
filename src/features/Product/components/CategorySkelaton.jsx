import React from 'react';
// import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
// CategorySkelaton.propTypes = {

// };

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});
function CategorySkelaton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        {
            Array.from(new Array(15)).map((x,index)=>(                
              <Skeleton style={{ paddingTop: 15 }} height={25} key={index}/>
            ))
        }
    </div>
  );
}

export default CategorySkelaton;
