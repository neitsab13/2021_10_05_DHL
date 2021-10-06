function Note(){
    var exp,destinataire,desc,dateCrea,dateExe,priority,title;
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
var note=new Note();
