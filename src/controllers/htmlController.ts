import { NextFunction, Request, Response } from 'express'
import htmlService from '../service/htmlService'

class HtmlController {

    async addOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, name, settings, type, children } = req.body
            const html = await htmlService.createHtml(id, name, settings, type, children)
            return res.json(html)
        } catch (e) {
            next(e)
        }
    }

}

export default new HtmlController()
