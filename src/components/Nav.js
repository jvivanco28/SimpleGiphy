import React from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from 'reactstrap';
import { Link } from "react-router-dom";
import { PAGE_TRENDING, PAGE_RANDOM, PAGE_SEARCH } from '../common/Constants';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">My Giphy Client</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to={`${PAGE_TRENDING}`}>Trending</Link>
                                {/*<NavLink href={`${PAGE_TRENDING}`}>Trending</NavLink>*/}
                            </NavItem>
                            <NavItem>
                                <Link to={`${PAGE_RANDOM}`}>Random</Link>
                                {/*<NavLink href={`${PAGE_RANDOM}`}>Random</NavLink>*/}
                            </NavItem>
                            <NavItem>
                                <Link to={`${PAGE_SEARCH}`}>Search</Link>
                                {/*<NavLink href={`${PAGE_SEARCH}`}>Search</NavLink>*/}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
