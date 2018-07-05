import React, {
    PureComponent
} from 'react';

import {
    Navbar,
    Nav,
    Button,
    FormControl,
    FormGroup,
    NavItem
} from 'react-bootstrap';

import {
    enableSearch
} from '../actions';

import {
    connect
} from 'react-redux';

class Header extends PureComponent {
    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Header className="pull-left">
                        <Navbar.Brand>
                            <a href="#home">Brand</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="" onClick={()=>this.props.enableSearch(!this.props.search)}>
                            {!this.props.search?'Search':'X'}
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.searchstatus,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);