import React from 'react';
import {Link, Route} from 'react-router-dom';
import '../components/Shelf.css';

export default function Shelfie() {
    return (

    <div>

  
<div className="main">
<div className="shelf_container">
<span className="shelf_span">
<Link to="/ShelfA" className='links'>Shelf A</Link>
</span>
</div>
<div className="shelf_container">
<span className="shelf_span">
<Link to="/ShelfB" className='links'>Shelf B</Link>
</span>
</div>
<div className="shelf_container">
<span className="shelf_span">
<Link to="/ShelfC" className='links'>Shelf C </Link>
</span>
</div>
<div className="shelf_container">
<span className="shelf_span">
<Link to="/ShelfD" className='links'>Shelf D </Link>
</span>
</div>





</div>
    
     </div>

       
    )
}