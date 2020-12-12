import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

// mapStateToProps by CONVENTION takes the 'state' object containing all the Redux data store
// we can name the prop state, state1 or whatever we want
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// connect is a React component/function that needs a configuration pass to it
// { selectSong: selectSong } => selectSong [key]: selectSong [value from action creator]
export default connect(mapStateToProps, { selectSong })(SongList);