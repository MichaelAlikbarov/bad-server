import { Router } from 'express'
import {
    createOrder,
    deleteOrder,
    getOrderByNumber,
    getOrderCurrentUserByNumber,
    getOrders,
    getOrdersCurrentUser,
    updateOrder,
} from '../controllers/order'
import auth, { roleGuardMiddleware } from '../middlewares/auth'
import { validateOrderBody } from '../middlewares/validations'
import { orderRateLimiter } from '../middlewares/rateLimit'
import { Role } from '../models/user'

const orderRouter = Router()

orderRouter.post('/', auth, validateOrderBody, orderRateLimiter, createOrder)
orderRouter.get('/all', auth, orderRateLimiter, getOrders)
orderRouter.get('/all/me', auth, orderRateLimiter, getOrdersCurrentUser)
orderRouter.get(
    '/:orderNumber',
    auth,
    roleGuardMiddleware(Role.Admin),
    orderRateLimiter,
    getOrderByNumber
)
orderRouter.get('/me/:orderNumber', auth, orderRateLimiter, getOrderCurrentUserByNumber)
orderRouter.patch(
    '/:orderNumber',
    auth,
    roleGuardMiddleware(Role.Admin),
    orderRateLimiter,
    updateOrder
)

orderRouter.delete('/:id', auth, orderRateLimiter, roleGuardMiddleware(Role.Admin), deleteOrder)

export default orderRouter
