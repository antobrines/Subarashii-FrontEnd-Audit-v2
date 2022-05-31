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
            text_fr:"Vos données sont collectées par l'association Ynov ."
        },{
            text_fr:"Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale."
        },{
            text_fr:"Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes."
        },{
            text_fr:"Les données personnelles collectées sont les suivantes : "
        },{
            text_fr:"nom et prénom",
            class:"listElement"
        },{
            text_fr:"adresse mail",
            class:"listElement"
        },{
            text_fr:"date de naissance ",
            class:"listElement"
        },]
    },
    {
        id:8,
        title_fr:"Article 8 - Droit d’accès, de rectification et de déréférencement de vos données",
        paragraphs:[{
            text_fr:"En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :"
        },{
            text_fr:"le droit d’accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;",
            class:"listElement"
        },{
            text_fr:"le droit de rectification : si les données à caractère personnel détenues par la Plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;",
            class:"listElement"
        },{
            text_fr:"le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données ;",
            class:"listElement"
        },{
            text_fr:"le droit à la limitation du traitement : les utilisateurs peuvent de demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;",
            class:"listElement"
        },{
            text_fr:"le droit de s’opposer au traitement des données : les utilisateurs peuvent s’opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;",
            class:"listElement"
        },{
            text_fr:"le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les données personnelles qu'ils ont fournies pour les transmettre à une nouvelle Plateforme.",
            class:"listElement"
        },{
            text_fr:"Vous pouvez exercer ce droit en nous contactant, à l’adresse suivante : 27 Rue Raoul Servant 69007 Lyon."
        },{
            text_fr:"Ou par email, à l’adresse : remy.potus@ynov.com"
        },{
            text_fr:"Toute demande doit être accompagnée de la photocopie d’un titre d’identité en cours de validité signé et faire mention de l’adresse à laquelle l'éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l'exigent."
        },{
            text_fr:"De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les personnes qui le souhaitent, ont la possibilité d’organiser le sort de leurs données après leur décès. Pour plus d’information sur le sujet, vous pouvez consulter le site Internet de la CNIL : https://www.cnil.fr/."
        },{
            text_fr:"Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de la CNIL : https://www.cnil.fr."
        },{
            text_fr:"Nous vous recommandons de nous contacter dans un premier temps avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème."
        },]
    },
    {
        id:9,
        title_fr:"Article 9 - Utilisation des données",
        paragraphs:[{
            text_fr:"Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement sécurisé. La base légale des traitements est  l’exécution du contrat entre l’utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes :"
        },{
            text_fr:"accès et utilisation de la Plateforme par l'utilisateur ;",
            class:"listElement"
        },{
            text_fr:"gestion du fonctionnement et optimisation de la Plateforme ;",
            class:"listElement"
        },{
            text_fr:"mise en œuvre d'une assistance utilisateurs ;",
            class:"listElement"
        },{
            text_fr:"vérification, identification et authentification des données transmises par l'utilisateur ;",
            class:"listElement"
        },{
            text_fr:"personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur, selon ses préférences ;",
            class:"listElement"
        },{
            text_fr:"gestion des éventuels litiges avec les utilisateurs ;",
            class:"listElement"
        },{
            text_fr:"envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur ;",
            class:"listElement"
        },]
    },
    {
        id:10,
        title_fr:"Article 10 - Politique de conservation des données",
        paragraphs:[{
            text_fr:"La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance."
        },{
            text_fr:"Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécessaire, même après que vous ayez fermé votre compte ou que nous n'ayons plus besoin pour vous fournir nos services."
        },]
    },
    {
        id:11,
        title_fr:"Article 11- Partage des données personnelles avec des tiers",
        paragraphs:[{
            text_fr:"Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l’Union européenne, dans les cas suivants :"
        },{
            text_fr:"lorsque l'utilisateur publie, dans les zones de commentaires libres de la Plateforme, des informations accessibles au public ;",
            class:"listElement"
        },{
            text_fr:"quand l'utilisateur autorise le site web d'un tiers à accéder à ses données ;",
            class:"listElement"
        },{
            text_fr:"quand la Plateforme recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur, dans le cadre de l'exécution de ces prestations, et ont l'obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière protection des données à caractère personnel ;",
            class:"listElement"
        },{
            text_fr:"si la loi l'exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.",
            class:"listElement"
        },]
    },
    {
        id:12,
        title_fr:"Article 12 - Offres commerciales",
        paragraphs:[{
            text_fr:"Vous êtes susceptible de recevoir des offres commerciales de l'éditeur. Si vous ne le souhaitez pas, veuillez cliquer sur le lien suivant : /unsubscribe."
        },{
            text_fr:"Vos données sont susceptibles d’être utilisées par les partenaires de l'éditeur à des fins de prospection commerciale, si vous ne le souhaitez pas, veuillez cliquer sur le lien suivant : /unsubscribe."
        },{
            text_fr:"Si, lors de la consultation du site, vous accédez à des données à caractère personnel, vous devez vous abstenir de toute collecte, de toute utilisation non autorisée et de tout acte pouvant constituer une atteinte à la vie privée ou à la réputation des personnes. L'éditeur décline toute responsabilité à cet égard."
        },{
            text_fr:"Les données sont conservées et utilisées pour une durée conforme à la législation en vigueur."
        },]
    },
    {
        id:13,
        title_fr:"Article 13 - Cookies",
        paragraphs:[{
            text_fr:"Qu’est-ce qu’un « cookie » ?"
        },{
            text_fr:"Un « Cookie » ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone,…) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé (source : https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi)."
        },{
            text_fr:"Le site peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons."
        },{
            text_fr:"Le cas échéant, des « cookies » émanant de l'éditeur du site et/ou des sociétés tiers pourront être déposés sur votre terminal, avec votre accord. Dans ce cas, lors de la première navigation sur ce site, une bannière explicative sur l’utilisation des « cookies » apparaîtra. Avant de poursuivre la navigation, le client et/ou le prospect devra accepter ou refuser l’utilisation desdits « cookies ». Le consentement donné sera valable pour une période de treize (13) mois. L'utilisateur a la possibilité de désactiver les cookies à tout moment."
        },{
            text_fr:"Aucun cookie n'est présent sur le site pour le moment."
        },{
            text_fr:"La durée de vie de ces cookies est de treize mois."
        },]
    },
    {
        id:14,
        title_fr:"Article 14 - Photographies et représentation des produits",
        paragraphs:[{
            text_fr:"Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur."
        },]
    },
    {
        id:15,
        title_fr:"Article 15 - Loi applicable",
        paragraphs:[{
            text_fr:"Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier."
        },]
    },
    {
        id:16,
        title_fr:"Article 16 - Contactez-nous",
        paragraphs:[{
            text_fr:"Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante :  remy.potus@ynov.com"
        },]
    },
    ]
}
