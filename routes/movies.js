var express = require('express');
var router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const data = require('../movies_reduit.json')

/*GET movies listing. */
/*router.get('/',async function(req, res, next) {
  res.json(data);

});
*/

router.get('/',async function(req, res, next) {
  const movies = await prisma.movies.findMany({take: 10})
  const countMovies = await prisma.movies.count({})
  console.log(countMovies);
  res.send({
    data : movies,
    pagination : {
        count : countMovies, 
        take: req.query.take,   
        skip: req.query.skip   
    }
});

}); 

module.exports = router;