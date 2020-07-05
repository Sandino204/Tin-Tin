import React from 'react'
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Pub from './pages/Pub'
import {dbPubs, allPosts, allStorys, Ambev, AllGroups} from './database/db'
import Social from './pages/social'
import Menu from './pages/Cardapio'
import MensagerA from './pages/MensagerAll'
import Mensager from './pages/Messager'

function Routes (){

    function Pub1 ({match}){
        return(
            <Pub data={dbPubs.filter((pub) => pub.id === parseInt(match.params.barId, 10))[0]}></Pub>
        )
    }

    function Menu1 ({match}){
        return(
            <Menu data={dbPubs.filter((pub) => pub.id === parseInt(match.params.barId, 10))[0]}></Menu>
        )
    }
    
    function Sociale (){
        return(
            <Social posts={allPosts} allStorys={allStorys} ambevA={Ambev.anounce}></Social>
        )
    }

    function MensagerAll(){
        return(
            <MensagerA groups={AllGroups} allStorys={allStorys}></MensagerA>
        )
    }

    function Mensagers({match}){
        return(
            <Mensager texts={AllGroups.filter((group) => group.id === parseInt(match.params.IdGroup, 10))[0]}></Mensager>
        )
    }


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sociale}></Route>
                <Route exact path="/places" component={Home}></Route>
                <Route exact path="/bar/:barId" component={Pub1}></Route>
                <Route exact path="/bar/:barId/menu" component={Menu1}></Route>
                <Route exact path="/mensages" component={MensagerAll}></Route>
                <Route exact path="/mensager/:IdGroup" component={Mensagers}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes