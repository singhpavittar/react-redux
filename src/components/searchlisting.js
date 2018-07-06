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

class SearchListing extends Component {
    render() {
      let {searchItem} = this.props;
      let added = this.props.playlist.find(item => item._id === searchItem._id);
          return (<Row className="repeated">
            <Col xs={12} className="">
            <div className="bg-white search-result-box-shadow">
                <Image alt={searchItem.info.artist} src={searchItem.info.thumb} responsive className="p5 search-result-image pull-left"/>
                <div className="pull-left ml-10 h100">
                    <h3>{searchItem.info.track}</h3>
                    <p>{searchItem.info.artist}</p>
                </div>
                {!added && <Button bsStyle="primary" className="search-add-btn" onClick={()=>this.props.addIteams(searchItem)}>
                  <FontAwesome name='plus'/>
                </Button>}
                {added && <Button bsStyle="success" className="search-add-btn" onClick={()=>this.props.addIteams(searchItem)}>
                  <FontAwesome name='check'/>
                </Button>}
                </div>
            </Col>
        </Row>);
    }
}

export default SearchListing;
