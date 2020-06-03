import express, { request } from 'express'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/itemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

//index, show, create, update, delete => eu uso essas funções nas controllers pra manter o padrão

routes.get('/items', itemsController.index); 

routes.post('/points', pointsController.create )
routes.get('/points', pointsController.index )
routes.get('/points/:id', pointsController.show )

export default routes