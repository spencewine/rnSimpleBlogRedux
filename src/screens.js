import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import PostsList from './posts/screens/PostsList'
import Tab1 from './posts/screens/Tab1'
import Tab2 from './posts/screens/Tab2'
import Tab3 from './posts/screens/Tab3'
import {store} from './store';

export function registerScreens() {

  Navigation.registerComponentWithRedux('blog.PostsList', () => PostsList, Provider, store);
  Navigation.registerComponentWithRedux('blog.Tab1', () => Tab1, Provider, store);
  Navigation.registerComponentWithRedux('blog.Tab2', () => Tab2, Provider, store);
  Navigation.registerComponentWithRedux('blog.Tab3', () => Tab3, Provider, store);
  Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);

}
