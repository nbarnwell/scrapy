import { JSDOM } from 'jsdom';
import jQuery from 'jQuery';

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const $ = new jQuery(dom.window);

const p = $('p').text();
console.log(p);
