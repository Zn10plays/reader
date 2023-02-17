import * as cheerio from 'cheerio';
import axios from 'axios'

// export default async function getBookInfo(url: string) : Promise<string> {
// 	const browser = await puppeteer.launch({headless: true});
// 	const page = await browser.newPage();
//
// 	await page.goto(url,{waitUntil: 'networkidle2'});
//
// 	const title = await page.$eval('h1.entry-title', elm => elm.textContent)
// 	const text = await page.$$('p')
//
// 	await browser.close();
// 	return title ?? 'AMONGUS';
// }


export default async function getBookInfo(url: string) : Promise<string> {
	return await axios.get(url)
		.then(res => res.data)
		.then(data => cheerio.load(data))
		.then($ => $('h1.entry-title').text())
}