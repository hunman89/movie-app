import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Detail from "./Detail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Movie({ movies }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Movies</ListSubheader>
        </GridListTile>
        {movies.map((movie) => (
          <GridListTile key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              subtitle={<span>{movie.year}</span>}
              actionIcon={<Detail key={movie.id} movie={movie} />}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Movie;
