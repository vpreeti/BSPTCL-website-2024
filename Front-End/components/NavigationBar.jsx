import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiEnglishInput } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import companylogo from '../src/assets/images/BSPTCL_logo.png'
import { FaSitemap } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import '../styles/NavigationBar.css'

function NavigationBar() {


    return (
        <>
            <div className="navBarParent">
                <div className="parent">
                    {/*-------------------------Starting of Logo div--------------------------------- */}
                    <div className="logoAndName"> {/*This div holds the logo and company name */}
                        <div className="logo"> {/*This div holds the logo */}
                            <img src={companylogo} alt="Company Logo" className='companylogo' /> {/*company logo*/}
                        </div>
                        <div className='companyName'>{/*This div holds the company name */}
                            <h3 className='DeptName'>बिहार स्टेट पावर ट्रांसमिशन कम्पनी लिमिटेड</h3>
                            <h3 className='DeptName'>Bihar State Power Transmission Co. Ltd. </h3>
                            <p id='holdingDeptName'>(A Subsidiary of Bihar State Power (Holding) Co. Ltd.)</p>
                        </div>
                    </div>
                    {/*--------------------------Ending of logo Div---------------------------------*/}


                    {/*--------------------------Starting of Utility div-------------------------- */}
                    <div className="utility">
                        <Navbar expand="lg" >
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="">Skip to Main Content</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href="">Screen Reader</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href="">A- </Nav.Link>
                                        <Nav.Link href="">A</Nav.Link>
                                        <Nav.Link href="">A+</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><MdSunny /></Nav.Link>
                                        <Nav.Link href=""><FaMoon /></Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><RiEnglishInput /></Nav.Link>
                                        <Nav.Link href="">हि</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><FaSitemap /></Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><FaSearch /></Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><MdKeyboardVoice /></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    {/*-------------------------Ending of utility div---------------------------- */}


                    {/*-------------------------Starting of mainLink div-------------------------- */}
                    <div className="mainLink">
                        <Navbar expand="lg" >
                            <Container className="mainLinkFont">                               
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="">About Us</Nav.Link>
                                        <Nav.Link href="">Transmission N/w</Nav.Link>
                                        <NavDropdown title="Employee" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="">Office Order</NavDropdown.Item>
                                            <NavDropdown.Item href="">Transfer/Posting</NavDropdown.Item>
                                            <NavDropdown.Item href="">Mediclaim</NavDropdown.Item>                                                                                     
                                        </NavDropdown>
                                        <Nav.Link href="">Media</Nav.Link>
                                        <Nav.Link href="">Procurement</Nav.Link>
                                        <Nav.Link href="">SLDC</Nav.Link>
                                        <Nav.Link href="">STU</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    {/*-------------------------Ending of mainLink div--------------------------- */}
                </div>
            </div>




        </>
    );
}

export default NavigationBar;