import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import {connect} from 'react-redux';
import AccessibilityTable from '../Tables/AccessibilityTable';
import ElementsTable from '../Tables/ElementsTable';
import { 
  Card,
  CardHeader,
  CardContent,
  Avatar
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import graphIcon from '@iconify-icons/mdi/graph';
import { Icon } from '@iconify/react';


class DOMElements extends Component {
  
  constructor(props) {
      super(props);

      this.state = {
          style: makeStyles(
          {
            root: { width: '100%', fontFamily: 'Courier New' },
            container: { maxHeight: 440 }
          }),
      }

    };

  render() {
      let { style, theme } = this.state;

      return (
          <Card elevation={0} className={style.root}>
            <CardHeader
                avatar=
                { 
                  <Avatar style={{backgroundColor: "transparent"}}>
                    <Icon icon={graphIcon} width="30" height="30" color="lightblue"/>
                  </Avatar> 
                }
                action=
                {  
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Properties"
                subheader="DOM Tree: Elements"
                style={{ paddingTop: '0px',paddingBottom: '0px', backgroundColor: 'transparent'}}
            />
            <CardContent style={{ padding: '0px' }}>
                <ElementsTable />
            </CardContent>
          </Card>
      );
  }
}

function mapStateToProps(state) {
    return {
        memory: state.memory
    }
}

export default connect(mapStateToProps)(DOMElements);
