import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import './styles.css'

function Pubs ({userThum, userImg, userName, userId , userDistance}){

    const history = useHistory()

    function handleChosePub(){
        history.push(`bar/${userId}`)
    }


    return(
        <div className=" col-11 row justify-content-center">
            <Card className="container mt-4 rounded bg-light shadow p-0 mb-4">
                <CardHeader className="row m-0">
                    {/* <img src={userThum} alt="thumb bar" className="col-3 col-md-1 rounded-circle " onClick={() => handleChosePub()}/> */}
                    <h2 className="col-9 col-md-11 pl-0 mt-3 barName font-weight-bold text-secondary" onClick={() => handleChosePub()}>{userName}</h2>
                </CardHeader>
                <CardBody className="row justify-content-center" onClick={() => handleChosePub()}>
                    <CardImg src={userImg} alt="bar img" className="col-12"/>
                    <CardText className="nomes ml-auto col-4 mt-2 font-weight-bold">{userDistance} Km</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Pubs 