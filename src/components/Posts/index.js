import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Button } from 'reactstrap'
import './styles.css'

function Posts ({userThum, userImg, userName, userId, postLike, postComments, userLocalization }){

    return(
        <div className="row justify-content-center">
            <Card className="container mt-4 rounded bg-light shadow p-0 mb-4">
                <CardHeader className="row m-0">
                    <img src={userThum} alt="thumb bar" className="col-4 col-md-2 rounded-circle "/>
                    <div className="col-8 col-md-10 row">
                        <h2 className="col-12 pl-0 mt-3 names font-weight-bold">{userName}</h2>
                        <p className="col-12 pl-0">{userLocalization}</p>
                    </div>
                </CardHeader>
                <CardBody className="row justify-content-center">
                    <CardImg src={userImg} alt="bar img" className="col-11 rounded"/>
                    <div className="col-12 row justify-content-around ">
                        <Button onClick={postLike++} className="col-4 btn-light text-dark mt-2 buttonPosts">Like</Button>
                        <Button onClick={postComments.length} className="col-4 btn-light text-dark mt-2 buttonPosts">Comments</Button>
                        <Button className="col-4 btn-light text-dark mt-2 buttonPosts">Bate-Papo</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Posts 