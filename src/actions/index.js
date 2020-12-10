// Action Creator
export const selectSong = (song) => {
    // Return an action
    return {
      type: 'SONG_SELECTED',
      payload: song // { title: 'No Scrubs', duration: '4:05' }
    };
};

