import React, {
    PureComponent
} from 'react';

import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';

import {
    getSearchList,
    enableSearch,
    setSearchText
} from '../actions';
import FontAwesome from 'react-fontawesome';

import {
    connect
} from 'react-redux';

class Header extends PureComponent {

    handleClick(){
        this.props.setSearchText();
        this.props.setSearchList();
        this.props.enableSearch(!this.props.search);
    }

    render() {
        return (
            <header>
                <Navbar fixedTop>
                    <Navbar.Header className="pull-left">
                        <Navbar.Brand>
                            <a>Playlist</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight className="pull-right">
                        <NavItem eventKey={1} href="" onClick={()=>this.handleClick()}>
                            {!this.props.search?<FontAwesome name='search'/>:<FontAwesome name='times'/>}
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
        enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable)),
        setSearchList: (data = []) => dispatch(getSearchList(data)),
        setSearchText: (text = '') => dispatch(setSearchText(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
