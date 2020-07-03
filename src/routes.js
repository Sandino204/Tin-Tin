import React from 'react'
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Pub from './pages/Pub'
import {dbPubs, allPosts, allStorys, Ambev} from './database/db'
import Social from './pages/social'

function Routes (){

    function Pub1 ({match}){
        return(
            <Pub data={dbPubs.filter((pub) => pub.id === parseInt(match.params.barId, 10))[0]}></Pub>
        )
    }
    
    function Sociale (){
        return(
            <Social posts={allPosts} allStorys={allStorys} ambevA={Ambev.anounce}></Social>
        )
    }



    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sociale}></Route>
                <Route exact path="/places" component={Home}></Route>
                <Route exact path="/bar/:barId" component={Pub1}></Route>
                <Route exact path="/social" component={Home}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes