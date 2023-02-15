interface Book {
	name: string
	author: string
	source: string
	publicationDate: string
	initialRating: number
}

interface BookStatus extends Book {
	currentRating: number
	currentChapters: number
}

export type {
	Book,
	BookStatus
}