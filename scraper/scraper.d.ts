type Source = 'woopread' | 'genesistls' | 'novelupdates'

interface Scraper {
	getChapterList() : ChapterRef[]
	getChapterInfo() : ChapterInfo
}

interface ChapterRef {
	novelName: string;
	source: Source;
	chapterUrl: string;
}

interface ChapterInfo {
	title: string;
	content: string;
	index: number;
}