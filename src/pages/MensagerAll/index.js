import React from 'react'
import Storys from '../../components/Stores'
import Nav from '../../components/nav'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ScrollBar from "react-perfect-scrollbar";
import './styles.css'
import Groups from '../../components/group'
import {Card} from 'reactstrap'

function MensagesAll({groups, allStorys}){

    function renderStorys(all){
        return(
            all.map((pers) => {
                return(
                    <Storys storyimg={pers.thumb} userId={pers.id} userName={pers.name} key={pers.id}></Storys> 
                ) 
            })
        )
    }


    function renderGroups(group){
        return(
            group.map((grou) => {
                return(
                    <Groups group={grou}></Groups>
                )
            })
        )
    }

    

    return(
        <div className="container">
            <div className="mt-2 mb-2 shadow row allSt">
                <ScrollBar component="div">
                    <div className="div">
                        {renderStorys(allStorys)}
                    </div>
                </ScrollBar>               
            </div>
            <div className="row">
                <Nav></Nav>
            </div>
            <Card className="container ml-0 mt-3">
                <div className="row mt-3">
                    <h2 className="names col-12">Mensagens</h2>
                </div>
                {renderGroups(groups)}
            </Card>
        </div>
    )
}

export default MensagesAll