/**
 * 
 * @param {*} exp // expediteur
 * @param {*} destinataire // destinataire
 * @param {*} desc // descriptif
 * @param {*} dateCrea // date création 
 * @param {*} dateExe // date publication
 * @param {*} priority // priorité
 * @param {*} title // titre
 */

function Note(exp1,destinataire1,desc1,dateCrea1,dateExe1,priority1,title1){
    var exp=exp1,destinataire=destinataire1,desc=desc1,dateCrea=dateCrea1,dateExe=dateExe1,priority=priority1,title=title1;
    /**
     * mise a jour titre
     * @param {string} titre 
     */
    function updateTitre(titre){
        title=titre;
    }
    this.setTitle=updateTitre;
    /**
     * 
     * @param {string} description 
     */
    this.setPriority=function(description){
        desc=description
    }
    this.setThis=function(objetNoteFromJson){

    }
    this.getexpediteur=function(){
        return exp;
    }
    this.toJson=function(){
        return '{"expediteur":"'+exp+'","priorite":"'+priority+'","desc":"'+desc+'","titre":"'+title+'","dest":"'+destinataire+'"}'    
    }
}
var note=new Note()

Note.prototype.maValeur=1234;

