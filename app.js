const kazumi = {
    nom:"kazumi",
    sante: 200,
    force:30,
    xp:0,
}

console.log(`${kazumi.nom} a ${kazumi.sante} point de vie et ${kazumi.force}en force et ${kazumi.xp}`);

console.log("kazumi est blessée par un combattant puissant");
kazumi.sante = kazumi.sante -15;

console.log("kazumi trouve de la force grâce a son tigre qui l'aide");
kazumi.sante = kazumi.sante + 20;

console.log(`${kazumi.nom} a ${kazumi.sante} point de vie et ${kazumi.force} en force`);

//renvoi la descritption du perso

function decrire(personnage){
    return `${personnage.nom} a ${personnage.sante} point de vie et ${personnage.force} en force`;

}
console.log(decrire(kazumi));

//mot cle this

const kazumi = {
    nom:"kazumi",
    sante: 200,
    force:30,
    xp:0,

    decrire(){
        return `${this.nom} a ${this.sante} point de vie et ${this.force} force et ${this.xp} points d'expérience`;
    }
};

console.log(kazumi.decrire());

console.log("kazumi apprend une nouvelle compétence");
kazumi.xp += 20;

console.log(kazumi.decrire());

const yaoi = {
    nom:"Yaoi",
    sante:150,
    force:40,
    xp:0,


decrire(){
    return `${this.nom} a ${this.sante} point de vie, ${this.force}en force et ${this.xp} points d'espérience`;
}
};

const kazumi = new Personnage("kazumi",200,30);
const yaoi = new Personnage("yaoi",150,40);
console.log(kazumi.decrire());
console.log(yaoi.decrire());

class Personnage{
    constructor(nom,sante,force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;

    }
    attaquer(cible){
        if(this.sante>0){
            const degats = this.force;
            console.log(
                `${this.nom} attaque ${cible.nom} et lui inflige${degats} points de degats`);
                cible.sante -= degats;
                if(cible.sante >0){
                    console.log(`${cible.nom} a encore ${cible.sante} point de vie`);
                } else {
                    cible.sante = 0;
                    const bonusXP = 10;
                    console.log(`${this.nom} a tue ${cible.nom} et gagne ${bonusXP} points d'expérience`);
                    this.xp += bonusXP;
                }
            }else{
                console.log(`${this.nom} n'a plus de points de vie et ne pas pas attaquer`);
                }
            }

        }
        class Personnage {
            constructor(nom, sante, force) {
              this.nom = nom;
              this.sante = sante;
              this.force = force;
              this.xp = 0; // Toujours 0 au début
            }
            // Attaque une cible
            attaquer(cible) {
              if (this.sante > 0) {
                const degats = this.force;
                console.log(
                  `${this.nom} attaque ${
                    cible.nom
                  } et lui inflige ${degats} points de dégâts`
                );
                cible.sante -= degats;
                if (cible.sante > 0) {
                  console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
                } else {
                  cible.sante = 0;
                  const bonusXP = 10;
                  console.log(
                    `${this.nom} a tué ${
                      cible.nom
                    } et gagne ${bonusXP} points d'expérience`
                  );
                  this.xp += bonusXP;
                }
              } else {
                console.log(
                  `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
                );
              }
            }
            // Renvoie la description du personnage
            decrire() {
              return `${this.nom} a ${this.sante} points de vie, ${
                this.force
              } en force et ${this.xp} points d'expérience`;
            }
          }


          const kazumi = new Personnage("kazumi", 200, 30);
          const yaoi = new Personnage("yaoi", 150, 40);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(kazumi.decrire());
console.log(yaoi.decrire());

const monstre = new Personnage("Diablo", 40, 20);
console.log(`Un affreux monstre arrive : il s'appelle ${monstre.nom}`);

monstre.attaquer(kazumi);
monstre.attaquer(yaoi);
kazumi.attaquer(monstre);
yaoi.attaquer(monstre);

console.log(kazumi.decrire());
console.log(yaoi.decrire());


