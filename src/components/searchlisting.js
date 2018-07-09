import React, {
    Component
} from 'react';
import {
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SearchListing extends Component {
    render() {
      let {searchItem} = this.props;
      let added = this.props.playlist.find(item => item.id === searchItem.id);
          return (<Row className="repeated">
            <Col xs={12} className="">
            <div className="bg-white search-result-box-shadow">
                <Image alt={searchItem.title} src={searchItem.thumbnails.high.url || searchItem.thumbnails.medium.url || searchItem.thumbnails.default.url} responsive className="p5 search-result-image pull-left mtb-auto"/>
                <div className="pull-left ml-10">
                    <h3>{searchItem.title}</h3>
                    <p>{searchItem.description}</p>
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
