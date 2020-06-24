import React from 'react'
import styled from "styled-components";
import Hero from "./Hero";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const Herolist = () => {
    return (
      <div>
        <Header> Tour of heroes </Header>
        <Navfield>
          <Homebutton variant="contained">Dashborad</Homebutton>
          <Hero />
        </Navfield>
        <Herotext>My Heroes</Herotext>
      </div>
    );
}

export default Herolist

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
  margin: 30px;
`;
