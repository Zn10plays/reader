// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getBookInfo from "@/scraper/sources";

type ResponseData = {
	message: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {

	if (!req.body?.novelUrl) {
		res.status(404)
			.send({message: 'improper request'})
		return;
	}

	const title = await getBookInfo(req.body.novelUrl)
	res.send({message: title});
}
