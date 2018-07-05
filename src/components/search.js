import React, {
    Component
} from 'react';
import {
    Jumbotron,
    Button,
    FormGroup,
    FormControl,
    Grid,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import {
    connect
} from 'react-redux';

import {
    enableSearch,
    getSearchList,
    setSearchText
} from '../actions';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    async fetchAsync () {
        // await response of fetch call
        let response = await fetch('https://imabhi.herokuapp.com/yt/tp');
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        
        if (data && data.success) {
            this.props.setSearchList(data.data);    
        } else {
            this.props.setSearchList();
        }
        this.setState({loading:false});
      }
      
      _onChange = (text) => {
        this.setState({loading:true});
        this.props.setSearchText(text);
        this.fetchAsync();
      }

    render() {
        return ( 
                <Jumbotron className="search">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text" className="search-input" placeholder="Search..." onChange={(e)=>this._onChange(e.target.value)} />
                                </FormGroup>
                            </Col>
                            {this.state.loading && (<Col xs={12} className="text-center">
                                <p>loading...</p>
                            </Col>)}
                            <Col xs={12} className="search-container">
                                {this.props.searchList && this.props.searchList.map((search,i) => (<Row key={i}>
                                    <Col xs={12}>
                                        <Image alt={search.info.artist} src={search.info.thumb} responsive />
                                    </Col>
                                </Row>))}
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.searchstatus,
        searchText: state.searchtext,
        searchList: state.searchlist,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable)),
        setSearchText: (text = '') => dispatch(setSearchText(text)),
        setSearchList: (data = []) => dispatch(getSearchList(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);