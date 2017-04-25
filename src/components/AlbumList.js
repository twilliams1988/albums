import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

const albumsData = [{"title":"Taylor Swift","artist":"Taylor Swift","url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6","image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Fearless","artist":"Taylor Swift","url":"https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM","image":"https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Speak Now","artist":"Taylor Swift","url":"https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886","image":"https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Red","artist":"Taylor Swift","url":"https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU","image":"https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"1989","artist":"Taylor Swift","url":"https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI","image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"}];

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    // .then((response) => albumsJson.json())
    // .then((responseData) => this.setState({ albums: responseData }));
    this.setState({ albums: albumsData });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state); // to check to make sure the state is working correctly
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
