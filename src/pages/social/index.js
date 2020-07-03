import React from 'react'
import Storys from '../../components/Stores'
import Posts from '../../components/Posts'
import HorizontalScroll from 'react-scroll-horizontal'

function Social ({posts, allStorys}){

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
            <div className="container-fluid">
                <div className="row mt-1">
                    <h2 className="names font-weight-bold col-12">Social</h2>
                </div>
            </div>
            <div className="allSt mt-1 mb-3">
                {renderStorys(allStorys)}
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