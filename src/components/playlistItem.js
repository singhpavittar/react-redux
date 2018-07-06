import React, { Component } from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class PlaylistItem extends Component {
    render() {
        return (
            <Thumbnail className="playlist-item" src={this.props.item.thumb} alt="242x200">
                <h3>{this.props.item.track}</h3>
                <p>{this.props.item.artist}</p> 
                <span className="expand"><FontAwesome name="arrows-alt"/></span>  
                <a  className="downLoad" href={this.props.item.url}><FontAwesome name="download"/></a>             
                <span className="item-overlay"></span>
            </Thumbnail>
        );
    }
}

export default PlaylistItem;
