import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import Post from '../components/Post'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={()=><Home />}/>
      <Route exact path="/post" component={()=><Post />}/>
    </Switch>
  )
}