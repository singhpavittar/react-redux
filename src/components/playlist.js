import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PlaylistItem from './playlistItem';
class Playlist extends Component {
    render() {
      let list = this.props.playlist;
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Playlist</h1>
                    </Col>
                </Row>
                <Row>{
                    list && list.map((item ,i) => (<Col xs={6} md={4} key={i}>
                        <PlaylistItem item={item.info}/>
                    </Col>))}
                </Row>
            </Grid>
        )
    }
}
export default Playlist;
