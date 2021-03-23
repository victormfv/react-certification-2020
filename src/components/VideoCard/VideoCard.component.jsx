import React from 'react';
import styled from 'styled-components';

const Card=styled.div`
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    width: 345px;
    height: 345px;
    margin: 10px;
    border-radius:4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Title=styled.h3`
    font-size: 21px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    letter-spacing: 0.0075em;
    text-align:left;
    padding: 5px 10px;
    margin:0;
    line-height: 1.43;
`;

const Description = styled.p` 
font-size: 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    letter-spacing: 0.01071em;
    color: rgba(0, 0, 0, 0.54);
    text-align:left;
    padding: 5px 10px;
    margin:0;
    line-height: 1.43;
`;

const Image = styled.div` 
    background-image: url(${props => props.src});
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height:140px;
    border-radius: 4px 4px 0 0;
`;

function VideoCard(props){

    return(
        <Card>
            <Image src={props.video.thumbnails.medium.url}/>
            <Title>{props.video.title}</Title>
            <Description>{props.video.description}</Description>
        </Card>

    );
}

export default VideoCard