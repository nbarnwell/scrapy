import { JSDOM } from 'jsdom';
import jQuery from 'jQuery';
import fetch from 'node-fetch';

const response = await fetch('https://www.ryman.co.uk/really-useful-box-9-litre-pack-of-9-clear');
const body = await response.text();

console.log(body);

const dom = new JSDOM(body);
const $ = new jQuery(dom.window);

const price = $('span.price').text();
console.log(price);
