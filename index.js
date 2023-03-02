import { JSDOM } from 'jsdom';
import jQuery from 'jQuery';
import fetch from 'node-fetch';

async function getJQuery(url) {
    const response = await fetch(url);
    const body = await response.text();
    const dom = new JSDOM(body);
    return Promise.resolve(new jQuery(dom.window));
}

const rymanReallyUsefulBoxesPackOf9Page = await getJQuery('https://www.ryman.co.uk/really-useful-box-9-litre-pack-of-9-clear');
const price = rymanReallyUsefulBoxesPackOf9Page('div.product-info-wrapper span[data-price-type=finalPrice]').attr('data-price-amount');
console.log(price);
