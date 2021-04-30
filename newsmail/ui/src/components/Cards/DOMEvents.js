import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import {connect} from 'react-redux';
import EventsTable from '../Tables/EventsTable';
import { 
  Card,
  CardHeader,
  CardContent,
  Avatar
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import hookIcon from '@iconify-icons/mdi/webhook';
import { Icon } from '@iconify/react';

class DOMEvents extends Component {
  
  constructor(props) {
      super(props);

      this.state = {
          style: makeStyles(
          {
            root: { width: '100%' },
            container: { maxHeight: 550 },
          }),
      }

    };

  render() {
      let { style } = this.state;

      return (
          <Card elevation={0} className={style.root}>
            <CardHeader
                avatar=
                { 
                  <Avatar style={{backgroundColor: "transparent"}}>
                    <Icon icon={hookIcon} width="30" height="30" color="lightblue"/>
                  </Avatar> 
                }
                action=
                {  
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Events"
                subheader="DOM Tree: Event Listeners"
                style=
                {
                  { 
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    backgroundColor: 'transparent'
                  }
                }
            />
            <CardContent style={{ padding: '0px' }}>
                <EventsTable />
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

export default connect(mapStateToProps)(DOMEvents);
