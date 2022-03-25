import path from 'path'
import * as uuid from 'uuid'
import {column, heading, rootElement, section} from '../utils'
import fs from 'fs'

export interface IChildren {
  id: string
  name: string
  settings: {
    text?: string
  },
  type: string,
  children: IChildren[]
}

class HtmlService {

  async createHtml(id: string, name: string, settings: object, type: string, children: IChildren[]) {

    const data = {id, name, settings, type, children}

    const generateName = () => {
      return uuid.v4() + '.html'
    }

    let result: string = ''

    const toHTML = (item: IChildren) => {

      switch (item.name) {
        case 'section':
          return  section(item.settings.text)

        case 'column':
          return  column(item.settings.text)

        case 'heading':
         return  heading(item.settings.text)

        default:
          return ''
      }

    }

      const recursion = (obj:IChildren) => {
        if (obj?.children?.length !== 0) {
          for (let key in obj.children) {
            result += (toHTML(obj.children[key]))
            recursion(obj.children[key])
          }
        }
      }

      // вызов функции для прохода по объекту и генерации HTML структуры
      recursion(data)

      // оборачиваем весь HTML в тег body
      const finalHTML = rootElement(result)

      // путь, куда запишется файл
      const finalPath = path.resolve(__dirname, `./../static/${generateName()}`)

      // запись файла
      function fileHandler(){
        fs.writeFile(finalPath, finalHTML, (err) => {
          if(err) throw err
        })
     }
     fileHandler()

    return finalHTML
  }
}

export default new HtmlService()


