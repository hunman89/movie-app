import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Chip from "@material-ui/core/Chip";

class Movie_detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: 500 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {location.state.movie.title}
              </Typography>
              <Typography color="textSecondary">
                {location.state.movie.year}
              </Typography>
              <img
                src={location.state.movie.medium_cover_image}
                alt={location.state.movie.title}
              />
              <Typography variant="body2" component="p">
                {location.state.movie.summary}
              </Typography>
              <ul>
                {location.state.movie.genres.map((genre) => (
                  <li key={genre}>
                    <Chip label={genre} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Movie_detail;
