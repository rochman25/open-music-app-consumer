const { Pool } = require('pg');
 
class PlaylistService {
  constructor() {
    this._pool = new Pool();
  }
 
  async getSongFromPlaylist(playlistId) {
    const query = {
      text: `SELECT songs.* FROM playlist_songs
      LEFT JOIN songs ON playlist_songs.song = songs.id
      WHERE playlist_songs.playlist = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
 
module.exports = PlaylistService;
