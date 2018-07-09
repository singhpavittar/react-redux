import React, { Component } from 'react';
import {Thumbnail} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class PlaylistItem extends Component {
    render() {
        return (
            <Thumbnail className="playlist-item" src={this.props.item.thumbnails.high.url || this.props.item.thumbnails.medium.url || this.props.item.thumbnails.default.url} alt={this.props.item.title}>
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p> 
                <span className="expand"><FontAwesome name="arrows-alt"/></span>  
                <a className="downLoad" href={this.props.item.link}><FontAwesome name="download"/></a>
                <a className="play" onClick={()=> this.props.addToPlay(this.props.item.id)}><FontAwesome name="play"/></a>
                <span className="item-overlay"></span>
            </Thumbnail>
        );
    }
}

export default PlaylistItem;
