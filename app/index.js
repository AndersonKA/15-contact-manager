import 'whatwg-fetch';
import AppController from './controller/app';
import store from './store';


const el = document.querySelector('.root');

const controller = new AppController(el, store);
controller.created();
