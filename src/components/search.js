import React, {
    Component
} from 'react';
import {
    Jumbotron,
    Button,
    FormGroup,
    FormControl,
    Grid,Row,Col
} from 'react-bootstrap';

import { connect } from 'react-redux';

import { enableSearch } from '../actions';

class Search extends Component {
    render() {
        return ( 
                <Jumbotron className="search">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text" className="search-input" placeholder="Search..." />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                {<Row>
                                    <Col xs={12}>

                                    </Col>
                                </Row>}
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);