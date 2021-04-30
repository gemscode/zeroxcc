import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import { Icon } from '@iconify/react';
import dockerIcon from '@iconify-icons/mdi/docker';
import urlIcon from '@iconify-icons/mdi/vector-link';
import databaseIcon from '@iconify-icons/mdi/database-cog';
import searchIcon from '@iconify-icons/mdi/layers-search-outline';
import awsIcon from '@iconify-icons/mdi/aws';
import githubIcon from '@iconify-icons/mdi/github';
import javaIcon from '@iconify-icons/mdi/language-java';
import nodejsIcon from '@iconify-icons/mdi/nodejs';
import debugStepInto from '@iconify-icons/mdi/debug-step-into';
import debugStepOut from '@iconify-icons/mdi/debug-step-out';
import debugStepOver from '@iconify-icons/mdi/debug-step-over';
import playIcon from '@iconify-icons/mdi/play';
import recordIcon from '@iconify-icons/mdi/record';
import pauseIcon from '@iconify-icons/mdi/pause';
import forwardIcon from '@iconify-icons/mdi/fast-forward';
import backwardIcon from '@iconify-icons/mdi/step-backward';
import stopIcon from '@iconify-icons/mdi/stop';
import importIcon from '@iconify-icons/mdi/import';
import Divider from '@material-ui/core/Divider';
import kubernetesIcon from '@iconify-icons/mdi/kubernetes';
import reactIcon from '@iconify-icons/mdi/react';


const classes = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  items: {
    padding: '1px',
    marginTop: '2px',
  }
}));

const SideBar = ({ collapsed }) => (
  <>
    <List className={classes.root}>
      <ListItem style={{padding: "1px"}}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "transparent"}}>
            <Icon icon={searchIcon} width="30" height="30" color="lightblue"/>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop: '2px',marginBottom: '2px', backgroundColor: 'lightgrey'}} />
      <ListItem style={{padding: "1px"}}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "transparent"}}>
            <Icon icon={importIcon} width="30" height="30" color="lightblue"/>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: "transparent"}}>
            <Icon icon={urlIcon} width="25" height="25" color="lightblue"/>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop: '2px',marginBottom: '2px', backgroundColor: 'lightgrey'}} />
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={dockerIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={awsIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={kubernetesIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={databaseIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop: '2px',marginBottom: '2px', backgroundColor: 'lightgrey'}} />
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={javaIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={nodejsIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={reactIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop: '2px',marginBottom: '2px', backgroundColor: 'lightgrey'}} />
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={forwardIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={playIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={stopIcon} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={recordIcon} width="30" height="30" color="red"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider style={{marginTop: '2px',marginBottom: '2px', backgroundColor: 'lightgrey'}} />
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={debugStepInto} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={debugStepOver} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem style={{padding:"1px"}}>
        <ListItemAvatar>
            <Avatar style={{backgroundColor: "transparent"}}>
              <Icon icon={debugStepOut} width="30" height="30" color="lightblue"/>
            </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  </>
);

SideBar.propTypes = {
  collapsed: PropTypes.bool
};
SideBar.defaultProps = {
  collapsed: false
};

export default SideBar;
