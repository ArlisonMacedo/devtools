import {Request, Response} from 'express'
import connection from '../database/connection'

export default {
  async index(request: Request, response: Response){

    const {tag} = request.query

    if(tag){
      const tools = await connection('tools')
        .whereRaw(`'${tag}' = ANY (tags)`)
      
      return response.json(tools)
    }

    
      const tools = await connection('tools').select('*')
  
      return response.json(tools)

    
  },
  async create(request: Request, response: Response){

    const {
      title,
      link,
      description,
      tags
    } = request.body

    const data = {
      title,
      link,
      description,
      tags
    }
    const id = await connection('tools').insert(data)

    return response.json(id)

  },
  async delete(request: Request, response: Response){

    const {id} = request.params
    const tool = await connection('tools')
      .where('id',String(id))
      .select('*')
      .first()

    if(tool){
      await connection('tools')
      .where('id', id)
      .delete()
      return response.status(204).send()
    }else{
      return response.json({
        message: 'This id not exist'
      })
    }
  }
}