interface BookData {
	name: string
	author: string
	source: string
	publicationDate: string
	initialRating: number
}

interface CurrentBookStatus extends BookData {
	Rating: number
	Chapters: number
}

export type {
	BookData,
	CurrentBookStatus
}