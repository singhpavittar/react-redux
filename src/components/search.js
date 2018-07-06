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
import FontAwesome from 'react-fontawesome';
import {
    connect
} from 'react-redux';

import {
    enableSearch,
    getSearchList,
    setSearchText,
    addToPlaylist
} from '../actions';
import SearchListing from './searchlisting'
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
        this.props.setSearchText(text);
        if (text.length) {
            this.fetchAsync();
            this.setState({loading:true});
        } else {
            this.props.setSearchList();
            this.setState({loading:false});
        }
      }
      addIteams = (search) => {
        let playlist = this.props.playlist;
          let isExit = playlist.find(x=> x._id === search._id);
          if (!isExit) {
              this.props.addToPlaylist(search);
          } else {
            alert('Already added to playlist');
          }
      }

    render() {
        return (
                <Jumbotron className={this.props.enable ? 'search translate-0' : 'search translate-1 vhidden'}>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text" className="search-input" placeholder="Search..." value={this.props.searchText} onChange={(e)=>this._onChange(e.target.value)} />
                                </FormGroup>
                            </Col>
                            {this.state.loading && (<Col xs={12} className="text-center">
                                <p>loading...</p>
                            </Col>)}
                            <Col xs={12} className="search-container col-centered">
                                {this.props.searchList && this.props.searchList.map((search,i) => (
                                  <SearchListing key={i} searchItem={search} playlist={this.props.playlist} addIteams={this.addIteams}/>
                              ))}
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
        playlist:state.playlist
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable)),
        setSearchText: (text = '') => dispatch(setSearchText(text)),
        setSearchList: (data = []) => dispatch(getSearchList(data)),
        addToPlaylist: (data = {}) => dispatch(addToPlaylist(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
