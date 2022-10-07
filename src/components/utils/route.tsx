import About from 'page/about/About';
import Home from 'page/home/Home';
import Welcome from 'page/welcome/Welcome';
import FormPage from 'page/formPage/FormPage';

export const route = [
  { path: '/', component: Welcome, name: 'Home' },
  { path: 'form', component: FormPage, name: 'Form' },
  { path: 'about', component: About, name: 'About' },
  { path: 'home', component: Home, name: 'Home' },
];
