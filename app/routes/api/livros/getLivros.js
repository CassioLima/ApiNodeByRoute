const Router = require('express').Router

module.exports = Router({mergeParams: true})
.get('/v1/livros', async (req, res, next) => {

    try{
        req.logger.info('consultando registros');
        req.db.all('select * from livro', (error, data) =>{
            res.send(data);
        })
    }
    catch(error){
        next(error)
    }   
})

