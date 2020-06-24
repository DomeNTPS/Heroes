import React from 'react'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
      <div>
          <a href='./Herodetail.tsx'>
          <Herobutton variant="contained">Hero</Herobutton>
        </a>
      </div>
    );
}

export default Hero

const Herobutton = styled(Button)`
  &&& {
    margin-top: 30px;
    margin-left: 100px;
  }
`;

