const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout'
  })
})
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Halaman Contact Me',
    layout: 'layouts/main-layout'
  })
})
app.get('/project', (req, res) => {
  res.render('project', {
    title: 'Halaman Project Me',
    layout: 'layouts/main-layout'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})