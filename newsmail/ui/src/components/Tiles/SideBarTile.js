import './Tile.css';
import SideBar from '../SideBar';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from '@iconify/react';
import filterIcon from '@iconify-icons/mdi/filter-menu-outline';
function SideBarTile({title}) {
  return (
    <div className="tile">
      <Avatar style={{backgroundColor: "transparent", paddingTop: "5px", paddingBootom: "10px"}}>
        <Icon icon={filterIcon} width="30" height="30"/>
      </Avatar>
      <SideBar collapse='false'/>
    </div>
  );
}

export default SideBarTile;