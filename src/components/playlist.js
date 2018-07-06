import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class Playlist extends Component {
    render() {
      let list = this.props.playlist;
      console.log("playList-->", list);

        return (
            <Grid>
                <Row>
                    <Col xs={12}>


                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default Playlist;
