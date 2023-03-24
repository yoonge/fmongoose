import koaRouter from 'koa-router'
const router = new koaRouter()

router.prefix('/users')

router.get('/', async (ctx, next) => {
  await ctx.render('users', {
    title: 'Users'
  })
})

router.get('/bar', async (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

export default router
