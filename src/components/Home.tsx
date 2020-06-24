import React from 'react'
import styled from "styled-components";
import Hero from "./Hero";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";

const Home = () => {
    return (
      <div>
        <Header> Tour of heroes </Header>
        <Navfield>
          <Homebutton variant="contained">Dashborad</Homebutton>
          
            <Hero />
          
        </Navfield>
        <Herotext>Top Heroes</Herotext>
        <Herobutt>Hero1</Herobutt>
        <Herobutt>Hero2</Herobutt>
        <Herobutt>Hero3</Herobutt>
        <Herotext>Hero search</Herotext>
        <Search id="outlined-basic"  variant="outlined" />
      </div>
    );
}

export default Home

const Header = styled.div`
color: blue;
margin-left: 30px;
margin-top: 50px;
font-size: 30px;
`;

const Homebutton = styled(Button)`
  &&& {
    margin-top: 30px;
    margin-left: 30px;
  }
`;

const Navfield = styled.div`
display: flex;
flex-direction: row;
`;

const Herotext = styled.div`
  font-size: 30px;
  margin: 30px ;
`;

const Herobutt = styled.button`
width: 100px;
height: 100px;
margin: 100px;
background-color: skyblue;
color: white;
`;

const Search = styled(TextField)`
  &&& {
    margin-top: 30px;
    margin-left: 30px;
  }
`;