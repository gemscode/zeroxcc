import './Tile.css';
import ElementsContent from '../ElementsContent';
import React from 'react';


function ElementsTile({title}) {
    
  return (
    <div className="tile">
      <ElementsContent title={title} collapse='false'/>
    </div>
  );
}

export default ElementsTile;