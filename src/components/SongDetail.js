import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  ); // ALWAYS ADD ;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong } // This is converted to PROPS inside this functional component
};
// export default SongDetail; => normal export without Redux
export default connect(mapStateToProps)(SongDetail);
