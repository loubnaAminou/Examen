var express = require('express');
var router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/*GET movies listing. */
router.get('/',async function(req, res, next) {
  const filePath = "../movies_reduit.json";
  
  res.json(JSON.parse(fs.readFileSync(filePath)));

});

/* */

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