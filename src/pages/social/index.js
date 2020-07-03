import React from 'react'
import Storys from '../../components/Stores'
import Posts from '../../components/Posts'
import HorizontalScroll from 'react-scroll-horizontal'
import AmbevAnounce from '../../components/AmbevAnounce'
import Line from '../../shared/Line10.png'
import Nav from '../../components/nav'
import {Button} from 'reactstrap'
import Cofe from '../../shared/Cofe.png'
import Medal from '../../shared/Medal.png'
import './styles.css'
import { useHistory } from 'react-router-dom'

function Social ({posts, allStorys, ambevA, ambevFoto, ambevText}){

    const History = useHistory()

    function handleBars(){
        History.push('/places')
    }

    function renderStorys(all){
        return(
            all.map((pers) => {
                return(
                    <Storys storyimg={pers.thumb} userId={pers.id} userName={pers.name} key={pers.id}></Storys> 
                ) 
            })
        )
    }

    function renderPosts(posts){
        return(
            posts.map((post) => {
                return(
                    <Posts userThum={post.thumb} userImg={post.image} userName={post.name} key={post.id} userId={post.id} postLike={post.like} postComments={post.comments} userLocalization={post.localization}></Posts> 
                ) 
            })
        )
    }

    return(
        <>
            <div className="allSt mt-1 mb-3 shadow justify-content-center row mt-4">
                {renderStorys(allStorys)}
                <img src={Line} alt="line" className="col-3 mt-5 mb-3"/>
            </div>
            <Nav></Nav>
            <AmbevAnounce ambevFoto={ambevFoto} ambevA={ambevA} ambevText={'Anuncio novidades AMBEV'}></AmbevAnounce>
            <div className="container">
                <div className="row justify-content-center">
                    <Button onClick={() => handleBars()} className="btn-light shadow col-10 py-3 bares">
                        <img src={Cofe} alt="Bars" className="baresimg"/> Todos os locais
                    </Button>
                    <Button onClick={() => handleBars()} className="btn-light shadow mt-3 col-10 py-3 bares">
                        <img src={Medal} alt="Bars" className="baresimg"/> Todos os Eventos
                    </Button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 row">
                        {renderPosts(posts)}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Social