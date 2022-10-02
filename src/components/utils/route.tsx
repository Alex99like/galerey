import About from 'page/About';
import Home from 'page/Home';
import Welcome from 'page/Welcome';

export const route = [
  { path: '/', component: Welcome, name: 'Home' },
  { path: 'about', component: About, name: 'About' },
  { path: 'home', component: Home, name: 'Home' },
];
