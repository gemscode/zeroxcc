import Tile from '../Tile/Tile';
import './StyledGutter.css';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';

function StyledGutter() {
  return (
    <ReactSplit
      direction={SplitDirection.Horizontal}
      gutterClassName="custom-gutter-horizontal"
      draggerClassName="custom-dragger-horizontal"
    >
      <Tile title="Elements"/>
      <Tile title="Properties"/>
    </ReactSplit>
  );
}

export default StyledGutter;