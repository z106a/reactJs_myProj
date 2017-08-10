import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios'
import ImageList from './components/image_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(resp => this.setState({ images: resp.data.data}));
  }

  render() {
    return(
      <div>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector('.container'));
})
