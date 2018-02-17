import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Shelfie from './components/Shelfie';
import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';


export default (

    <Switch>
    <Route path='/' component={ Shelfie } exact/>   
    <Route path='/ShelfA'component={ ShelfA }/>
    <Route path='/ShelfB'component={ ShelfB }/> 
    <Route path='/ShelfC'component={ ShelfC }/>
    <Route path='/ShelfD'component={ ShelfD } />
    </Switch>

)
