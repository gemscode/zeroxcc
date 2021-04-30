import './css/styles.css';
import './css/App.css';
import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import SideBarTile from './components/Tiles/SideBarTile';
import LoadTile from './components/Tiles/LoadTile';
import ElementsTile from './components/Tiles/ElementsTile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import store from './store.js';
import { addMemory }  from './actions/memory';
import EventsTable from './components/Tables/EventsTable';
import hookIcon from '@iconify-icons/mdi/webhook';
import { Icon } from '@iconify/react';
import { 
  Card,
  CardHeader,
  CardContent,
  Avatar, 
  LinearProgress
} from '@material-ui/core';
import DOMElements from './components/Cards/DOMElements';
import DOMEvents from './components/Cards/DOMEvents';
import HeaderBar from './components/HeaderBar';


class App extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
        elements_properties: [],
        elements_events: [],
        elements_source: [],
        elements_actions: [],
        elements_url: "",
        dataLoaded: false,
        hasHeader: true,
        hasNavigation: true,
        hasContent: false,
        hasFooter: true,
        isLoading: false,
        collapsed: false,
        url: "https://google.com/",
        urlEncoded : encodeURIComponent("https://google.com/"),
        API_URL: "http://localhost:4000",
    }

    if (typeof process.env.API_URL !== 'undefined')
          this.state.API_URL = process.env.API_URL;

   
  };

  loadAccessibility() {
        return fetch(this.state.API_URL+"/api/accessibility?url="+this.state.urlEncoded, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => response.json()).catch( err => {
            throw new Error({source: "loadAccessibility", err:err});
        })
  };

  loadInsight() {
        return fetch(this.state.API_URL+"/api/insights/request?url="+this.state.urlEncoded, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => response.json()).catch( err => {
            throw new Error({source: "loadInsight", err:err});
        })
  };
  
  componentDidMount() {

      Promise.all([ this.loadAccessibility(), this.loadInsight()])
          .then (([object, result]) => {
              this.setState({
                  dataLoaded: true
              })

              store.dispatch(addMemory({title: object.title, data: object.snapshot.children, events: object.events, result: result}));
          }).catch((err) => {
              console.log(err);
          });
  }

  classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  handleChange = (event, newValue) => {
    this.value = newValue;
  };

  render() {
    let { url } = this.state;
    return this.isLoading ? ( <LinearProgress/>) : (
      <div className="splits" >
      <HeaderBar/>
      <ReactSplit direction={SplitDirection.Horizontal} initialSizes={[3, 20, 77]} 
      gutterClassName="custom-gutter-horizontal"
      draggerClassName="custom-dragger-horizontal" >
      <SideBarTile title="M"/>
      <LoadTile />
      <ReactSplit direction={SplitDirection.Horizontal} minWidth={300} 
      gutterClassName="custom-gutter-horizontal"
      draggerClassName="custom-dragger-vertical" >
        <ElementsTile title={url}/>
        <ReactSplit direction={SplitDirection.Vertical} minHeight={300} >
          <div className="tile" style={{minHeight: '350px'}} >
              <DOMElements/>
          </div>
          <div className="tile" style={{maxHeight: '300px'}}>
              <DOMEvents/>
          </div>
        </ReactSplit>
    </ReactSplit>
    </ReactSplit>
    </div>
   );
  }
}

export default App;
