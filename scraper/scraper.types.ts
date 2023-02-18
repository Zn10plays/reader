import {CurrentBookStatus} from "@/firebase/database.typs";

type Source = 'woopread' | 'genesistls' | 'novelupdates'

interface Scraper {
	getChapterList() : ChapterRef[]
	getChapterInfo(ref: ChapterRef) : ChapterInfo
	getNovelInfo(): CurrentBookStatus
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

export type { Source, Scraper, ChapterRef, ChapterInfo }