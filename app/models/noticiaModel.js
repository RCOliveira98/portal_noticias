module.exports = function() {
    this.getNoticiaById = function(conection, callback) {
        conection.query('select * from noticia where id = 2', callback);
    }

    this.getNoticiasAll = (conection, callback) => {
        conection.query('select * from noticia', callback);
    }

    this.saveNotice =  (new_notice, conection, callback) => {
        conection.query('insert into noticia set ?', new_notice, callback);
    }

    return this;
}