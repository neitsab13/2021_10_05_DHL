var Note = function () {
    this.destinataire = '';
    this.expediteur = '';
    this.priorite = 'LOW';
    this.dateCrea = new Date;
    this.dateCible = new Date;
    this.description = '';
    this.titre = '';

}

var Notes = function () {
    var _liste = [];
    this.push = function (note) {
        // checker si le param est bien une note de classe
        if (note instanceof Note) {
            return _liste.push(note);
        }
        else {
            return _liste.length;
        }
    }
    this.find = function (titre) {
        return _liste.find(function (elementdeliste) {
            return elementdeliste.titre === titre
        });

    }
    this.indexliste = function (titre) {
        return _liste.findindex(function (elementdeliste) {
            return elementdeliste.titre === titre
        })
    }
    this.get = function (index) {
        return _liste[index];
    }



}
var notes = new Notes
