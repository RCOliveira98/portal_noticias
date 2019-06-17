function NoticiaDao(conection) {
    this._connect = conection;
}


NoticiaDao.prototype.getNoticiasAll = function (callback) {
   this._connect.query('select * from noticia', callback);
}

NoticiaDao.prototype.getNoticiaById = function(callback) {
    this._connect.query('select * from noticia where id = 2', callback);
}

NoticiaDao.prototype.saveNotice =  function(new_notice, callback) {
    this._connect.query('insert into noticia set ?', new_notice, callback);
}

module.exports = function() {
    return NoticiaDao;
}