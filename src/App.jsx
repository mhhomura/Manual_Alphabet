import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Q from './Assets/img/Q.JPG'
import Z from './Assets/img/Z.JPG'
import A from './Assets/img/A.JPG'
import W from './Assets/img/W.JPG'
import E from './Assets/img/E.JPG'
import R from './Assets/img/R.JPG'
import T from './Assets/img/T.JPG'
import Y from './Assets/img/Y.JPG'
import U from './Assets/img/U.JPG'
import I from './Assets/img/I.JPG'
import O from './Assets/img/O.JPG'
import P from './Assets/img/P.JPG'
import S from './Assets/img/S.JPG'
import D from './Assets/img/D.JPG'
import F from './Assets/img/F.JPG'
import G from './Assets/img/G.JPG'
import H from './Assets/img/H.JPG'
import J from './Assets/img/J.JPG'
import K from './Assets/img/K.JPG'
import L from './Assets/img/L.JPG'
import Ç from './Assets/img/Ç.JPG'
import X from './Assets/img/X.JPG'
import C from './Assets/img/C.JPG'
import V from './Assets/img/V.JPG'
import B from './Assets/img/B.JPG'
import N from './Assets/img/N.JPG'
import M from './Assets/img/M.JPG'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap'

const App = () => {

  const [words, setWords] = React.useState('');
  const type = (letter) => {
    setWords(words + letter);
  }


  return (
    <div>
      <Navbar
        color="primary"
        dark
        expand
        fixed=""
        light
      >
        <NavbarBrand href="/">
          Translate
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/components/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Translate to
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Portuguese
                </DropdownItem>
                <DropdownItem>
                  Manual Alphabet
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/*  <NavbarText>
        Simple Text
      </NavbarText> */}
        </Collapse>
      </Navbar>
      <CssBaseline />
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', marginTop: '2vh', width: '100%' }} id="Box">
          <Input value={words} />
        </Box>
      </Container>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          <Button key="Q"  onClick={() => type("Q")} style={{backgroundColor: '#eef3f7'}}><img src={Q} alt="Q" style={{ width: '60px', }}></img></Button>
          <Button key="W"  onClick={() => type("W")} style={{backgroundColor: '#eef3f7'}}><img src={W} alt="W" style={{ width: '60px', }}></img></Button>
          <Button key="E"  onClick={() => type("E")} style={{backgroundColor: '#eef3f7'}}><img src={E} alt="E" style={{ width: '60px', }}></img></Button>
          <Button key="R"  onClick={() => type("R")} style={{backgroundColor: '#eef3f7'}}><img src={R} alt="R" style={{ width: '60px', }}></img></Button>
          <Button key="T"  onClick={() => type("T")} style={{backgroundColor: '#eef3f7'}}><img src={T} alt="T" style={{ width: '60px', }}></img></Button>
          <Button key="Y"  onClick={() => type("Y")} style={{backgroundColor: '#eef3f7'}}><img src={Y} alt="Y" style={{ width: '60px', }}></img></Button>
          <Button key="U"  onClick={() => type("U")} style={{backgroundColor: '#eef3f7'}}><img src={U} alt="U" style={{ width: '60px', }}></img></Button>
          <Button key="I"  onClick={() => type("I")} style={{backgroundColor: '#eef3f7'}}><img src={I} alt="I" style={{ width: '60px', }}></img></Button>
          <Button key="O"  onClick={() => type("O")} style={{backgroundColor: '#eef3f7'}}><img src={O} alt="O" style={{ width: '60px', }}></img></Button>
          <Button key="P"  onClick={() => type("P")} style={{backgroundColor: '#eef3f7'}}><img src={P} alt="P" style={{ width: '60px', }}></img></Button>
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
          <Button key="A" onClick={() => type("A")} style={{backgroundColor: '#eef3f7'}}><img src={A} alt="A" style={{ width: '60px', }}></img></Button>
          <Button key="S" onClick={() => type("S")} style={{backgroundColor: '#eef3f7'}}><img src={S} alt="S" style={{ width: '60px', }}></img></Button>
          <Button key="D" onClick={() => type("D")} style={{backgroundColor: '#eef3f7'}}><img src={D} alt="D" style={{ width: '60px', }}></img></Button>
          <Button key="F" onClick={() => type("F")} style={{backgroundColor: '#eef3f7'}}><img src={F} alt="F" style={{ width: '60px', }}></img></Button>
          <Button key="G" onClick={() => type("G")} style={{backgroundColor: '#eef3f7'}}><img src={G} alt="G" style={{ width: '60px', }}></img></Button>
          <Button key="H" onClick={() => type("H")} style={{backgroundColor: '#eef3f7'}}><img src={H} alt="H" style={{ width: '60px', }}></img></Button>
          <Button key="J" onClick={() => type("J")} style={{backgroundColor: '#eef3f7'}}><img src={J} alt="J" style={{ width: '60px', }}></img></Button>
          <Button key="K" onClick={() => type("K")} style={{backgroundColor: '#eef3f7'}}><img src={K} alt="K" style={{ width: '60px', }}></img></Button>
          <Button key="L" onClick={() => type("L")} style={{backgroundColor: '#eef3f7'}}><img src={L} alt="L" style={{ width: '60px', }}></img></Button>
          <Button key="Ç" onClick={() => type("Ç")} style={{backgroundColor: '#eef3f7'}}><img src={Ç} alt="Ç" style={{ width: '60px', }}></img></Button>
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
          <Button key="Z" onClick={() => type("Z")} style={{backgroundColor: '#eef3f7'}}><img src={Z} alt="Z" style={{ width: '60px', }}></img></Button>
          <Button key="X" onClick={() => type("X")} style={{backgroundColor: '#eef3f7'}}><img src={X} alt="X" style={{ width: '60px', }}></img></Button>
          <Button key="C" onClick={() => type("C")} style={{backgroundColor: '#eef3f7'}}><img src={C} alt="C" style={{ width: '60px', }}></img></Button>
          <Button key="V" onClick={() => type("V")} style={{backgroundColor: '#eef3f7'}}><img src={V} alt="V" style={{ width: '60px', }}></img></Button>
          <Button key="B" onClick={() => type("B")} style={{backgroundColor: '#eef3f7'}}><img src={B} alt="B" style={{ width: '60px', }}></img></Button>
          <Button key="N" onClick={() => type("N")} style={{backgroundColor: '#eef3f7'}}><img src={N} alt="N" style={{ width: '60px', }}></img></Button>
          <Button key="M" onClick={() => type("M")} style={{backgroundColor: '#eef3f7'}}><img src={M} alt="M" style={{ width: '60px', }}></img></Button>
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
        <Button key="ESPACE"  onClick={() => type(" ")}> - </Button>
        </ButtonGroup>
      </Box>
    </div>
  )
}



export default App;
