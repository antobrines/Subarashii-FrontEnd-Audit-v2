import {Component} from '@angular/core';

@Component({
    selector: 'app-rgpd',
    templateUrl: './rgpd.component.html',
    styleUrls: ['./rgpd.component.css'],
})
export class RpgdComponent  {

    articles = [
    {
        id:1,
        title_fr:"Article 1 - Mentions légales",
        paragraphs:[{
            text_fr:"1.1 Site (ci-après «le site»)",
            class:"subtitle"
        },{
            text_fr:"Subarashii",
        },{
            text_fr:"1.2 Éditeur (ci-après l'éditeur»)",
            class:"subtitle"
        },{
            text_fr:"Etudiants d'Ynov",
        },{
            text_fr:"dont le siège social est situé 27 Rue Raoul Servant 69007 Lyon",
        },{
            text_fr:"n° de téléphone : 04 82 53 44 13",
        },{
            text_fr:"adresse mail : remy.potus@ynov.com",
        },{
            text_fr:"représentée par Rémy Potus, Etudiant",
        },{
            text_fr:"1.3 Hébergeur (ci-après « l'hébergeur ») : ",
            class:"subtitle"
        },{
            text_fr:"Subarashii n'est pas encore hébergé , dont le siège social est situé  .",
        },]
    },
    {
        id:2,
        title_fr:"Article 2 - Accès au site",
        paragraphs:[{
            text_fr:"L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités."
        },]
    },
    {
        id:3,
        title_fr:"Article 3 - Contenu du site",
        paragraphs:[{
            text_fr:"Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle."
        },{
            text_fr:"Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites."
        },]
    },
    {
        id:4,
        title_fr:"Article 4 - Gestion du site",
        paragraphs:[{
            text_fr:"Pour la bonne gestion du site, l'éditeur pourra à tout moment :"
        },]
    },
    {
        id:5,
        title_fr:"Article 5 - Responsabilités",
        paragraphs:[{
            text_fr:"Pour la bonne gestion du site, l'éditeur pourra à tout moment :"
        },{
            text_fr:"suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes ;",
            class:"listElement"
        },{
            text_fr:"supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;",
            class:"listElement"
        },{
            text_fr:"suspendre le site afin de procéder à des mises à jour.",
            class:"listElement"
        },]
    },        
    {
        id:6,
        title_fr:"Article 6 - Liens hypertextes",
        paragraphs:[{
            text_fr:"La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités."
        },{
            text_fr:"Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez."
        },{
            text_fr:"L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre :",
        },{
            text_fr:"du fait de l'usage du site ou de tout service accessible via Internet ;.",
            class:"listElement"
        },{
            text_fr:"du fait du non-respect par vous des présentes conditions générales.",
            class:"listElement"
        },{
            text_fr:"L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.",
        },{
            text_fr:"Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.",
        },]
        
        
    },
    {
        id:7,
        title_fr:"Article 7 - Collecte et protection des données",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:8,
        title_fr:"Article 8 - Droit d’accès, de rectification et de déréférencement de vos données",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:9,
        title_fr:"Article 9 - Utilisation des données",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:10,
        title_fr:"Article 10 - Politique de conservation des données",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:11,
        title_fr:"Article 11- Partage des données personnelles avec des tiers",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:12,
        title_fr:"Article 12 - Offres commerciales",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:13,
        title_fr:"Article 13 - Cookies",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:14,
        title_fr:"Article 14 - Photographies et représentation des produits",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:15,
        title_fr:"Article 15 - Loi applicable",
        paragraphs:[{
            text_fr:""
        },]
    },
    {
        id:15,
        title_fr:"Article 16 - Contactez-nous",
        paragraphs:[{
            text_fr:""
        },]
    },
    ]
}
