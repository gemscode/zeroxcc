import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


class ResponseBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style : makeStyles({
                root: { maxWidth: 345 },
                media: { height: 140 },
              })
    }
  }

  
  render() {
    let { style } = this.state;
    return (
        <Card className={style.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Body
                </Typography>
                <Paper className={style.root}>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.response.object.url}
                  </Typography>
              </Paper>
              </CardContent>
            </CardActionArea>
        </Card>
      );
  };
}


ResponseBody.propTypes = {
  collapsed: PropTypes.bool
};
ResponseBody.defaultProps = {
  collapsed: false
};

function mapStateToProps(state) {
    return {
        memory: state.response
    }
}

export default connect(mapStateToProps)(ResponseBody);