import koaRouter from 'koa-router'
const router = new koaRouter()

import UserModel from '../model/user.js'

router.prefix('/user')

router.get('/', async (ctx, next) => {
  const data = await UserModel.find()
  await ctx.render('user', {
    title: 'User List',
    data
  })
})

router.get('/insert', async (ctx, next) => {
  await ctx.render('insert', {
    title: 'User Add'
  })
})

router.post('/doInsert', async (ctx, next) => {
  const newUser = new UserModel({
    ...ctx.request.body
  })
  await newUser.save()

  ctx.redirect('/user')
})

router.get('/update', async (ctx, next) => {
  const { _id } = ctx.query
  const data = await UserModel.find({ _id })

  await ctx.render('update', {
    title: 'User Update',
    user: data[0]
  })
})

router.post('/doUpdate', async (ctx, next) => {
  const { _id, nickname, username, gender, age, email } = ctx.request.body
  const item = await UserModel.findByIdAndUpdate(
    { _id },
    { $set: { nickname, username, gender, age, email } }
  )
  if (item) ctx.redirect('/user')
})

router.get('/remove', async (ctx, next) => {
  const { _id } = ctx.query
  const item = await UserModel.findByIdAndDelete({ _id })
  if (item) ctx.redirect('/user')
})

export default router
