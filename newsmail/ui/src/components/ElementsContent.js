import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {LinearProgress} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



class ElementsContent extends Component {
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
    if (this.props.memory.object === "") {
          return <LinearProgress />;
    } else {
      return (
        <Card className={style.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.memory.object.title}
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
      );
    }
  };
}


ElementsContent.propTypes = {
  collapsed: PropTypes.bool
};
ElementsContent.defaultProps = {
  collapsed: false
};

function mapStateToProps(state) {
    return {
        memory: state.memory
    }
}

export default connect(mapStateToProps)(ElementsContent);