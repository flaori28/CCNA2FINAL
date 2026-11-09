const allQuestions = [
    {
        "id":  1,
        "original_id":  1,
        "question":  "Dans quelle situation un technicien utilise-t-il la commande de commutateur show interfaces ?",
        "options":  [
                        "Pour déterminer l’adresse MAC d’un périphérique réseau directement connecté sur une interface donnée",
                        "Lorsque des paquets sont reçus d’un hôte donné qui est directement connecté",
                        "Lorsqu’un terminal peut atteindre les périphériques locaux, et non les périphériques distants",
                        "Pour déterminer si l’accès à distance est activé"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  2,
        "original_id":  2,
        "type": "match",
        "question":  "Faites correspondre le numéro d’étape à la séquence des étapes qui se produisent pendant le processus de basculement HSRP.",
        "match_pairs": [
            { "term": "Étape 1", "definition": "Le routeur de transfert échoue." },
            { "term": "Étape 2", "definition": "Le routeur en veille cesse de voir les messages Hello du routeur de transfert." },
            { "term": "Étape 3", "definition": "Le routeur de secours assume le rôle du routeur de transfert en utilisant à la fois les adresses IP et MAC du routeur virtuel." }
        ],
        "options": [],
        "correct": [],
        "explanation":  "Lorsque le routeur actif HSRP tombe en panne, le routeur de secours cesse de recevoir les paquets Hello. Il passe alors à l'état actif et prend en charge le trafic destiné à l'adresse virtuelle.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2024-10-16_102955.jpg"
    },
    {
        "id":  3,
        "original_id":  3,
        "question":  "Reportez-vous à l’illustration. Un administrateur tente de configurer une route statique IPv6 sur le routeur R1 pour atteindre le réseau connecté au routeur R2. Après la saisie de la commande de la route statique, la connectivité au réseau est toujours défaillante. Quelle erreur a été effectuée dans la configuration de la route statique ?",
        "options":  [
                        "L’adresse du tronçon suivant est incorrecte.",
                        "Le réseau de destination est incorrect.",
                        "L’interface est incorrecte.",
                        "Le préfixe réseau est incorrect."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication : Dans cet exemple, l’interface de la route statique est incorrecte. L’interface doit être l’interface de sortie sur R1, qui est s0/0/0.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_221514.jpg"
    },
    {
        "id":  4,
        "original_id":  4,
        "question":  "Un nouveau commutateur de couche 3 est connecté à un routeur et est en cours de configuration pour le routage InterVLAN. Quelles sont les trois étapes requises pour la configuration? (Choisissez trois propositions.)",
        "options":  [
                        "Attribution des ports au VLAN natif",
                        "la mise en œuvre des protocoles de routage",
                        "Attribution de ports aux VLAN",
                        "Activation du routage IP",
                        "Création d’interfaces SVI",
                        "Installation d’une route statique",
                        "Modification du VLAN par défaut"
                    ],
        "correct":  [
                        2,
                        3,
                        4
                    ],
        "explanation":  "Explication : Étape 1. Créez les VLAN. Étape 2. Créez les interfaces SVI VLAN. Étape 3. Configurez les ports d’accès. Attribuez-les à leurs VLAN respectifs. Étape 4. Activez le routage IP.",
        "image":  null
    },
    {
        "id":  5,
        "original_id":  5,
        "question":  "Reportez-vous à l’illustration. En fonction de la configuration et de la sortie présentées, pourquoi manque-t-il le VLAN 99 ?",
        "options":  [
                        "Parce qu’il y a un problème de câblage sur le VLAN 99",
                        "Parce que le VLAN 1 est activé et qu’il ne peut y avoir qu’un VLAN de gestion sur le commutateur",
                        "Parce que le VLAN 99 n’est pas un VLAN de gestion valide",
                        "Parce que le VLAN 99 n’a pas encore été créé"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_221532.jpg"
    },
    {
        "id":  6,
        "original_id":  6,
        "question":  "Quelles paires de modes d’agrégation établissent une liaison agrégée fonctionnelle entre deux commutateurs Cisco ? (Choisissez trois réponses.)",
        "options":  [
                        "dynamic auto – dynamic auto",
                        "dynamic desirable – dynamic desirable",
                        "dynamic desirable – trunk",
                        "dynamic desirable – dynamic auto",
                        "access – dynamic auto",
                        "access – trunk"
                    ],
        "correct":  [
                        1,
                        2,
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  7,
        "original_id":  7,
        "question":  "Quel protocole ou technologie nécessite que les commutateurs soient en mode serveur ou client?",
        "options":  [
                        "Protocole VTP",
                        "HSRP",
                        "EtherChannel",
                        "DTP"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  8,
        "original_id":  8,
        "question":  "Examinez l’illustration. Après avoir essayé de saisir la configuration affichée dans le routeur RTA, un administrateur reçoit une erreur et les utilisateurs du VLAN 20 signalent qu’ils ne peuvent pas communiquer avec les utilisateurs du VLAN 30. Quelle est l’origine du problème ?",
        "options":  [
                        "La commande no shutdown aurait dû être exécutée sur Fa0/0.20 et Fa0/0.30.",
                        "RTA utilise le même sous-réseau pour le VLAN 20 et le VLAN 30.",
                        "Fa0/0 ne contient aucune adresse à utiliser comme passerelle par défaut.",
                        "Dot1q ne prend pas en charge les sous-interfaces."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_221548.jpg"
    },
    {
        "id":  9,
        "original_id":  9,
        "question":  "Quels sont les deux modes VTP qui permettent la création, la modification et la suppression des VLAN sur le commutateur local ? (Choisissez deux propositions.)",
        "options":  [
                        "client",
                        "distribution",
                        "principal",
                        "serveur",
                        "esclave",
                        "transparent"
                    ],
        "correct":  [
                        3,
                        5
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  10,
        "original_id":  10,
        "question":  "Reportez-vous à l’illustration. Un administrateur réseau configure R1 pour le routage inter-VLAN entre VLAN 10 et VLAN 20. Toutefois, les périphériques du VLAN 10 et du VLAN 20 ne peuvent pas communiquer. Selon la configuration de l’exposition, quelle est la cause possible du problème?",
        "options":  [
                        "L’encapsulation est mal configurée sur une sous-interface.",
                        "Une commande no shutdown doit être ajoutée dans chaque configuration de sous-interface.",
                        "La commande interface gigabitEthernet 0/0.1 est faux.",
                        "Le port Gi0/0 doit être configuré comme port de jonction."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_221606.jpg"
    },
    {
        "id":  11,
        "original_id":  11,
        "question":  "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l’administrateur utiliserait-il un contrôleur WLAN?",
        "options":  [
                        "pour centraliser la gestion de plusieurs réseaux WLAN",
                        "fournir un service prioritaire pour les applications sensibles au temps",
                        "pour réduire le risque d’ajout de points d’accès non autorisés au réseau",
                        "pour faciliter la configuration de groupe et la gestion de plusieurs WLAN via un WLC"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  12,
        "original_id":  12,
        "type": "match",
        "question":  "Associez la description au type de VLAN correct.",
        "match_pairs": [
             { "term": "VLAN de données", "definition": "Transporte le trafic généré par l’utilisateur." },
             { "term": "VLAN par défaut", "definition": "Tous les ports de commutateur y appartiennent après le démarrage initial." },
             { "term": "VLAN natif", "definition": "Transporte le trafic non balisé sur un port de jonction 802.1Q." },
             { "term": "VLAN de gestion", "definition": "Configuré pour accéder aux capacités de gestion d’un commutateur (HTTP/SSH)." }
        ],
        "options": [],
        "correct": [],
        "explanation":  "Explication : Un VLAN de données est configuré pour transporter le trafic généré par l’utilisateur. Un VLAN par défaut est le VLAN auquel appartiennent tous les ports de commutateur après le démarrage initial d’un commutateur chargeant la configuration par défaut. Un VLAN natif est affecté à un port de jonction 802.1Q et le trafic non balisé y est placé. Un VLAN de gestion est tout VLAN configuré pour accéder aux capacités de gestion d’un commutateur.",
        "image":  [
            "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_222545.jpg",
            "https://ccnareponses.com/wp-content/uploads/2021/12/2024-10-15_185331.jpg"
        ]
    },
    {
        "id":  13,
        "original_id":  13,
        "question":  "Examinez l’illustration. Comment une trame envoyée depuis PCA est-elle transmise à PCC si la table d’adresses MAC du commutateur SW1 est vide ?",
        "options":  [
                        "SW1 abandonne la trame car il ne connaît pas l’adresse MAC de destination.",
                        "SW1 diffuse la trame sur tous les ports de SW1, à l’exception du port d’entrée de la trame dans le commutateur.",
                        "SW1 diffuse la trame sur tous les ports du commutateur, à l’exception du port interconnecté au commutateur SW2 et du port d’entrée de la trame dans le commutateur.",
                        "SW1 transmet la trame directement à SW2. SW2 diffuse la trame sur tous les ports connectés à SW2, à l’exception du port d’entrée de la trame dans le commutateur."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explication : Lorsqu’un commutateur s’allume, la table d’adresses MAC est vide. Le commutateur construit la table d’adresses MAC en examinant l’adresse MAC source des trames entrantes. Le commutateur transfère en fonction de l’adresse MAC de destination trouvée dans l’en-tête de la trame. Si un commutateur n’a aucune entrée dans la table d’adresses MAC ou si l’adresse MAC de destination n’est pas dans la table de commutateurs, le commutateur transférera la trame vers tous les ports, à l’exception du port qui a amené la trame dans le commutateur.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_222651.jpg"
    },
    {
        "id":  14,
        "original_id":  14,
        "type": "match",
        "question":  "Associez l’état de la liaison au statut d’interface et de protocole.",
        "match_pairs": [
             { "term": "Désactivée administrativement", "definition": "Interface: down / Protocol: down (Désactivée)" },
             { "term": "Couche 1 inactive", "definition": "Interface: down / Protocol: down (Problème câble/physique)" },
             { "term": "Couche 2 inactive", "definition": "Interface: up / Protocol: down (Problème encapsulation/clock rate)" },
             { "term": "Opérationnelle", "definition": "Interface: up / Protocol: up" }
        ],
        "options": [],
        "correct": [],
        "explanation":  "1. Admin Down: Interface shutdown. 2. Layer 1 Issue: Câble débranché/mauvais type. 3. Layer 2 Issue: Mismatched encapsulation/clock rate/keepalives. 4. Operational: Tout fonctionne.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2024-10-15_201613.jpg"
    },
    {
        "id":  15,
        "original_id":  15,
        "question":  "Quel est le moyen d’avoir une configuration sécurisée pour l’accès à distance à un appareil sur le réseau ?",
        "options":  [
                        "Configurer SSH.",
                        "Configurer Telnet.",
                        "Configurer une ACL et l’appliquer aux lignes VTY.",
                        "Configurez 802.1x."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  16,
        "original_id":  16,
        "question":  "Examinez l’illustration. L’hôte A a envoyé un paquet à l’hôte B. Quelles sont les adresses IP et MAC source sur le paquet lorsqu’il atteint l’hôte B ?",
        "options":  [
                        "MAC source : 00E0.FE10.17A3\nIP source : 192.168.1.1",
                        "MAC source : 00E0.FE10.17A3\nIP source : 10.1.1.10",
                        "MAC source : 00E0.FE91.7799\nIP source : 192.168.1.1",
                        "MAC source : 00E0.FE91.7799\nIP source : 10.1.1.10",
                        "MAC source : 00E0.FE91.7799\nIP source : 10.1.1.1"
                    ],
        "correct":  [

                    ],
        "explanation":  "Explication : Au fur et à mesure qu’un paquet traverse le réseau, les adresses de couche 2 changeront à chaque saut à mesure que le paquet est désencapsulé et réencapsulé, mais les adresses de couche 3 resteront les même.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_222840.jpg"
    },
    {
        "id":  17,
        "original_id":  17,
        "question":  "Reportez-vous à l’illustration. Quels sont les rôles possibles pour les ports A, B, C et D dans ce réseau RSTP ?",
        "options":  [
                        "Désigné, racine, alternatif, racine",
                        "Désigné, alternatif, racine, racine",
                        "Alternatif, désigné, racine, racine",
                        "Alternatif, racine, désigné, racine"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication : Étant donné que S1 est le pont racine, B est un port désigné et les ports racine C et D. RSTP prend en charge un nouveau type de port, un autre port en état de rejet, qui peut être le port A dans ce scénario.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-23_164220.png"
    },
    {
        "id":  18,
        "original_id":  18,
        "question":  "Plusieurs actions peuvent pallier une attaque de VLAN. Citez-en trois. (Choisissez trois propositions.)",
        "options":  [
                        "Activer la fonction de protection BPDU.",
                        "Utiliser des VLAN privés.",
                        "Activer manuellement le trunking.",
                        "Faire d’un VLAN inutilisé le VLAN natif.",
                        "Désactiver le protocole DTP.",
                        "Activer la fonction de protection de source."
                    ],
        "correct":  [
                        2,
                        3,
                        4
                    ],
        "explanation":  "Explication : L’atténuation d’une attaque de VLAN peut être effectuée en désactivant le protocole DTP (Dynamic Trunking Protocol), en définissant manuellement les ports en mode de jonction et en définissant le VLAN natif des liaisons de jonction vers des VLAN qui ne sont pas en utiliser.",
        "image":  null
    },
    {
        "id":  19,
        "original_id":  19,
        "question":  "Quelle méthode de chiffrement sans fil offre la meilleure sécurité ?",
        "options":  [
                        "WPA2 avec AES",
                        "WPA2 avec TKIP",
                        "WEP",
                        "WPA"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  20,
        "original_id":  20,
        "question":  "Après qu’un hôte a généré une adresse IPv6 à l’aide du processus DHCPv6 ou SLAAC, comment l’hôte vérifie-t-il que l’adresse est unique et donc utilisable?",
        "options":  [
                        "L’hôte envoie un message de demande d’écho ICMPv6 à l’adresse DHCPv6 ou SLAAC apprise et si aucune réponse n’est renvoyée, l’adresse est considérée comme unique.",
                        "L’hôte vérifie le cache du voisin local pour l’adresse apprise et si l’adresse n’est pas mise en cache, il est considéré comme unique.",
                        "L’hôte envoie une diffusion ARP vers le lien local et si aucun hôte n’envoie de réponse, l’adresse est considérée comme unique.",
                        "L’hôte envoie un message de sollicitation de voisin ICMPv6 à l’adresse DHCP ou SLAAC apprise et si aucune annonce de voisin n’est renvoyée, l’adresse est considérée comme unique."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : Avant qu’un hôte puisse réellement configurer et utiliser une adresse IPv6 apprise via SLAAC ou DHCP, l’hôte doit vérifier qu’aucun autre hôte n’utilise déjà cette adresse. Pour vérifier que l’adresse est bien unique, l’hôte envoie une sollicitation de voisin ICMPv6 à l’adresse. Si aucune annonce de voisin n’est renvoyée, l’hôte considère l’adresse comme unique et la configure sur l’interface.",
        "image":  null
    },
    {
        "id":  21,
        "original_id":  21,
        "question":  "Un administrateur tente de supprimer des configurations d’un commutateur. Après avoir exécuté la commande erase startup-config et rechargé le commutateur, l’administrateur constate que les VLAN 10 et 100 existent toujours dans le commutateur. Pourquoi ces VLAN n’ont-ils pas été supprimés ?",
        "options":  [
                        "Ces VLAN étant enregistrés dans un fichier appelé vlan.dat qui se trouve dans la mémoire Flash, ce fichier doit être supprimé manuellement.",
                        "Ces VLAN ne peuvent pas être supprimés, sauf si le commutateur est en mode client VTP.",
                        "Ces VLAN peuvent être uniquement supprimés du commutateur au moyen des commandes no vlan 10 et no vlan 100 .",
                        "Ces VLAN sont des VLAN par défaut et ne peuvent pas être supprimés."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explication : Les VLAN de plage standard (1-1005) sont stockés dans un fichier appelé vlan.dat qui se trouve dans la mémoire flash. L’effacement de la configuration de démarrage et le rechargement d’un commutateur ne suppriment pas automatiquement ces VLAN. Le fichier vlan.dat doit être supprimé manuellement de la mémoire flash, puis le commutateur doit être rechargé.",
        "image":  null
    },
    {
        "id":  22,
        "original_id":  22,
        "question":  "Examinez l’illustration. Un administrateur réseau configure le routage inter-VLAN sur un réseau. Pour l’instant, un seul VLAN est utilisé, mais d’autres seront ajoutés prochainement. Quel est le rôle du paramètre manquant, indiqué par un point d’interrogation mis en surbrillance dans l’illustration ?",
        "options":  [
                        "Il identifie le numéro du VLAN.",
                        "Il identifie la sous-interface.",
                        "Il identifie le numéro du VLAN natif.",
                        "Il identifie le type d’encapsulation utilisé.",
                        "Il identifie le nombre d’hôtes autorisés sur l’interface."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_223727.jpg"
    },
    {
        "id":  23,
        "original_id":  23,
        "question":  "Après avoir attaché quatre PC aux ports du commutateur, configuré le SSID et défini les propriétés d’authentification pour un petit réseau de bureau, un technicien teste avec succès la connectivité de tous les PC connectés au commutateur et au WLAN. Un pare-feu est ensuite configuré sur le périphérique avant de le connecter à Internet. Quel type de périphérique réseau inclut toutes les fonctionnalités décrites?",
        "options":  [
                        "commutateur",
                        "pare-feu",
                        "point d’accès sans fil autonome",
                        "routeur sans fil"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  24,
        "original_id":  24,
        "type": "match",
        "question":  "Associez les types de message DHCP à l’ordre du processus DHCPv4.",
        "match_pairs": [
             { "term": "Étape 1", "definition": "DHCPDISCOVER (Diffusion client)" },
             { "term": "Étape 2", "definition": "DHCPOFFER (Unicast serveur)" },
             { "term": "Étape 3", "definition": "DHCPREQUEST (Diffusion client)" },
             { "term": "Étape 4", "definition": "DHCPACK (Unicast serveur)" }
        ],
        "options": [],
        "correct": [],
        "explanation":  "Le processus suit DORA : Discover -> Offer -> Request -> Acknowledge.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2024-10-15_161502.jpg"
    },
    {
        "id":  25,
        "original_id":  25,
        "question":  "Examinez l’illustration. En plus des routes statiques qui dirigent le trafic vers les réseaux 10.10.0.0/16 et 10.20.0.0/16, le routeur HQ est configuré avec la commande suivante :",
        "options":  [
                        "Les paquets dont le réseau de destination n’est ni 10.10.0.0/16 ni 10.20.0.0/16, ou dont le réseau de destination n’est pas connecté directement seront transférés à Internet.",
                        "Les paquets reçus depuis Internet seront transférés à l’un des LAN connectés à R1 ou à R2.",
                        "Les paquets destinés aux réseaux qui ne figurent pas dans la table de routage de HQ seront abandonnés.",
                        "Les paquets provenant du réseau 10.10.0.0/16 seront transférés au réseau 10.20.0.0/16, et les paquets provenant du réseau 10.20.0.0/16 seront transférés au réseau 10.10.0.0/16."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_224526.jpg"
    },
    {
        "id":  26,
        "original_id":  26,
        "question":  "Examinez l’illustration. Quelle adresse MAC de destination est utilisée lorsque des trames sont envoyées depuis la station de travail vers la passerelle par défaut ?",
        "options":  [
                        "Les adresses MAC du routeur de transfert et du routeur en veille.",
                        "L’adresse MAC du routeur de transfert",
                        "L’adresse MAC du routeur en veille",
                        "L’adresse MAC du routeur virtuel"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : L’adresse IP du routeur virtuel fait office de passerelle par défaut pour tous les postes de travail. Par conséquent, l’adresse MAC renvoyée par le protocole de résolution d’adresse au poste de travail sera l’adresse MAC du routeur virtuel.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_225318.jpg"
    },
    {
        "id":  27,
        "original_id":  27,
        "question":  "Reportez-vous à l’illustration. Un administrateur réseau a relié deux commutateurs via la technologie EtherChannel. Si le protocole STP fonctionne, quel sera le résultat final ?",
        "options":  [
                        "Les commutateurs équilibreront la charge et utiliseront les deux EtherChannels pour transférer les paquets.",
                        "La boucle générée créera une tempête de diffusion.",
                        "STP bloquera une des liaisons redondantes.",
                        "Les deux canaux de port seront fermés."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication : Les commutateurs Cisco prennent en charge deux protocoles pour négocier un canal entre deux commutateurs : LACP et PAgP. PAgP est la propriété de Cisco. Dans la topologie illustrée, les commutateurs sont connectés entre eux à l’aide de liens redondants. Par défaut, STP est activé sur les commutateurs. STP bloquera les liens redondants pour éviter les boucles.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_225512.jpg"
    },
    {
        "id":  28,
        "original_id":  28,
        "question":  "Reportez-vous à l’illustration. Quelle route statique un technicien informatique doit-il saisir pour créer une route de secours vers le réseau 172.16.1.0 qui sera utilisée uniquement en cas de défaillance de la route principale associée à RIP ?",
        "options":  [
                        "ip route 172.16.1.0 255.255.255.0 s0/0/0 121",
                        "ip route 172.16.1.0 255.255.255.0 s0/0/0 111",
                        "ip route 172.16.1.0 255.255.255.0 s0/0/0 91",
                        "ip route 172.16.1.0 255.255.255.0 s0/0/0"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explication : Une route statique de sauvegarde est appelée une route statique flottante. Une route statique flottante a une distance administrative supérieure à la distance administrative d’une autre route statique ou route dynamique.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_225649.jpg"
    },
    {
        "id":  29,
        "original_id":  29,
        "question":  "Quel est l’effet de l’entrée de la commande de configuration shutdown sur un commutateur?",
        "options":  [
                        "Il active portfast sur une interface de commutateur spécifique.",
                        "Il désactive un port inutilisé.",
                        "Il désactive le DTP sur une interface non-trunking.",
                        "Il active la garde BPDU sur un port spécifique."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  30,
        "original_id":  30,
        "question":  "Quelles sont les trois normes Wi-Fi fonctionnant dans la plage de fréquences 2,4 GHz ? (Choisissez trois réponses.)",
        "options":  [
                        "802.11b",
                        "802.11a",
                        "802.11ac",
                        "802.11n",
                        "802.11g"
                    ],
        "correct":  [
                        0,
                        3,
                        4
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  31,
        "original_id":  31,
        "question":  "Un technicien réseau dépanne un réseau sans fil venant d’être déployé et utilisant les normes 802.11 les plus récentes. Lorsque les utilisateurs accèdent à des services gourmands en bande passante tels que la vidéo sur Internet, les performances du réseau sans fil sont médiocres. Pour améliorer les performances, le technicien réseau décide de configurer un SSID avec une bande de fréquences de 5 GHz et de former les utilisateurs à employer ce SSID pour les services multimédias de transmission en continu. En quoi cette solution permet-elle d’améliorer les performances du réseau sans fil pour ce type de service ?",
        "options":  [
                        "La bande 5 GHz offre une plage plus étendue et est donc susceptible de ne pas comporter d’interférences.",
                        "La bande 5 GHz offre davantage de canaux et est moins encombrée que la bande 2,4 GHz. Elle convient donc mieux à la transmission multimédia en continu.",
                        "Obliger les utilisateurs à passer à la bande 5 GHz pour la transmission multimédia en continu est peu pratique et limite le nombre d’utilisateurs accédant à ces services.",
                        "Les seuls utilisateurs pouvant basculer vers la bande 5 GHz sont ceux disposant des cartes réseau les plus récentes, ce qui permet de limiter l’utilisation."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explication : La portée sans fil est déterminée par l’antenne du point d’accès et la puissance de sortie, et non par la bande de fréquence utilisée. Dans ce scénario, il est indiqué que tous les utilisateurs disposent de cartes réseau sans fil conformes à la dernière norme et que tous peuvent donc accéder à la bande 5 GHz. Bien que certains utilisateurs puissent trouver gênant de passer à la bande 5 Ghz pour accéder aux services de streaming, c’est le plus grand nombre de canaux, pas seulement moins d’utilisateurs, qui améliorera les performances du réseau.",
        "image":  null
    },
    {
        "id":  32,
        "original_id":  32,
        "question":  "Sélectionnez les trois modes d’établissement de canaux PAgP. (Choisissez trois propositions.)",
        "options":  [
                        "actif",
                        "étendu",
                        "Activé",
                        "desirable",
                        "automatique",
                        "passif"
                    ],
        "correct":  [
                        2,
                        3,
                        4
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  33,
        "original_id":  33,
        "question":  "Reportez-vous à l’illustration. L’administrateur réseau est en train de configurer la fonction de sécurité du port sur le commutateur SWC. L’administrateur a émis la commande show port-security interface fa 0/2 pour vérifier la configuration. Que peut-on conclure de la sortie qui est montrée? (Choisissez trois propositions.)",
        "options":  [
                        "Le port est configuré en tant que liaison de trunk.",
                        "Les violations de sécurité entraîneront l’arrêt immédiat de ce port.",
                        "Ce port est actuellement en service.",
                        "Le mode de port de commutation pour cette interface est le mode d’accès.",
                        "Trois violations de sécurité ont été détectées sur cette interface.",
                        "Aucun périphérique n’est actuellement connecté à ce port."
                    ],
        "correct":  [
                        1,
                        2,
                        3
                    ],
        "explanation":  "Explication : Étant donné que le nombre de violations de sécurité est à 0, aucune violation ne s’est produite. Le système montre que 3 adresses MAC sont autorisées sur le port fa0/2, mais une seule a été configurée et aucune adresse MAC persistante n’a été apprise. Le port est actif en raison de l’état du port sécurisé. Le mode de violation est ce qui se produit lorsqu’un périphérique non autorisé est connecté au port. Un port doit être en mode accès pour activer et utiliser la sécurité du port.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_230812.jpg"
    },
    {
        "id":  34,
        "original_id":  34,
        "question":  "Quel protocole doit être désactivé pour pallier les attaques de VLAN ?",
        "options":  [
                        "CDP",
                        "STP",
                        "DTP",
                        "ARP"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  35,
        "original_id":  35,
        "question":  "Quelle technique d’atténuation empêcherait les serveurs malveillants de fournir de faux paramètres de configuration IP aux clients ?",
        "options":  [
                        "mise en œuvre des solutions de sécurisation des ports",
                        "mise en œuvre de la sécurité des ports sur les ports périphériques",
                        "désactivation des ports CDP sur les ports périphériques",
                        "activation de l’espionnage DHCP"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  36,
        "original_id":  36,
        "question":  "Quelle méthode d’attribution de préfixe IPv6 repose sur le préfixe contenu dans les messages RA?",
        "options":  [
                        "statique",
                        "DHCPv6 dynamique",
                        "SLAAC",
                        "EUI-64"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  37,
        "original_id":  37,
        "question":  "Un analyste de la cybersécurité utilise l’outil macof pour évaluer la configuration des commutateurs déployés dans le réseau de base d’une organisation. Quel type d’attaque LAN l’analyste cible-t-il au cours de cette évaluation?",
        "options":  [
                        "Usurpation DHCP (ou spoofing)",
                        "Sauts VLAN",
                        "Débordement de la table d’adresses IP",
                        "Double marquage VLAN"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  38,
        "original_id":  38,
        "question":  "Au cours du processus AAA, quand l’autorisation est-elle implémentée ?",
        "options":  [
                        "dès que la fonction de traçabilité et d’audit AAA a reçu des rapports détaillés",
                        "immédiatement après une authentification réussie auprès d’une source de données AAA",
                        "aussitôt qu’un client AAA a envoyé des informations d’authentification à un serveur centralisé",
                        "dès que les ressources accessibles à un utilisateur ont été déterminées"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Expliquer : A. L’autorisation AAA est mise en œuvre immédiatement après l’authentification de l’utilisateur par rapport à une source de données AAA spécifique.",
        "image":  null
    },
    {
        "id":  39,
        "original_id":  39,
        "question":  "Examinez l’illustration. Un ingénieur réseau configure le routage IPv6 sur le réseau. Quelle commande exécutée sur le routeur HQ permet de configurer une route par défaut vers Internet en vue de transférer les paquets vers un réseau de destination IPv6 qui n’est pas répertorié dans la table de routage ?​",
        "options":  [
                        "ipv6 route ::/0 serial 0/0/0",
                        "ipv6 route ::/0 serial 0/1/1",
                        "ipv6 route ::1/0 serial 0/1/1",
                        "ip route 0.0.0.0 0.0.0.0 serial 0/1/1"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_231809.jpg"
    },
    {
        "id":  40,
        "original_id":  40,
        "question":  "Quel type de route statique est configuré avec une plus grande distance administrative pour fournir une route de secours vers une route associée à un protocole de routage dynamique ?",
        "options":  [
                        "route statique flottante",
                        "Route statique récapitulative",
                        "Route statique par défaut",
                        "route statique standard"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Expliquez : Il existe quatre types de base de routes statiques. Les routes statiques flottantes sont des routes de secours qui sont placées dans la table de routage si une route principale est perdue. Une route statique récapitulative agrège plusieurs routes en une seule, réduisant ainsi la taille de la table de routage. Les routes statiques standard sont des routes saisies manuellement dans la table de routage. Les routes statiques par défaut créent une passerelle de dernier recours.",
        "image":  null
    },
    {
        "id":  41,
        "original_id":  41,
        "question":  "Quelle réponse indique une route statique par défaut IPv4 correctement configurée ?",
        "options":  [
                        "ip route 0.0.0.0 255.255.255.255 S0/0/0",
                        "ip route 0.0.0.0 255.255.255.0 S0/0/0",
                        "ip route 0.0.0.0 255.0.0.0 S0/0/0",
                        "ip route 0.0.0.0 0.0.0.0 S0/0/0"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : La route statique ip route 0.0.0.0 0.0.0.0 S0/0/0 est considérée comme une route statique par défaut et correspondra à tous les réseaux de destination.",
        "image":  null
    },
    {
        "id":  42,
        "original_id":  42,
        "question":  "Reportez-vous à l’illustration. Quelle commande de route statique peut être entrée sur R1 pour transférer le trafic vers le réseau local connecté à R2?",
        "options":  [
                        "ipv6 route 2001:db8:12:10::/64 S0/0/0 fe80::2",
                        "ipv6 route 2001:db8:12:10::/64 S0/0/1 2001:db8:12:10::1",
                        "ipv6 route 2001:db8:12:10::/64 S0/0/0",
                        "ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_232325.jpg"
    },
    {
        "id":  43,
        "original_id":  43,
        "question":  "Examinez l’illustration. Quelle métrique permet de transférer un paquet de données avec l’adresse de destination IPv6 2001:DB8:ACAD:E:240:BFF:FED4:9DD2 ?",
        "options":  [
                        "90",
                        "128",
                        "2170112",
                        "2681856",
                        "2682112",
                        "3193856"
                    ],
        "correct":  [
                        4
                    ],
        "explanation":  "Expliquez : L’adresse de destination IPv6 2001:DB8:ACAD:E:240:BFF:FED4:9DD2 appartient au réseau de 2001:DB8:ACAD:E::/64. Dans la table de routage, la route pour transférer le paquet a Serial 0/0/1 comme interface de sortie et 2682112 comme coût.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_232532.jpg"
    },
    {
        "id":  44,
        "original_id":  44,
        "question":  "Examinez l’illustration. Le routeur R1 entretient une relation de voisinage OSPF avec le routeur du FAI sur le réseau 192.168.0.32. La liaison réseau 192.168.0.36 doit servir de liaison de secours si la liaison OSPF tombe en panne. La commande de route statique flottante ip route 0.0.0.0 0.0.0.0 S0/0/1 100 a été exécutée sur R1 et, à présent, le trafic utilise la liaison de secours même lorsque la liaison OSPF est activée et opérationnelle. Quelle modification doit être apportée à la commande de route statique afin que le trafic utilise obligatoirement la liaison OSPF lorsque celle-ci est active ?",
        "options":  [
                        "Configuration du réseau de destination sur 192.168.0.34.",
                        "Ajout de l’adresse voisine du tronçon suivant, à savoir 192.168.0.36.",
                        "Réglage de la distance administrative sur 1.",
                        "Réglage de la distance administrative sur 120."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Expliquez : Le problème avec la route statique flottante actuelle est que la distance administrative est trop faible. La distance administrative devra être supérieure à celle d’OSPF, qui est de 110, afin que le routeur n’utilise le lien OSPF que lorsqu’il est actif.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_232636.jpg"
    },
    {
        "id":  45,
        "original_id":  45,
        "question":  "Reportez-vous à l’illustration. Quelle route a été configurée comme route statique vers un réseau spécifique en utilisant l’adresse du tronçon suivant ?",
        "options":  [
                        "C 10.16.2.0/24 is directly connected, Serial0/0/0",
                        "S 0.0.0.0/0 [1/0] via 10.16.2.2",
                        "S 10.17.2.0/24 is directly connected, Serial 0/0/0",
                        "S 10.17.2.0/24 [1/0] via 10.16.2.2"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : Le C dans une table de routage indique une interface active et à laquelle une adresse IP est attribuée. Le S dans une table de routage signifie qu’une route a été installée à l’aide de la commande ip route. Deux des entrées de la table de routage affichées sont des routes statiques vers une destination spécifique (le réseau 192.168.2.0). L’entrée qui a le S indiquant une route statique et [1/0] a été configurée à l’aide de l’adresse du saut suivant. L’autre entrée (S 192.168.2.0/24 est directement connectée, Serial 0/0/0) est une route statique configurée à l’aide de l’interface de sortie. L’entrée avec la route 0.0.0.0 est une route statique par défaut qui est utilisée pour envoyer des paquets à tout réseau de destination qui n’est pas spécifiquement répertorié dans la table de routage.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_232818.jpg"
    },
    {
        "id":  46,
        "original_id":  46,
        "question":  "Reportez-vous à l’illustration. Quel trunk ne transmettra aucun trafic au terme du processus de sélection de pont racine ?",
        "options":  [
                        "Trunk1",
                        "Trunk2",
                        "Trunk3",
                        "Trunk4"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_232945.jpg"
    },
    {
        "id":  47,
        "original_id":  47,
        "question":  "Quels sont les deux types de protocoles STP pouvant générer des flux de trafic non optimaux parce qu’ils ne supposent qu’une seule instance Spanning Tree pour le réseau ponté entier ? (Choisissez deux réponses.)",
        "options":  [
                        "MSTP",
                        "STP",
                        "RSTP",
                        "PVST+",
                        "Rapid PVST+"
                    ],
        "correct":  [
                        1,
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  48,
        "original_id":  48,
        "question":  "Pour obtenir un aperçu de l’état du mode Spanning Tree d’un réseau commuté, un technicien réseau exécute la commande show spanning-tree sur un commutateur. Quelles informations cette commande permet-elle d’afficher ? (Choisissez deux réponses.)",
        "options":  [
                        "L’adresse IP de l’interface VLAN de gestion.",
                        "L’ID de pont racine.",
                        "Le statut des ports VLAN natifs.",
                        "Le rôle des ports sur tous les VLAN.",
                        "Le nombre de diffusions reçues sur chaque port racine."
                    ],
        "correct":  [
                        1,
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  49,
        "original_id":  49,
        "question":  "Examinez l’illustration. Quelles sont les deux conclusions pouvant être tirées du résultat ? (Choisissez deux réponses.)",
        "options":  [
                        "Le canal de port est un canal de couche 3.",
                        "La méthode d’équilibrage de charge utilisée est le port source vers le port de destination.",
                        "La liaison EtherChannel est en panne.",
                        "Le groupement est pleinement opérationnel.",
                        "L’ID de canal de port correspond à 2."
                    ],
        "correct":  [
                        2,
                        4
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_233605.jpg"
    },
    {
        "id":  50,
        "original_id":  50,
        "question":  "Quelle action se déroule lorsqu’une trame entrant dans un commutateur a une adresse MAC de destination monodiffusion apparaissant dans la table d’adresses MAC?",
        "options":  [
                        "Le commutateur réinitialise le minuteur d’actualisation sur toutes les entrées de table d’adresses MAC.",
                        "Le commutateur met à jour le minuteur d’actualisation de l’entrée.",
                        "Le commutateur transmet la trame à tous les ports, sauf au port d’arrivée.",
                        "Le commutateur transmet le cadre hors du port spécifié."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  51,
        "original_id":  51,
        "question":  "Reportez-vous à l’illustration. Un administrateur réseau a ajouté un nouveau sous-réseau au réseau et veut que les hôtes du sous-réseau reçoivent des adresses IPv4 du serveur DHCPv4.Quelles commandes permettent aux hôtes du nouveau sous-réseau de recevoir des adresses du serveur DHCPv4 ? (Choisissez deux réponses.)",
        "options":  [
                        "R1(config)# interface G0/0",
                        "R1(config)# interface G0/1",
                        "R1(config-if)# ip helper-address 10.1.0.254",
                        "R2(config-if)# ip helper-address 10.2.0.250",
                        "R1(config-if)# ip helper-address 10.2.0.250",
                        "R2(config)# interface G0/0"
                    ],
        "correct":  [
                        0,
                        4
                    ],
        "explanation":  "Explication : Vous avez besoin de l’interface du routeur qui est connectée au nouveau sous-réseau et de l’adresse du serveur DHCP. La commande ip helper-address est utilisée pour configurer un routeur comme relais DHCPv4. La commande doit être placée sur l’interface face aux clients DHCPv4. Lorsque la commande est appliquée sur l’interface du routeur, l’interface recevra les messages de diffusion DHCPv4 et les transmettra en monodiffusion à l’adresse IP du serveur DHCPv4.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_235737.jpg"
    },
    {
        "id":  52,
        "original_id":  52,
        "question":  "Quelle action prend un client DHCPv4 s’il reçoit plus d’un DHCPOFFER de plusieurs serveurs DHCP?",
        "options":  [
                        "Il envoie un DHCPNAK et recommence le processus DHCP.",
                        "Il envoie un DHCPREQUEST qui identifie l’offre de location que le client accepte.",
                        "Il rejette les deux offres et envoie un nouveau DHCPDISCOVER.",
                        "Il accepte les deux messages DHCPOFFER et envoie un DHCPACK."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  53,
        "original_id":  53,
        "question":  "Examinez l’illustration. Si les adresses IP du routeur de passerelle par défaut et du serveur de noms de domaine (DNS) sont correctes, quel est le problème de cette configuration ?",
        "options":  [
                        "Les commandes default-router et dns-server doivent être configurées avec des masques de sous-réseau.",
                        "L’adresse IP du serveur de noms de domaine (DNS) ne figure pas dans la liste d’adresses exclues.",
                        "L’adresse IP du routeur de passerelle par défaut ne figure pas dans la liste d’adresses exclues.",
                        "Le serveur de noms de domaine (DNS) et le routeur de passerelle par défaut doivent faire partie du même sous-réseau."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication : Dans cette configuration, la liste d’adresses exclues doit inclure l’adresse qui est attribuée au routeur de passerelle par défaut. La commande doit donc être ip dhcp exclu-address 192.168.10.1 192.168.10.9.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-19_235457.jpg"
    },
    {
        "id":  54,
        "original_id":  54,
        "question":  "Les utilisateurs de la succursale ont pu accéder à un site le matin, mais n’ont pas eu de connectivité avec le site depuis l’heure du déjeuner. Que faut-il faire ou vérifier?",
        "options":  [
                        "Vérifiez la configuration sur l’itinéraire statique flottant et ajustez l’AD.",
                        "Utilisez la commande « show ip interface brief » pour voir si une interface est en panne.",
                        "Créez un itinéraire statique flottant vers ce réseau.",
                        "Vérifiez que la route statique vers le serveur est présente dans la table de routage."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  55,
        "original_id":  55,
        "question":  "Associez la caractéristique de transmission à son type. (Les options ne sont pas toutes utilisées.)",
        "options":  [

                    ],
        "correct":  [

                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-03_224759.jpg"
    },
    {
        "id":  56,
        "original_id":  56,
        "question":  "Quelles informations un commutateur utilise-t-il pour renseigner la table d’adresses MAC ?",
        "options":  [
                        "les adresses MAC source et de destination et le port entrant",
                        "l’adresse MAC de destination et le port sortant",
                        "les adresses MAC source et de destination et le port sortant",
                        "l’adresse MAC source et le port sortant",
                        "l’adresse MAC de destination et le port entrant",
                        "l’adresse MAC source et le port entrant"
                    ],
        "correct":  [
                        5
                    ],
        "explanation":  "Expliquez : Pour conserver la table d’adresses MAC, le commutateur utilise l’adresse MAC source des paquets entrants et le port dans lequel les paquets entrent. L’adresse de destination est utilisée pour sélectionner le port sortant.",
        "image":  null
    },
    {
        "id":  57,
        "original_id":  57,
        "question":  "Pour quelles raisons un administrateur réseau segmenterait-il un réseau avec un commutateur de couche 2 ? (Choisissez deux réponses.)",
        "options":  [
                        "Pour créer moins de domaines de collision.",
                        "Pour éliminer les circuits virtuels.",
                        "Pour créer plus de domaines de diffusion.",
                        "Pour isoler les messages de requête ARP du reste du réseau.",
                        "Pour isoler le trafic entre les segments.",
                        "Pour améliorer la bande passante utilisateur."
                    ],
        "correct":  [
                        4,
                        5
                    ],
        "explanation":  "Explication : Un commutateur a la capacité de créer des connexions point à point temporaires entre les périphériques réseau de transmission et de réception directement connectés. Les deux appareils ont une connectivité full-duplex pleine bande pendant la transmission.",
        "image":  null
    },
    {
        "id":  58,
        "original_id":  58,
        "question":  "Un technicien dépannage un WLAN lent et décide d’utiliser l’approche de répartition du trafic. Quels deux paramètres devraient être configurés pour le faire? (Choisissez deux propositions.)",
        "options":  [
                        "Configurer le mode de sécurité sur WPA Personal TKIP/AES pour un réseau et WPA2 Personal AES pour l’autre réseau",
                        "Configurez le mode de sécurité sur WPA Personal TKIP/AES pour les deux réseaux.",
                        "Configurez la bande 5 GHz pour le streaming multimédia et le trafic temporel.",
                        "Configurez un SSID commun pour les deux réseaux fractionnés.",
                        "Configurez la bande 2,4 GHz pour le trafic Internet de base qui n’est pas sensible au temps."
                    ],
        "correct":  [
                        2,
                        4
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  59,
        "original_id":  59,
        "question":  "Sur un Cisco 3504 WLC Summary page ( Advanced \u003e Summary ), quel onglet permet à un administrateur réseau de configurer un WLAN particulier avec une stratégie WPA2?",
        "options":  [
                        "SÉCURITÉ",
                        "SANS FIL",
                        "Réseaux locaux sans fil",
                        "GESTION"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  60,
        "original_id":  60,
        "question":  "Un administrateur réseau ajoute un nouveau WLAN sur un WLC Cisco 3500. Quel onglet l’administrateur doit-il utiliser pour créer une nouvelle interface VLAN à utiliser pour le nouveau WLAN?",
        "options":  [
                        "GESTION",
                        "CONTRÔLEUR",
                        "Réseaux locaux sans fil",
                        "SANS FIL"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  61,
        "original_id":  61,
        "question":  "Quel est l’effet de l’entrée de la commande de configuration switchport mode access sur un commutateur?",
        "options":  [
                        "Il spécifie le nombre maximal d’adresses L2 autorisées sur un port.",
                        "Il désactive le PAO sur une interface non-trunking.",
                        "Il active le DAI sur des interfaces de commutation spécifiques précédemment configurées avec la surveillance DHCP.",
                        "Il active manuellement un lien de trunk."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  62,
        "original_id":  62,
        "question":  "Reportez-vous à l’illustration. L’administrateur réseau configure les deux commutateurs comme illustré. Cependant, l’hôte C ne peut envoyer de requête ping à l’hôte D et l’hôte E ne peut envoyer de requête ping à l’hôte F. Quelle action l’administrateur doit-il effectuer pour activer cette communication ?",
        "options":  [
                        "Inclure un routeur dans la topologie.",
                        "Associer les hôtes A et B avec le VLAN 10 au lieu du VLAN 1.",
                        "Configurer un port trunk en mode dynamic desirable.",
                        "Supprimer le VLAN natif de l’agrégation.",
                        "Ajouter la commande switchport nonegotiate à la configuration de SW2."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_095045.jpg"
    },
    {
        "id":  63,
        "original_id":  63,
        "question":  "Associez l’étape à la description de la séquence d’amorçage du commutateur correspondante. (Les options ne doivent pas être toutes utilisées.)",
        "options":  [

                    ],
        "correct":  [

                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2024-10-16_070315.jpg"
    },
    {
        "id":  64,
        "original_id":  64,
        "question":  "Reportez-vous à l’illustration. Supposons que le courant vient juste d’être rétabli. PC3 émet une requête de diffusion DHCP IPv4. À quel port SW1 transmet-il cette requête ?",
        "options":  [
                        "À Fa0/1, à Fa0/2 et à Fa0/3 uniquement",
                        "À Fa0/1, à Fa0/2 et à Fa0/4 uniquement",
                        "À Fa0/1 uniquement",
                        "À Fa0/1, à Fa0/2, à Fa0/3 et à Fa0/4",
                        "À Fa0/1 et à Fa0/2 uniquement"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_095409.jpg"
    },
    {
        "id":  65,
        "original_id":  65,
        "question":  "Quel préfixe IPv6 est conçu pour la communication lien-local?",
        "options":  [
                        "2001::/3",
                        "fe80::/10",
                        "fc::/07",
                        "ff00::/8"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  66,
        "original_id":  66,
        "question":  "Comment un routeur gère-t-il le routage statique si Cisco Express Forwarding est désactivé ?",
        "options":  [
                        "Il n’effectue pas de recherches récursives.",
                        "Les interfaces série point à point nécessitent des routes statiques entièrement spécifiées pour éviter des incohérences au niveau du routage.",
                        "Les interfaces Ethernet à accès multiple nécessitent des routes statiques entièrement spécifiées pour éviter des incohérences au niveau du routage.",
                        "Les routes statiques utilisant une interface de sortie sont inutiles."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication : Dans la plupart des plates-formes exécutant IOS 12.0 ou version ultérieure, Cisco Express Forwarding est activé par défaut. Cisco Express Forwarding élimine le besoin de recherche récursive. Si Cisco Express Forwarding est désactivé, les interfaces réseau multi-accès nécessitent des routes statiques entièrement spécifiées afin d’éviter les incohérences dans leurs tables de routage. Les interfaces point à point n’ont pas ce problème, car plusieurs points de terminaison ne sont pas présents. Avec ou sans Cisco Express Forwarding activé, l’utilisation d’une interface de sortie lors de la configuration d’une route statique est une option viable.",
        "image":  null
    },
    {
        "id":  67,
        "original_id":  67,
        "question":  "Reportez-vous à l’illustration. Que peut-on conclure de la configuration affichée sur R1?",
        "options":  [
                        "R1 fonctionne comme un serveur DHCPv4.",
                        "R1 enverra un message à un client DHCPv4 local pour contacter un serveur DHCPv4 au 10.10.8.",
                        "R1 diffusera les demandes DHCPv4 au nom des clients DHCPv4 locaux.",
                        "Configurez R1 en tant qu’agent de relais DHCP."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_102708.jpg"
    },
    {
        "id":  68,
        "original_id":  68,
        "question":  "Quelle action se déroule lorsque l’adresse MAC source d’un cadre entrant dans un commutateur n’est pas dans la table d’adresses MAC?",
        "options":  [
                        "Le commutateur ajoute à la table l’adresse MAC et le numéro de port entrant.",
                        "Le commutateur transmet la trame à tous les ports, sauf au port d’arrivée.",
                        "Le commutateur ajoute un mappage d’entrée de table d’adresses MAC pour l’adresse MAC de destination et le port d’entrée.",
                        "Le commutateur transmet le cadre hors du port spécifié."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  69,
        "original_id":  69,
        "question":  "Le routage inter-VLAN réussi fonctionne depuis un certain temps sur un réseau avec plusieurs VLAN sur plusieurs commutateurs. Lorsqu’une liaison de jonction entre commutateurs échoue et que le protocole Spanning Tree affiche une liaison de jonction de sauvegarde, il est signalé que les hôtes de deux VLAN peuvent accéder à certaines ressources réseau, mais pas à toutes les ressources précédemment accessibles. Les hôtes sur tous les autres VLAN n’ont pas ce problème. Quelle est la cause la plus probable de ce problème?",
        "options":  [
                        "Le routage inter-VLAN a également échoué lorsque le lien de jonction a échoué.",
                        "Le protocole de jonction dynamique sur la liaison a échoué.",
                        "Les VLAN autorisés sur la liaison de sauvegarde n’ont pas été configurés correctement.",
                        "La fonction de port de bord protégé sur les interfaces de jonction de sauvegarde a été désactivée."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  70,
        "original_id":  70,
        "question":  "Un administrateur réseau utilise le modèle « Router-on-a-Stick » pour configurer un commutateur et un routeur pour le routage inter-VLAN. Comment le port du commutateur connecté au routeur doit-il être configuré ?",
        "options":  [
                        "Il doit être configuré comme port agrégé 802.1q.",
                        "Il doit être configuré comme port d’accès et membre de VLAN 1.",
                        "Il doit être configuré comme port agrégé et affecté au VLAN 1.",
                        "Il doit être configuré comme port agrégé et n’autoriser que le trafic non étiqueté."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explication : Le port du commutateur qui se connecte à l’interface du routeur doit être configuré en tant que port de jonction. Une fois qu’il devient un port de jonction, il n’appartient à aucun VLAN particulier et transmettra le trafic de divers VLAN.",
        "image":  null
    },
    {
        "id":  71,
        "original_id":  71,
        "question":  "Pourquoi l’espionnage DHCP est-il nécessaire lors de l’utilisation de la fonction Dynamic ARP Inspection?",
        "options":  [
                        "Il utilise la table d’adresses MAC pour vérifier l’adresse IP de la passerelle par défaut.",
                        "Il s’appuie sur les paramètres des ports approuvés et non approuvés définis par l’espionnage DHCP.",
                        "Il utilise la base de données de liaison d’adresse MAC à adresse IP pour valider un paquet ARP.",
                        "Il redirige les demandes ARP vers le serveur DHCP pour vérification."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  72,
        "original_id":  72,
        "question":  "Reportez-vous à l’illustration. Un administrateur réseau a configuré les routeurs R1 et R2 comme faisant partie du groupe HSRP 1. Après le rechargement des routeurs, un utilisateur associé à l’hôte 1 s’est plaint d’une mauvaise connectivité à Internet. L’administrateur réseau a donc exécuté la commande show standby brief sur les deux routeurs pour vérifier le fonctionnement du protocole HSRP. En outre, l’administrateur a observé le tableau ARP sur Host1. Quelle entrée doit apparaître dans le tableau ARP sur Host1 pour acquérir la connectivité à Internet?",
        "options":  [
                        "L’adresse IP virtuelle et l’adresse MAC virtuelle du groupe HSRP 1",
                        "L’adresse IP virtuelle du groupe HSRP 1 et l’adresse MAC de R1",
                        "L’adresse IP virtuelle du groupe HSRP 1 et l’adresse MAC de R2",
                        "L’adresse IP et l’adresse MAC de R1"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explication : Les hôtes enverront une requête ARP à la passerelle par défaut qui est l’adresse IP virtuelle. Les réponses ARP des routeurs HSRP contiennent l’adresse MAC virtuelle. Les tables ARP de l’hôte contiendront un mappage de l’adresse IP virtuelle vers le MAC virtuel. – l’adresse IP et l’adresse MAC de R1",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_102911.jpg"
    },
    {
        "id":  73,
        "original_id":  73,
        "question":  "Une route statique a été configurée sur un routeur. Cependant, le réseau de destination n’existe plus. Que doit faire un administrateur pour supprimer l’itinéraire statique de la table de routage ?",
        "options":  [
                        "Rien. La route statique disparaîtra d’elle-même.",
                        "Supprimez l’itinéraire en utilisant la commande no ip route .",
                        "Modifier la distance administrative pour cet itinéraire.",
                        "Modifier les mesures de routage pour cet itinéraire."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  74,
        "original_id":  74,
        "question":  "Un technicien junior ajoutait un itinéraire à un routeur LAN. Un traceroute vers un périphérique sur le nouveau réseau a révélé un mauvais chemin et un état inaccessible. Que faut-il faire ou vérifier?",
        "options":  [
                        "Vérifiez la configuration sur l’itinéraire statique flottant et ajustez l’AD.",
                        "Vérifiez la configuration de l’interface de sortie sur la nouvelle route statique.",
                        "Créez un itinéraire statique flottant vers ce réseau.",
                        "Vérifiez qu’il n’y a pas de route par défaut dans les tables de routage du routeur périphérique."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  75,
        "original_id":  75,
        "question":  "Quelle méthode d’authentification sans fil dépend d’un serveur d’authentification RADIUS ?",
        "options":  [
                        "WPA Personal",
                        "WPA2 Personal",
                        "WEP",
                        "WPA2 Enterprise"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : WPA2 Enterprise s’appuie sur un serveur RADIUS externe pour authentifier les clients lorsqu’ils tentent de se connecter. WEP et WPA/WPA2 Personal utilisent tous deux une clé prépartagée que les clients doivent connaître pour s’authentifier.",
        "image":  null
    },
    {
        "id":  76,
        "original_id":  76,
        "question":  "Quels sont les deux paramètres définis par défaut sur un routeur sans fil pouvant affecter la sécurité du réseau ? (Choisissez deux propositions.)",
        "options":  [
                        "Le SSID est diffusé.",
                        "Le filtrage des adresses MAC est activé.",
                        "Le chiffrement WEP est activé.",
                        "Le canal sans fil est automatiquement sélectionné.",
                        "Un mot de passe administrateur réservé est défini."
                    ],
        "correct":  [
                        0,
                        4
                    ],
        "explanation":  "Explication : Les paramètres par défaut sur les routeurs sans fil incluent souvent la diffusion du SSID et l’utilisation d’un mot de passe administratif bien connu. Ces deux éléments présentent un risque de sécurité pour les réseaux sans fil. Le cryptage WEP et le filtrage des adresses MAC ne sont pas définis par défaut. La sélection automatique du canal sans fil ne pose aucun risque de sécurité.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_103041.jpg"
    },
    {
        "id":  77,
        "original_id":  77,
        "question":  "Un administrateur réseau d’une petite société de publicité configure la sécurité WLAN à l’aide de la méthode PSK WPA2. Quelles informations d’identification les utilisateurs de bureau ont-ils besoin pour connecter leurs ordinateurs portables au WLAN?",
        "options":  [
                        "une clé qui correspond à la clé sur l’AP",
                        "un nom d’utilisateur et un mot de passe configurés sur l’AP",
                        "le nom d’utilisateur et le mot de passe de l’entreprise via le service Active Directory",
                        "Phrase secrète de l’utilisateur"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  78,
        "original_id":  78,
        "question":  "Quelle commande permet de créer une route statique sur R2 pour atteindre PC B ?",
        "options":  [
                        "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.2.254",
                        "R2(config)# ip route 172.16.2.1 255.255.255.0 172.16.3.1",
                        "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1",
                        "R2(config)# ip route 172.16.3.0 255.255.255.0 172.16.2.254"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: La syntaxe correcte est : router(config)# ip route destination-network destination-mask {next-hop-ip-address | interface-sortie} Si l’interface de sortie locale au lieu de l’adresse IP du saut suivant est utilisée, la route sera affichée comme une route directement connectée au lieu d’une route statique dans la table de routage. Étant donné que le réseau à atteindre est 172.16.2.0 et que l’adresse IP du saut suivant est 172.16.3.1, la commande est R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_103139.jpg"
    },
    {
        "id":  79,
        "original_id":  79,
        "question":  "Reportez-vous à l’illustration. R1 a été configuré avec la commande de route statique ip route 209.165.200.224 255.255.255.224 S0/0/0 et, par conséquent, les utilisateurs du réseau 172.16.0.0/16 ne peuvent pas accéder aux ressources sur Internet. Comment cette route statique doit-elle être modifiée pour permettre au trafic utilisateur du LAN d’accéder à Internet ?",
        "options":  [
                        "En ajoutant une distance administrative de 254.",
                        "En configurant le réseau et le masque de destination sur 0.0.0.0 0.0.0.0.",
                        "En choisissant S0/0/1 comme l’interface de sortie.",
                        "En ajoutant l’adresse voisine du tronçon suivant, à savoir 209.165.200.226."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Expliquez : La route statique sur R1 a été configurée de manière incorrecte avec le mauvais réseau de destination et le mauvais masque. Le réseau et le masque de destination corrects sont 0.0.0.0 0.0.0.0.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_103216.jpg"
    },
    {
        "id":  80,
        "original_id":  80,
        "question":  "Quel est le risque associé à la méthode de la base de données locale pour la sécurisation de l’accès des appareils qui peut être réalisée au moyen de AAA sur des serveurs centralisés ?",
        "options":  [
                        "Les mots de passe peuvent être stockés uniquement en texte brut dans la configuration en cours.",
                        "Elle est très vulnérable aux attaques de force brute en raison de l’absence de nom d’utilisateur.",
                        "Elle n’offre aucun moyen d’établir les responsabilités.",
                        "Les comptes des utilisateurs doivent être configurés localement sur chaque appareil, ce qui est une solution d’authentification non évolutive."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  81,
        "original_id":  81,
        "question":  "Qu’est-ce qu’une méthode pour lancer une attaque de saut VLAN?",
        "options":  [
                        "inondation du commutateur avec des adresses MAC",
                        "envoi d’adresses IP usurpées à partir de l’hôte attaquant",
                        "introduction d’un commutateur non fiable et activation de la trunking",
                        "envoi d’informations de VLAN natif usurpé"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication : La méthode de base de données locale pour sécuriser l’accès au périphérique utilise des noms d’utilisateur et des mots de passe qui sont configurés localement sur le routeur. Cela permet aux administrateurs de savoir qui s’est connecté à l’appareil et à quel moment. Les mots de passe peuvent également être cryptés dans la configuration. Cependant, les informations de compte doivent être configurées sur chaque appareil auquel ce compte doit avoir accès, ce qui rend cette solution très difficile à faire évoluer.",
        "image":  null
    },
    {
        "id":  82,
        "original_id":  82,
        "question":  "Quel protocole ou technologie utilise l’adresse IP source vers l’adresse IP de destination comme mécanisme d’équilibrage de charge?",
        "options":  [
                        "EtherChannel",
                        "HSRP",
                        "Protocole VTP",
                        "DTP"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  83,
        "original_id":  83,
        "question":  "Examinez l’illustration. Tous les commutateurs affichés sont des modèles Cisco 2960 dont la priorité par défaut est identique et fonctionnant à la même bande passante. Quels sont les trois ports qui seront désignés pour STP ? (Choisissez trois réponses.)",
        "options":  [
                        "Fa0/9",
                        "Fa0/10",
                        "Fa0/21",
                        "Fa0/11",
                        "Fa0/13",
                        "Fa0/20"
                    ],
        "correct":  [
                        1,
                        2,
                        4
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-20_103809.jpg"
    },
    {
        "id":  84,
        "original_id":  84,
        "question":  "Un ingénieur WLAN déploie un WLC et cinq points d’accès sans fil à l’aide du protocole CAPWAP avec la fonction DTLS pour sécuriser le plan de contrôle des périphériques réseau. Lors du test du réseau sans fil, l’ingénieur WLAN remarque que le trafic de données est en cours d’échange entre le WLC et les AP en texte brut et qu’il n’est pas crypté. Quelle est la raison la plus probable pour cela?",
        "options":  [
                        "Bien que DTLS soit activé par défaut pour sécuriser le canal de contrôle CAPWAP, il est désactivé par défaut pour le canal de données.",
                        "Le chiffrement des données nécessite l’installation d’une licence DTLS sur chaque point d’accès (AP) avant d’être activé sur le contrôleur de réseau local sans fil (WLC).",
                        "DTLS est un protocole qui fournit uniquement la sécurité entre le point d’accès (AP) et le client sans fil.",
                        "DTLS fournit uniquement la sécurité des données par authentification et ne fournit pas de chiffrement pour le déplacement des données entre un contrôleur de réseau local sans fil (WLC) et un point d’accès (AP)."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explique: DTLS est un protocole qui assure la sécurité entre l’AP et le WLC. Il leur permet de communiquer en utilisant le cryptage et empêche les écoutes ou la falsification. DTLS est activé par défaut pour sécuriser le canal de contrôle CAPWAP mais est désactivé par défaut pour le canal de données. Tout le trafic de gestion et de contrôle CAPWAP échangé entre un point d’accès et un WLC est chiffré et sécurisé par défaut pour assurer la confidentialité du plan de contrôle et empêcher les attaques Man-In-the-Middle (MITM).",
        "image":  null
    },
    {
        "id":  85,
        "original_id":  85,
        "question":  "Contrairement aux routes dynamiques, quels sont les avantages qu’offre l’utilisation des routes statiques sur un routeur ? (Choisissez deux réponses.)",
        "options":  [
                        "Elles changent automatiquement le chemin vers le réseau de destination en cas de modification de la topologie.",
                        "Elles améliorent l’efficacité de découverte des réseaux voisins.",
                        "Elles utilisent moins de ressources du routeur.",
                        "Elles améliorent la sécurité du réseau.",
                        "Elles prennent moins de temps pour converger en cas de modification de la topologie de réseau."
                    ],
        "correct":  [
                        2,
                        3
                    ],
        "explanation":  "Explique: Les routes statiques sont configurées manuellement sur un routeur. Les routes statiques ne sont pas automatiquement mises à jour et doivent être reconfigurées manuellement si la topologie du réseau change. Ainsi, le routage statique améliore la sécurité du réseau car il ne fait pas de mises à jour de route entre les routeurs voisins. Les routes statiques améliorent également l’efficacité des ressources en utilisant moins de bande passante, et aucun cycle de processeur n’est utilisé pour calculer et communiquer les routes.",
        "image":  null
    },
    {
        "id":  86,
        "original_id":  86,
        "question":  "Examinez l’illustration. R1 a été configuré comme illustré. Cependant, PC1 ne parvient pas à recevoir d’adresse IPv4. Quel est le problème ?",
        "options":  [
                        "La commande ip address dhcp n’a pas été exécutée sur l’interface Gi0/1.",
                        "R1 n’est pas configuré comme serveur DHCPv4.",
                        "La commande ip helper-address n’a pas été exécutée sur l’interface correcte.",
                        "Un serveur DHCP doit être installé sur le même LAN que l’hôte qui reçoit l’adresse IP."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-23_163055.png"
    },
    {
        "id":  87,
        "original_id":  87,
        "question":  "Quel est l’effet de l’entrée de la commande de configuration ip arp inspection vlan 10 sur un commutateur?",
        "options":  [
                        "Il active le DAI sur des interfaces de commutation spécifiques précédemment configurées avec la surveillance DHCP.",
                        "Activez globalement la surveillance DHCP (snooping )sur le commutateur.",
                        "Il spécifie le nombre maximal d’adresses L2 autorisées sur un port.",
                        "Il permet globalement la garde BPDU sur tous les ports compatibles PortFast."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  88,
        "original_id":  88,
        "question":  "Quelle action se déroule lorsque l’adresse MAC source d’un cadre entrant dans un commutateur apparaît dans la table d’adresses MAC associée à un port différent?",
        "options":  [
                        "Le commutateur transmet le cadre hors du port spécifié.",
                        "Le commutateur met à jour le minuteur d’actualisation de l’entrée.",
                        "Le commutateur purge toute la table d’adresses MAC.",
                        "Le commutateur remplace l’ancienne entrée et utilise le port le plus courant."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  89,
        "original_id":  89,
        "question":  "Reportez-vous à l’illustration. Actuellement, le routeur R1 utilise une route EIGRP enregistrée via Branch2 pour atteindre le réseau 10.10.0.0/16. Quelle route statique flottante crée une route de secours vers le réseau 10.10.0.0/16 au cas où la liaison entre R1 et Branch2 serait interrompue ?",
        "options":  [
                        "ip route 10.10.0.0 255.255.0.0 Serial 0/0/0 100",
                        "ip route 10.10.0.0 255.255.0.0 209.165.200.226 100",
                        "ip route 10.10.0.0 255.255.0.0 209.165.200.225 100",
                        "ip route 10.10.0.0 255.255.0.0 209.165.200.225 50"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Une route statique flottante doit avoir une distance administrative supérieure à la distance administrative de la route active dans la table de routage. Le routeur R1 utilise une route EIGRP qui a une distance administrative de 90 pour atteindre le réseau 10.10.0.0/16. Pour être une route de secours, la route statique flottante doit avoir une distance administrative supérieure à 90 et avoir une adresse de prochain saut correspondant à l’adresse IP de l’interface série de Branch1.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-23_163253.png"
    },
    {
        "id":  90,
        "original_id":  90,
        "question":  "Quelles sont les trois étapes à suivre avant de transférer un commutateur Cisco vers un nouveau domaine de gestion VTP ? (Choisissez trois réponses.)",
        "options":  [
                        "Redémarrer le commutateur.",
                        "Télécharger la base de données VTP à partir du serveur VTP dans le nouveau domaine.",
                        "Configurer le commutateur avec le nom du nouveau domaine de gestion.",
                        "Réinitialiser les compteurs VTP pour permettre au commutateur de se synchroniser avec les autres commutateurs du domaine.",
                        "Sélectionner le mode et la version VTP appropriés.",
                        "Configurer le serveur VTP dans le domaine pour reconnaître l’ID de pont du nouveau commutateur."
                    ],
        "correct":  [
                        0,
                        2,
                        4
                    ],
        "explanation":  "Explique: Lors de l’ajout d’un nouveau commutateur à un domaine VTP, il est essentiel de configurer le commutateur avec un nouveau nom de domaine, le mode VTP, le numéro de version VTP et le mot de passe corrects. Un commutateur avec un numéro de révision plus élevé peut propager des VLAN non valides et effacer des VLAN valides, empêchant ainsi la connectivité de plusieurs périphériques sur les VLAN valides.",
        "image":  null
    },
    {
        "id":  91,
        "original_id":  91,
        "question":  "Reportez-vous à l’illustration. Quelle opération effectue le routeur R1 sur un paquet associé à une adresse IPv6 de destination 2001:db8:cafe:5::1 ?",
        "options":  [
                        "supprimer le paquet",
                        "transmettre le paquet en sortie sur Serial0/0/0",
                        "transmettre le paquet en sortie sur GigabitEthernet0/1",
                        "transmettre le paquet en sortie sur GigabitEthernet0/0"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explique: La route ::/0 est la forme compressée de la route par défaut 0000:0000:0000:0000:0000:0000:0000:0000/0. La route par défaut est utilisée si une route plus spécifique n’est pas trouvée dans la table de routage.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-23_163433.png"
    },
    {
        "id":  92,
        "original_id":  92,
        "question":  "Quelle est la principale raison pour un cybercriminel de lancer une attaque par dépassement d’adresses MAC ?",
        "options":  [
                        "pour que le cybercriminel puisse voir les trames destinées à d’autres hôtes",
                        "pour que le commutateur cesse d’acheminer le trafic",
                        "pour que le cybercriminel puisse exécuter un code arbitraire sur le commutateur",
                        "pour que les hôtes légitimes ne puissent pas obtenir une adresse MAC"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  93,
        "original_id":  93,
        "question":  "Quelle proposition décrit le résultat de l’interconnexion de plusieurs commutateurs Cisco LAN ?",
        "options":  [
                        "Chaque commutateur comprend un espace de diffusion et un espace de collision.",
                        "Les collisions de trames augmentent sur les segments connectant les commutateurs.",
                        "Le domaine de diffusion s’étend sur tous les commutateurs.",
                        "Chaque commutateur comprend un espace de collision."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Dans les commutateurs LAN Cisco, la microsegmentation permet à chaque port de représenter un segment distinct et ainsi chaque port de commutateur représente un domaine de collision distinct. Ce fait ne changera pas lorsque plusieurs commutateurs sont interconnectés. Cependant, les commutateurs LAN ne filtrent pas les trames de diffusion. Une trame de diffusion est inondée vers tous les ports. Les commutateurs interconnectés forment un grand domaine de diffusion.",
        "image":  null
    },
    {
        "id":  94,
        "original_id":  94,
        "question":  "Reportez-vous à l’illustration. Un administrateur réseau configure le routeur R1 pour l’attribution d’adresse IPv6. Sur la base de la configuration partielle, quel système d’attribution d’adresses IPv6 global monodiffusion l’administrateur a-t-il l’intention de mettre en œuvre ?",
        "options":  [
                        "configuration manuelle",
                        "SLAAC",
                        "avec état (stateful)",
                        "Sans état"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-23_163717.png"
    },
    {
        "id":  95,
        "original_id":  95,
        "question":  "Examinez l’illustration. Un administrateur réseau vérifie la configuration du commutateur S1. Quel protocole a été implémenté pour regrouper plusieurs ports physiques en une liaison logique ?",
        "options":  [
                        "DTP",
                        "STP",
                        "PAgP",
                        "LACP"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2021-12-23_163739.png"
    },
    {
        "id":  96,
        "original_id":  96,
        "question":  "Une politique de sécurité de l’entreprise exige que l’adressage MAC soit enregistré de manière dynamique et ajouté à la table des adresses MAC et à la configuration en cours sur chaque commutateur. Quelle configuration de la sécurité des ports permettra de respecter cette mesure ?",
        "options":  [
                        "adresses MAC sécurisées automatiques",
                        "adresses MAC sécurisées dynamiques",
                        "adresses MAC sécurisées statiques",
                        "adresses MAC sécurisées fixes"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  97,
        "original_id":  97,
        "question":  "Un administrateur réseau utilise la commande de configuration globale spanning-tree portfastbpduguard default pour activer la garde BPDU sur un commutateur. Cependant, BPDU guard n’est pas activé sur tous les ports d’accès. Quelle est la source du problème?",
        "options":  [
                        "PortFast n’est pas configuré sur tous les ports d’accès.",
                        "Les ports d’accès configurés avec la protection racine ne peuvent pas être configurés avec la garde BPDU.",
                        "Les ports d’accès appartiennent à différents VLAN.",
                        "BPDU guard doit être activé en mode de commande de configuration de l’interface."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  98,
        "original_id":  98,
        "question":  "Examinez l’illustration. Un commutateur de couche 3 se charge du routage pour trois VLAN et se connecte à un routeur pour la connectivité Internet. Comment le commutateur doit-il être configuré ? (Choisissez deux réponses.)",
        "options":  [

                    ],
        "correct":  [

                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2022-01-13_090443.jpg"
    },
    {
        "id":  99,
        "original_id":  99,
        "question":  "Quel est l’effet de l’entrée de la commande de configuration ip dhcp snooping sur un commutateur?",
        "options":  [
                        "Activez globalement la surveillance DHCP (snooping )sur le commutateur.",
                        "Il active manuellement un lien de trunk.",
                        "Il active PortFast globalement sur un commutateur.",
                        "Désactivez les négociations DTP sur les ports trunking."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  100,
        "original_id":  100,
        "question":  "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l’administrateur désactiverait-il la fonction de diffusion pour le SSID?",
        "options":  [
                        "pour assurer la confidentialité et l’intégrité du trafic sans fil en utilisant le chiffrement",
                        "pour éliminer l’analyse des SSID disponibles dans la zone",
                        "pour réduire le risque d’interférence par des dispositifs externes tels que les fours à micro-ondes",
                        "pour réduire le risque d’ajout de points d’accès non autorisés au réseau"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  101,
        "original_id":  101,
        "question":  "Une entreprise déploie un réseau sans fil dans le site de distribution d’une banlieue de Boston. L’entrepôt est assez volumineux et nécessite l’utilisation de plusieurs points d’accès. Étant donné que certains appareils de l’entreprise fonctionnent toujours à 2,4 GHz, l’administrateur réseau décide de déployer la norme 802.11g. Quels sont les canaux que vous affecterez aux différents points d’accès afin d’éviter les chevauchements ?",
        "options":  [
                        "Canaux 2, 6 et 10",
                        "Canaux 1, 7 et 13",
                        "Canaux 1, 6 et 11",
                        "Canaux 1, 5 et 9"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Dans le domaine de l’Amérique du Nord, 11 canaux sont autorisés pour le réseau sans fil 2,4 GHz. Parmi ces 11 canaux, la combinaison des canaux 1, 6 et 11 est la seule combinaison de canaux sans chevauchement.",
        "image":  null
    },
    {
        "id":  102,
        "original_id":  102,
        "question":  "Quelle attaque a pour but de créer un DOS pour les clients en les empêchant d’obtenir un crédit-bail DHCP ?",
        "options":  [
                        "Attaque par dépassement de table CAM",
                        "Insuffisance de ressources DHCP",
                        "Usurpation d’adresse IP",
                        "Usurpation DHCP (ou spoofing)"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explication : Les attaques de famine DHCP sont lancées par un attaquant avec l’intention de créer un DoS pour les clients DHCP. Pour atteindre cet objectif, l’attaquant utilise un outil qui envoie de nombreux messages DHCPDISCOVER afin de louer l’intégralité du pool d’adresses IP disponibles, les refusant ainsi aux hôtes légitimes.",
        "image":  null
    },
    {
        "id":  103,
        "original_id":  103,
        "question":  "Les utilisateurs d’un réseau local ne peuvent pas accéder à un serveur Web d’entreprise mais peuvent se rendre ailleurs. Que faut-il faire ou vérifier?",
        "options":  [
                        "Vérifiez que la route statique vers le serveur est présente dans la table de routage.",
                        "Créez un itinéraire statique flottant vers ce réseau.",
                        "Assurez-vous que l’ancien itinéraire par défaut a été supprimé des routeurs de bord de l’entreprise.",
                        "Vérifiez la configuration sur l’itinéraire statique flottant et ajustez l’AD."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  104,
        "original_id":  104,
        "question":  "Quelle commande permet de lancer le processus de regroupement de deux interfaces physiques afin de créer un groupe EtherChannel par le biais du protocole LACP ?",
        "options":  [
                        "channel-group 1 mode desirable",
                        "interface range GigabitEthernet 0/4 – 5",
                        "channel-group 2 mode auto",
                        "interface port-channel 2"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explique: Pour spécifier les interfaces dans un groupe EtherChannel, utilisez la commande de configuration globale interface range interface pour la plage d’interfaces utilisée. La commande interface range GigabitEthernet 0/4 – 5 est l’option correcte, car elle spécifie deux interfaces pour le groupe EtherChannel.",
        "image":  null
    },
    {
        "id":  105,
        "original_id":  105,
        "question":  "Quelle instruction est correcte sur la façon dont un commutateur de couche 2 détermine comment transférer des trames?",
        "options":  [
                        "Les décisions de transfert de trame sont basées sur l’adresse MAC et les mappages des ports dans la table CAM.",
                        "Le transfert de trame cut-through garantit que les trames non valides sont toujours abandonnées.",
                        "Les trames monodiffusion sont toujours transmises indépendamment de l’adresse MAC de destination.",
                        "Seules les trames avec des adresses de destination de diffusion sont transmises à tous les ports de commutateurs actifs."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explique: Le transfert de trames coupées ne lit que les 22 premiers octets d’une trame, ce qui exclut la séquence de vérification des trames et, par conséquent, des trames non valides peuvent être transférées. En plus des trames de diffusion, les trames avec une adresse MAC de destination qui n’est pas dans le CAM sont également inondées par tous les ports actifs. Les trames Unicast ne sont pas toujours transmises. Les trames reçues avec une adresse MAC de destination associée au port du commutateur sur lequel elles sont reçues ne sont pas transférées car la destination existe sur le segment de réseau connecté à ce port.",
        "image":  null
    },
    {
        "id":  106,
        "original_id":  106,
        "question":  "Reportez-vous à l’illustration. Quels sont les trois hôtes qui recevront des requêtes ARP de l’hôte A, dans l’hypothèse où le port Fa0/4 sur les deux commutateurs est configuré pour transporter du trafic pour plusieurs VLAN ? (Choisissez trois réponses.)",
        "options":  [
                        "hôte D",
                        "hôte C",
                        "hôte F",
                        "hôte G",
                        "hôte B",
                        "hôte E"
                    ],
        "correct":  [
                        0,
                        1,
                        2
                    ],
        "explanation":  "Expliquer : les requêtes ARP sont envoyées sous forme de diffusions. Cela signifie que la demande ARP est envoyée uniquement à travers un VLAN spécifique. Les hôtes du VLAN 1 n’entendront que les demandes ARP des hôtes du VLAN 1. Les hôtes du VLAN 2 n’entendront que les demandes ARP des hôtes du VLAN 2.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2022/01/2022-01-26_112504.jpg"
    },
    {
        "id":  107,
        "original_id":  107,
        "question":  "Parmi les propositions suivantes, lesquelles caractérisent les ports routés d’un commutateur multicouche ? Choisissez deux réponses.",
        "options":  [
                        "Ils sont utilisés pour les liaisons point à multipoint.",
                        "Dans un réseau commuté, elles sont principalement configurées entre les commutateurs, sur les couches principale et de distribution.",
                        "Ils ne sont associés à aucun VLAN particulier.",
                        "La commande interface vlan \u003cnuméro du VLAN\u003e doit être exécutée pour créer un VLAN sur les ports routés.",
                        "Ils prennent en charge les sous-interfaces, notamment les interfaces sur les routeurs Cisco IOS."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  108,
        "original_id":  108,
        "question":  "Quel protocole ou technologie définit un groupe de routeurs, l’un d’eux défini comme actif et l’autre comme veille?",
        "options":  [
                        "EtherChannel",
                        "DTP",
                        "HSRP",
                        "Protocole VTP"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  109,
        "original_id":  109,
        "question":  "Un administrateur réseau prépare l’implémentation du protocole Rapid PVST+ sur un réseau de production. Comment les types de liaisons Rapid PVST+ sont-ils déterminés sur les interfaces de commutateur ?",
        "options":  [
                        "Les types de liaisons sont déterminés automatiquement.",
                        "Les types de liaisons peuvent uniquement être déterminés si PortFast a été configuré.",
                        "Les types de liaisons peuvent uniquement être configurés sur des ports d’accès configurés au moyen d’un VLAN unique.",
                        "Les types de liaisons doivent être configurés avec des commandes de configuration de port spécifiques."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "Explique: Lorsque Rapid PVST+ est mis en œuvre, les types de liens sont déterminés automatiquement mais peuvent être spécifiés manuellement. Les types de liens peuvent être point à point, partagés ou de bord.",
        "image":  null
    },
    {
        "id":  110,
        "original_id":  110,
        "question":  "Sur quels ports de commutation devrait-on activer la protection BPDU pour améliorer la stabilité STP?",
        "options":  [
                        "tous les ports équipés de PortFast",
                        "tous les ports de trunk qui ne sont pas des ports racines",
                        "seuls les ports qui s’attachent à un commutateur voisin",
                        "uniquement les ports qui sont élus comme ports désignés"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  111,
        "original_id":  111,
        "question":  "Examinez l’illustration. Un administrateur réseau configure un routeur comme serveur DHCPv6. L’administrateur exécute une commande show ipv6 dhcp pool pour vérifier la configuration. Parmi les propositions suivantes, laquelle décrit la raison pour laquelle le nombre de clients actifs est 0 ?",
        "options":  [
                        "Aucune plage d’adresses IPv6 n’est spécifiée pour la configuration du pool DHCP IPv6.",
                        "Aucun client n’a encore communiqué avec le serveur DHCPv6.",
                        "L’état n’est pas maintenu par le serveur DHCPv6 en mode de fonctionnement DHCPv6 sans état.",
                        "L’adresse de la passerelle par défaut n’est pas disponible dans le pool."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Dans la configuration DHCPv6 sans état, indiquée par la commande ipv6 nd other-config-flag, le serveur DHCPv6 ne conserve pas les informations d’état, car les adresses IPv6 des clients ne sont pas gérées par le serveur DHCP. Étant donné que les clients configureront leurs adresses IPv6 en combinant le préfixe/la longueur du préfixe et un ID d’interface auto-généré, la configuration du pool dhcp ipv6 n’a pas besoin de spécifier la plage d’adresses IPv6 valide. Et comme les clients utiliseront l’adresse lien-local de l’interface du routeur comme adresse de passerelle par défaut, l’adresse de passerelle par défaut n’est pas nécessaire.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2022/06/i210895v1n1_210895.jpg"
    },
    {
        "id":  112,
        "original_id":  112,
        "question":  "Un administrateur réseau a trouvé un utilisateur envoyant une trame 802.1Q à un commutateur. Quelle est la meilleure solution pour prévenir ce type d’attaque?",
        "options":  [
                        "Les VLAN des ports d’accès utilisateur doivent être différents des VLAN natifs utilisés sur les ports de jonction.",
                        "Le numéro de VLAN natif utilisé sur n’importe quel tronc doit être l’un des VLAN de données actifs.",
                        "Les ports de trunk doivent être configurés avec la sécurité de port.",
                        "Les ports de trunk doivent utiliser le VLAN par défaut comme numéro de VLAN natif."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  113,
        "original_id":  113,
        "question":  "Un nouveau commutateur doit être ajouté à un réseau existant dans un bureau distant. L’administrateur réseau ne souhaite pas que les techniciens du bureau distant puissent ajouter de nouveaux VLAN au commutateur, mais le commutateur doit recevoir des mises à jour VLAN du domaine VTP. Quelles deux étapes doivent être effectuées pour configurer VTP sur le nouveau commutateur afin de répondre à ces conditions? (Choisissez deux propositions.)",
        "options":  [
                        "Configurer le nouveau commutateur en tant que client VTP.",
                        "Activer l’élagage VTP.",
                        "Configurer une adresse IP sur le nouveau commutateur.",
                        "Configurer tous les ports du nouveau commutateur en mode d’accès",
                        "Configurer le nom de domaine et le mot de passe VTP corrects sur le nouveau commutateur"
                    ],
        "correct":  [
                        0,
                        4
                    ],
        "explanation":  "Explication : Avant que le commutateur ne soit placé dans le bon domaine VTP et en mode client, le commutateur doit être connecté à tout autre commutateur du domaine VTP via une jonction afin de recevoir/ transmettre des informations VTP.",
        "image":  null
    },
    {
        "id":  114,
        "original_id":  114,
        "question":  "Deux protocoles sont utilisés pour l’authentification AAA au niveau des serveurs. Lesquels ? (Choisissez deux propositions.)",
        "options":  [
                        "SSH",
                        "TACACS+",
                        "RADIUS",
                        "802.1x",
                        "SNMP"
                    ],
        "correct":  [
                        1,
                        2
                    ],
        "explanation":  "Explication: L’authentification AAA au niveau du serveur repose sur un serveur d’authentification TACACS ou RADIUS externe pour alimenter une base de noms d’utilisateur et de mots de passe. Quand un client établit une connexion avec un appareil prenant en compte le AAA, ce dernier authentifie le client après avoir fait une demande aux serveurs d’authentification.",
        "image":  null
    },
    {
        "id":  115,
        "original_id":  115,
        "question":  "Quelle attaque réseau est atténuée en activant la garde BPDU ?",
        "options":  [
                        "attaque par débordement de la table CAM",
                        "serveurs DHCP non fiables sur un réseau",
                        "commutateurs non fiables sur un réseau",
                        "Usurpation d’adresse MAC"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Il existe plusieurs mécanismes de stabilité STP recommandés pour aider à atténuer les attaques par manipulation STP : PortFast – utilisé pour amener immédiatement une interface configurée comme un accès ou un port de jonction à l’état de transfert à partir d’un état de blocage. Appliqué à tous les ports d’utilisateur final. BPDU guard – désactive immédiatement en cas d’erreur un port qui reçoit un BPDU. Appliqué à tous les ports d’utilisateur final. La réception de BPDU peut faire partie d’une tentative non autorisée d’ajouter un commutateur au réseau. Root guard – empêche un commutateur de devenir le commutateur racine. Appliqué à tous les ports où le commutateur racine ne doit pas être situé. Loop guard – détecte les liens unidirectionnels pour empêcher les ports alternatifs ou racine de devenir des ports désignés. Appliqué à tous les ports qui sont ou peuvent devenir non désignés.",
        "image":  null
    },
    {
        "id":  116,
        "original_id":  116,
        "question":  "Quel est le terme commun donné aux messages de journal SNMP générés par les périphériques réseau et envoyés au serveur SNMP?",
        "options":  [
                        "L’accusé de réception",
                        "Audit",
                        "Déroutements",
                        "avertissements"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explication: Les périphériques réseau surveillés par le protocole SNMP peuvent être configurés pour générer des messages de journal envoyés à un serveur SNMP. Les messages de journal, également appelés pièges, contiennent tous les types d’informations, depuis les rapports d’état simples jusqu’aux situations urgentes complexes qui nécessitent une attention immédiate.",
        "image":  null
    },
    {
        "id":  117,
        "original_id":  117,
        "question":  "Quel protocole ou technologie est-il un protocole propriétaire Cisco qui est automatiquement activé sur les commutateurs 2960?",
        "options":  [
                        "STP",
                        "DTP",
                        "Protocole VTP",
                        "EtherChannel"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  118,
        "original_id":  118,
        "question":  "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l’administrateur appliquerait-il WPA2 avec AES au WLAN?",
        "options":  [
                        "pour assurer la confidentialité et l’intégrité du trafic sans fil en utilisant le chiffrement",
                        "fournir un service prioritaire pour les applications sensibles au temps",
                        "pour centraliser la gestion de plusieurs réseaux WLAN",
                        "pour réduire le risque d’ajout de points d’accès non autorisés au réseau"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  119,
        "original_id":  119,
        "question":  "Un technicien junior ajoutait une route à un routeur LAN. Un traceroute vers un périphérique sur le nouveau réseau a révélé un mauvais chemin et un état inaccessible. Que faut-il faire ou vérifier?",
        "options":  [
                        "Vérifiez que la route statique vers le serveur est présente dans la table de routage.",
                        "Vérifiez la configuration sur la route statique flottante et ajustez l’AD.",
                        "Vérifiez la configuration de l’interface de sortie sur la nouvelle route statique.",
                        "Créez une route statique flottante vers ce réseau."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  120,
        "original_id":  120,
        "question":  "Quels énoncés décrivent précisément les paramètres de mode bidirectionnel et de débit des commutateurs Cisco 2960 ? (Choisissez trois réponses.)",
        "options":  [
                        "Les paramètres de mode bidirectionnel et de débit de chaque port du commutateur peuvent être configurés manuellement.",
                        "Par défaut, la fonction de négociation automatique est désactivée.",
                        "Si la vitesse est définie sur 1 000 Mbits/s, les ports de commutateur fonctionnent en mode bidirectionnel simultané.",
                        "Par défaut, le débit est défini sur 100 Mbits/s et le mode bidirectionnel est réglé sur le mode de négociation automatique.",
                        "L’activation de la négociation automatique sur un concentrateur prévient les erreurs de correspondance des débits des ports lors de la connexion du concentrateur au commutateur.",
                        "La défaillance de la négociation automatique peut être à l’origine de problèmes de connectivité."
                    ],
        "correct":  [
                        0,
                        2,
                        5
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  121,
        "original_id":  121,
        "question":  "Reportez-vous à l’illustration. Quelle instruction indiquée dans le résultat permet au routeur R1 de répondre aux demandes DHCPv6 sans état ?",
        "options":  [
                        "prefix-delegation 2001:DB8:8::/48 00030001000E84244E70",
                        "ipv6 unicast-routing",
                        "dns-server 2001:DB8:8::8",
                        "ipv6 nd other-config-flag",
                        "ipv6 dhcp server LAN1"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Expliquez : La commande d’interface ipv6 nd other-config-flag permet d’envoyer des messages RA sur cette interface, indiquant que des informations supplémentaires sont disponibles à partir d’un serveur DHCPv6 sans état.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2022/06/CCNA-2-v7-exam-answers-56.png"
    },
    {
        "id":  122,
        "original_id":  122,
        "question":  "Quelle action se déroule lorsqu’une trame entrant dans un commutateur a une adresse MAC de destination multidiffusion?",
        "options":  [
                        "Le commutateur transmet le cadre hors du port spécifié.",
                        "Le commutateur ajoute un mappage d’entrée de table d’adresses MAC pour l’adresse MAC de destination et le port d’entrée.",
                        "Le commutateur remplace l’ancienne entrée et utilise le port le plus courant.",
                        "Le commutateur transmet la trame à tous les ports, sauf au port d’arrivée."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : Si l’adresse MAC de destination est une diffusion ou une multidiffusion, la trame est également diffusée sur tous les ports, à l’exception du port entrant.",
        "image":  null
    },
    {
        "id":  123,
        "original_id":  123,
        "question":  "Quel protocole ou technologie permet à des données de transmettre via des liaisons de commutation redondantes?",
        "options":  [
                        "EtherChannel",
                        "Protocole VTP",
                        "DTP",
                        "STP"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  124,
        "original_id":  124,
        "question":  "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l’administrateur modifie-t-il les adresses DHCP IPv4 par défaut sur un point d’accès?",
        "options":  [
                        "pour réduire le risque d’interférence par des dispositifs externes tels que les fours à micro-ondes",
                        "pour restreindre l’accès au WLAN uniquement par les utilisateurs autorisés et authentifiés",
                        "pour réduire l’interception de données ou l’accès au réseau sans fil à l’aide d’une plage d’adresses bien connue",
                        "pour surveiller le fonctionnement du réseau sans fil"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  125,
        "original_id":  125,
        "question":  "Un administrateur réseau configure la fonction de sécurité des ports sur un commutateur. La politique de sécurité indique qu’au maximum deux adresses MAC sont autorisées sur chaque port d’accès. Lorsque le nombre maximal d’adresses MAC est atteint, une trame avec l’adresse MAC source inconnue est abandonnée et une notification est envoyée au serveur Syslog. Quel mode de violation de sécurité doit être configuré sur chaque port d’accès ?",
        "options":  [
                        "warning",
                        "protect",
                        "shutdown",
                        "restrict"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  126,
        "original_id":  126,
        "question":  "Un administrateur réseau a configuré un routeur pour une opération DHCPv6 sans état. Toutefois, les utilisateurs signalent que les stations de travail ne reçoivent pas d’informations sur le serveur DNS. Quelles sont les deux lignes de configuration du routeur qui doivent être vérifiées pour s’assurer que le service DHCPv6 sans état est correctement configuré? (Choisissez deux propositions.)",
        "options":  [
                        "La ligne de nom de domaine est incluse dans la section du pool dhcp ipv6 .",
                        "Le ipv6 nd other-config-flag entré pour l’interface qui fait face au segment LAN.",
                        "La ligne dns-server est incluse dans la section ipv6 dhcp pool .",
                        "La ligne de préfixe d’adresse est incluse dans la section ipv6 dhcp pool .",
                        "Le ipv6 nd managed-config-flag est entré pour l’interface qui fait face au segment LAN."
                    ],
        "correct":  [
                        1,
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  127,
        "original_id":  127,
        "question":  "Quel protocole ou quelle technologie désactive les chemins redondants pour éliminer les boucles de la couche 2 ?",
        "options":  [
                        "EtherChannel",
                        "Protocole VTP",
                        "STP",
                        "DTP"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  128,
        "original_id":  128,
        "question":  "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l’administrateur utiliserait-il des serveurs RADIUS sur le réseau?",
        "options":  [
                        "pour restreindre l’accès au WLAN uniquement par les utilisateurs autorisés et authentifiés",
                        "pour faciliter la configuration de groupe et la gestion de plusieurs WLAN via un WLC",
                        "pour centraliser la gestion de plusieurs réseaux WLAN",
                        "pour surveiller le fonctionnement du réseau sans fil"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  129,
        "original_id":  129,
        "question":  "Quel est l’effet de l’entrée de la commande de configuration show ip dhcp snooping binding sur un commutateur?",
        "options":  [
                        "Il limite le nombre de messages de découverte, par seconde, à recevoir sur l’interface.",
                        "Il passe un port de jonction en mode d’accès.",
                        "Il vérifie l’adresse MAC de source dans l’en-tête Ethernet par rapport à l’adresse MAC de l’expéditeur dans le corps ARP.",
                        "Il affiche les associations d’adresses IP à Mac pour les interfaces de commutation."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  130,
        "original_id":  33,
        "question":  "Quel est l’effet de la saisie de la commande de configuration spanning-tree portfast sur un commutateur ?",
        "options":  [
                        "Cela désactive un port inutilisé.",
                        "Cela désactive tous les ports de jonction.",
                        "Il active le portfast sur une interface de commutateur spécifique.",
                        "Il vérifie l’adresse L2 source dans l’en-tête Ethernet par rapport à l’adresse L2 de l’expéditeur dans le corps ARP."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  131,
        "original_id":  34,
        "question":  "Quel est le préfixe IPv6 utilisé pour les adresses lien-local ?",
        "options":  [
                        "FF01::/8",
                        "2001 : :/3",
                        "FC00 : :/7",
                        "FE80::/10"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : Le préfixe lien-local IPv6 est FE80::/10 et est utilisé pour créer une adresse IPv6 lien-local sur une interface.",
        "image":  null
    },
    {
        "id":  132,
        "original_id":  49,
        "question":  "Quelles sont les deux fonctions exécutées par un WLC lors de l’utilisation du contrôle d’accès aux médias (MAC) ? (Choisissez deux réponses.)",
        "options":  [
                        "accusés de réception et retransmissions de paquets",
                        "Mise en file d’attente des trames et priorisation des paquets",
                        "balises et réponses des sondes",
                        "traduction du cadre vers d’autres protocoles",
                        "association et réassociation de clients itinérants"
                    ],
        "correct":  [
                        3,
                        4
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  133,
        "original_id":  55,
        "question":  "Un administrateur réseau configure un nouveau commutateur Cisco pour l’accès à la gestion à distance. Quels sont les trois éléments à configurer sur le commutateur pour la tâche ? (Choisissez trois réponses.)",
        "options":  [
                        "Adresse IP",
                        "Domaine VTP",
                        "lignes vty",
                        "VLAN par défaut",
                        "passerelle par défaut",
                        "adresse de bouclage"
                    ],
        "correct":  [
                        0,
                        2,
                        4
                    ],
        "explanation":  "Expliquez : Pour activer l’accès de gestion à distance, le commutateur Cisco doit être configuré avec une adresse IP et une passerelle par défaut. De plus, les lignes vty doivent être configurées pour activer les connexions Telnet ou SSH. Une adresse de bouclage, un VLAN par défaut et des configurations de domaine VTP ne sont pas nécessaires pour la gestion des commutateurs à distance.",
        "image":  null
    },
    {
        "id":  134,
        "original_id":  59,
        "question":  "Une entreprise vient de passer à un nouveau FAI. Le FAI a terminé et vérifié la connexion de son site à l’entreprise. Cependant, les employés de l’entreprise ne peuvent pas accéder à Internet. Que faut-il faire ou vérifier ?",
        "options":  [
                        "Vérifiez que la route statique vers le serveur est présente dans la table de routage.",
                        "Vérifiez la configuration sur la route statique flottante et ajustez l’AD.",
                        "Assurez-vous que l’ancienne route par défaut a été supprimée des routeurs périphériques de l’entreprise.",
                        "Créez une route statique flottante vers ce réseau."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  135,
        "original_id":  83,
        "question":  "Un technicien configure un routeur pour une petite entreprise avec plusieurs WLAN et n’a pas besoin de la complexité d’un protocole de routage dynamique. Qu’est-ce que doitêtre fait ou vérifié ?",
        "options":  [
                        "Vérifiez qu’il n’y a pas de route par défaut dans les tables de routage du routeur Edge.",
                        "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                        "Créez des routes statiques supplémentaires vers le même emplacement avec un AD de 1.",
                        "Vérifiez les statistiques sur la route par défaut pour la sursaturation."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  136,
        "original_id":  88,
        "question":  "Quel plan d’atténuation est le meilleur pour contrecarrer une attaque DoS qui crée un débordement de table d’adresses MAC ?",
        "options":  [
                        "Désactiver la DTP.",
                        "Désactiver STP.",
                        "Activer la sécurité des ports.",
                        "Placez les ports inutilisés dans un VLAN inutilisé."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Une attaque par débordement de table d’adresse MAC (CAM), un débordement de tampon et une usurpation d’adresse MAC peuvent tous être atténués en configurant la sécurité des ports. Un administrateur réseau ne souhaite généralement pas désactiver STP car il empêche les boucles de couche 2. Le DTP est désactivé pour empêcher le saut de VLAN. Placer des ports inutilisés dans un VLAN inutilisé empêche la connectivité filaire non autorisée.",
        "image":  null
    },
    {
        "id":  137,
        "original_id":  90,
        "question":  "Quel message DHCPv4 un client enverra-t-il pour accepter une adresse IPv4 proposée par un serveur DHCP ?",
        "options":  [
                        "diffusion DHCPACK",
                        "diffusion DHCPREQUEST",
                        "DHCPACK monodiffusion",
                        "DHCPREQUEST en monodiffusion"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explique: Lorsqu’un client DHCP reçoit des messages DHCPOFFER, il enverra un message DHCPREQUEST de diffusion à deux fins. Tout d’abord, il indique au serveur DHCP d’offre qu’il souhaite accepter l’offre et lier l’adresse IP. Deuxièmement, il informe tous les autres serveurs DHCP qui répondent que leurs offres sont refusées.",
        "image":  null
    },
    {
        "id":  138,
        "original_id":  93,
        "type": "match",
        "question":  "Faites correspondre le but avec son type de message DHCP.",
        "match_pairs": [
             { "term": "DHCPDISCOVER", "definition": "Trouver un serveur DHCP disponible." },
             { "term": "DHCPOFFER", "definition": "Le serveur propose une adresse IP au client." },
             { "term": "DHCPREQUEST", "definition": "Le client accepte l'offre et demande l'adresse." },
             { "term": "DHCPACK", "definition": "Le serveur confirme le bail de l'adresse IP." }
        ],
        "options": [],
        "correct": [],
        "explanation":  "Le processus DHCP comprend 4 étapes : Discover (Client cherche Serveur), Offer (Serveur propose IP), Request (Client demande IP), Acknowledge (Serveur valide).",
        "image":  "https://ccnareponses.com/wp-content/uploads/2022/06/2020-01-20_232028.jpg"
    },
    {
        "id":  139,
        "original_id":  94,
        "question":  "Quel protocole ajoute de la sécurité aux connexions à distance ?",
        "options":  [
                        "FTP",
                        "HTTP",
                        "NetBEUI",
                        "POP",
                        "SSH"
                    ],
        "correct":  [
                        4
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  140,
        "original_id":  95,
        "question":  "Examinez l’illustration. Un administrateur réseau vérifie la configuration du routage inter-VLAN. Les utilisateurs se plaignent que PC2 ne peut pas communiquer avec PC1. Sur la base de la sortie, quelle est la cause possible du problème ?",
        "options":  [
                        "Gi0/0 n’est pas configuré comme port de jonction.",
                        "L’interface de commande GigabitEthernet0/0.5 a été saisie de manière incorrecte.",
                        "Aucune adresse IP n’est configurée sur l’interface Gi0/0.",
                        "La commande no shutdown n’est pas entrée sur les sous-interfaces.",
                        "Le eLa commande ncapsulation dot1Q 5 contient le mauvais VLAN."
                    ],
        "correct":  [
                        4
                    ],
        "explanation":  "",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/CCNA2-v7-Modules-1-4-Switching-Concepts-VLANs-and-InterVLAN-Routing-Exam-Answers-44.png"
    },
    {
        "id":  141,
        "original_id":  97,
        "type": "match",
        "question":  "Faites correspondre chaque type de message DHCP avec sa description.",
        "match_pairs": [
             { "term": "DHCPDISCOVER", "definition": "Un client initie un message pour trouver un serveur DHCP." },
             { "term": "DHCPOFFER", "definition": "Un serveur DHCP répond à la requête initiale d’un client." },
             { "term": "DHCPREQUEST", "definition": "Le client accepte l’adresse IP fournie par le serveur DHCP." },
             { "term": "DHCPACK", "definition": "Le serveur DHCP confirme que le bail a été accepté." }
        ],
        "options": [],
        "correct": [],
        "explanation":  "1. DHCPDISCOVER (Client cherche). 2. DHCPOFFER (Serveur offre). 3. DHCPREQUEST (Client accepte/demande). 4. DHCPACK (Serveur valide).",
        "image":  "https://ccnareponses.com/wp-content/uploads/2021/12/2020-01-20_225135-1.jpg"
    },
    {
        "id":  142,
        "original_id":  98,
        "question":  "Quelle attaque réseau cherche à créer un DoS pour les clients en les empêchant d’obtenir un bail DHCP ?",
        "options":  [
                        "Usurpation d’adresse IP",
                        "Famine DHCP",
                        "Attaque de table CAM",
                        "Spoofing DHCP"
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explication : Les attaques de famine DHCP sont lancées par un attaquant avec l’intention de créer un DoS pour les clients DHCP. Pour atteindre cet objectif, l’attaquant utilise un outil qui envoie de nombreux messages DHCPDISCOVER afin de louer l’intégralité du pool d’adresses IP disponibles, les refusant ainsi aux hôtes légitimes.",
        "image":  null
    },
    {
        "id":  143,
        "original_id":  105,
        "question":  "Quelle commande permettra à un routeur de commencer à envoyer des messages lui permettant de configurer une adresse lien-local sans utiliser de serveur DHCP IPv6 ?",
        "options":  [
                        "un itinéraire statique",
                        "la route ipv6 ::/0 commande",
                        "la commande ipv6 unicast-routing",
                        "la commande de routage ip"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Pour activer IPv6 sur un routeur, vous devez utiliser la commande de configuration globale ipv6 unicast-routing ou utiliser la commande de configuration d’interface ipv6 enable. Cela équivaut à saisir le routage IP pour activer le routage IPv4 sur un routeur lorsqu’il a été désactivé. Gardez à l’esprit qu’IPv4 est activé sur un routeur par défaut. IPv6 n’est pas activé par défaut.",
        "image":  null
    },
    {
        "id":  144,
        "original_id":  119,
        "question":  "Les utilisateurs se plaignent d’un accès sporadique à Internet chaque après-midi. Que faut-il faire ou vérifier ?",
        "options":  [
                        "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                        "Vérifiez qu’il n’y a pas de route par défaut dans les tables de routage du routeur Edge.",
                        "Créez une route statique flottante vers ce réseau.",
                        "Vérifiez les statistiques sur la route par défaut pour la sursaturation."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  145,
        "original_id":  122,
        "question":  "Un nouveau commutateur de couche 3 est connecté à un routeur et est en cours de configuration pour le routage interVLAN. Quelles sont trois des cinq étapes requises pour la configuration ? (Choisissez trois réponses.)",
        "options":  [
                        "modifier le VLAN par défaut",
                        "installer une route statique",
                        "ajustement de la métrique d’itinéraire",
                        "création de VLAN",
                        "attribution de ports aux VLAN",
                        "création d’interfaces SVI",
                        "implémenter un protocole de routage"
                    ],
        "correct":  [
                        3,
                        4,
                        5
                    ],
        "explanation":  "Explication : Étape 1. Créez les VLAN. Étape 2. Créez les interfaces SVI VLAN. Étape 3. Configurez les ports d’accès. Attribuez-les à leurs VLAN respectifs. Étape 4. Activez le routage IP.",
        "image":  null
    },
    {
        "id":  146,
        "original_id":  132,
        "question":  "Les employés ne peuvent pas se connecter aux serveurs sur l’un des réseaux internes. Que faut-il faire ou vérifier ?",
        "options":  [
                        "Utilisez la commande « show ip interface brief » pour voir si une interface est en panne.",
                        "Vérifiez qu’il n’y a pas de route par défaut dans les tables de routage du routeur Edge.",
                        "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                        "Vérifiez les statistiques sur la route par défaut pour la sursaturation."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  147,
        "original_id":  134,
        "question":  "Un administrateur remarque qu’un grand nombre de paquets sont supprimés sur l’un des routeurs de succursale. Que faut-il faire ou vérifier ?",
        "options":  [
                        "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                        "Créez des routes statiques supplémentaires vers le même emplacement avec un AD de 1.",
                        "Vérifiez les statistiques sur la route par défaut pour la sursaturation.",
                        "Vérifiez la table de routage pour une route statique manquante."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  148,
        "original_id":  135,
        "question":  "Quelles sont les deux caractéristiques du commutateur qui pourraient aider à réduire la congestion du réseau ? (Choisissez deux réponses.)",
        "options":  [
                        "commutation interne rapide",
                        "tampons de grande taille",
                        "commutation store-and-forward",
                        "faible densité de ports",
                        "contrôle de séquence de contrôle de trame (FCS)"
                    ],
        "correct":  [
                        0,
                        1
                    ],
        "explanation":  "Explique: Comme l’inspection ARP dynamique (DAI), IP Source Guard (IPSG) doit déterminer la validité des liaisons adresse MAC à adresse IP. Pour ce faire, IPSG utilise la base de données de liaisons construite par DHCP snooping.",
        "image":  null
    },
    {
        "id":  149,
        "original_id":  136,
        "question":  "Quel est le résultat de la connexion de deux ou plusieurs commutateurs ensemble ?",
        "options":  [
                        "Le nombre de domaines de diffusion est augmenté.",
                        "La taille du domaine de diffusion est augmentée.",
                        "Le nombre de domaines de collision est réduit.",
                        "La taille du domaine de collision est augmentée."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "Explication : : lorsque deux commutateurs ou plus sont connectés ensemble, la taille du domaine de diffusion augmente, de même que le nombre de domaines de collision. Le nombre de domaines de diffusion n’est augmenté que lorsque des routeurs sont ajoutés.",
        "image":  null
    },
    {
        "id":  150,
        "original_id":  139,
        "question":  "Quel est l’effet de la saisie de la commande de configuration switchport port-security sur un commutateur ?",
        "options":  [
                        "Il apprend dynamiquement l’adresse L2 et la copie dans la configuration en cours.",
                        "Il active la sécurité des ports sur une interface.",
                        "Il active la sécurité des ports globalement sur le commutateur.",
                        "Il restreint le nombre de messages de découverte, par seconde, à recevoir sur l’interface."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  151,
        "original_id":  140,
        "question":  "Un administrateur réseau configure un WLAN. Pourquoi l’administrateur utiliserait-il plusieurs points d’accès légers ?",
        "options":  [
                        "pour centraliser la gestion de plusieurs WLAN",
                        "pour surveiller le fonctionnement du réseau sans fil",
                        "fournir un service prioritaire pour les applications urgentes",
                        "pour faciliter la configuration et la gestion de groupe de plusieurs WLAN via un WLC"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  152,
        "original_id":  141,
        "question":  "Examinez l’illustration. PC-A et PC-B sont tous deux dans le VLAN 60. PC-A est incapable de communiquer avec PC-B. Quel est le problème ?",
        "options":  [
                        "Le VLAN natif doit être le VLAN 60.",
                        "Le VLAN natif est supprimé du lien.",
                        "Le tronc a été configuré avec la commande switchport nonegotiate.",
                        "Le VLAN utilisé par PC-A ne figure pas dans la liste des VLAN autorisés sur le tronc."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "Explication : Étant donné que PC-A et PC-B sont connectés à des commutateurs différents, le trafic entre eux doit passer par la liaison de jonction. Les liaisons peuvent être configurées de manière à autoriser uniquement le trafic de VLAN particuliers à traverser le lien. Dans ce scénario, le VLAN 60, le VLAN associé à PC-A et PC-B, n’a pas été autorisé sur la liaison, comme indiqué par la sortie de show interfaces trunk.",
        "image":  "https://ccnareponses.com/wp-content/uploads/2022/06/i211586v1n1_Question-5.png"
    },
    {
        "id":  153,
        "original_id":  144,
        "question":  "Un administrateur réseau a configuré un routeur pour un fonctionnement DHCPv6 sans état. Cependant, les utilisateurs signalent que les postes de travail ne reçoivent pas les informations du serveur DNS. Quelles lignes de configuration de routeur doivent être vérifiées pour s’assurer que le service DHCPv6 sans état est correctement configuré ? (Choisissez deux réponses.)",
        "options":  [
                        "La ligne de nom de domaine est incluse dans la section ipv6 dhcp pool.",
                        "La ligne DNS-server est incluse dans la section ipv6 dhcp pool.",
                        "Le ipv6 nd other-config-flag est saisi pour l’interface qui fait face au segment LAN.",
                        "La ligne de préfixe d’adresse est incluse dans la section ipv6 dhcp pool.",
                        "Le ipv6 et managed-config-flag est saisi pour l’interface qui fait face au segment LAN."
                    ],
        "correct":  [
                        1,
                        2
                    ],
        "explanation":  "Explication : Pour utiliser la méthode DHCPv6 sans état, le routeur doit informer les clients DHCPv6 de configurer une adresse IPv6 SLAAC et contacter le serveur DHCPv6 pour obtenir des paramètres de configuration supplémentaires, tels que l’adresse du serveur DNS. Cela se fait via la commande ipv6 nd other-config-flag entrée dans le mode de configuration de l’interface. L’adresse du serveur DNS est indiquée dans la configuration du pool dhcp ipv6 .",
        "image":  null
    },
    {
        "id":  154,
        "original_id":  147,
        "question":  "Quelle action a lieu lorsqu’une trame entrant dans un commutateur a une adresse MAC de destination de monodiffusion qui ne figure pas dans la table d’adresses MAC ?",
        "options":  [
                        "Le commutateur met à jour la minuterie d’actualisation de l’entrée.",
                        "Le commutateur réinitialise la minuterie d’actualisation sur toutes les entrées de la table d’adresses MAC.",
                        "Le commutateur remplace l’ancienne entrée et utilise le port le plus récent.",
                        "Le commutateur transférera la trame vers tous les ports à l’exception du port entrant."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  155,
        "original_id":  150,
        "question":  "Quel protocole ou quelle technologie gère les négociations de jonction entre les commutateurs ?",
        "options":  [
                        "VTP",
                        "EtherChannel",
                        "DTP",
                        "STP"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  156,
        "original_id":  154,
        "question":  "Quel est l’effet de la saisie de la commande de configuration ip dhcp snooping limit rate 6 sur un commutateur ?",
        "options":  [
                        "Il affiche les associations d’adresses IP-MAC pour les interfaces de commutateur.",
                        "Il active la sécurité des ports globalement sur le commutateur.",
                        "Il restreint le nombre de messages de découverte, par seconde, à recevoir sur l’interface.",
                        "Il apprend dynamiquement l’adresse L2 et la copie dans la configuration en cours."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  157,
        "original_id":  156,
        "question":  "Quel est l’effet de la saisie de la commande de configuration ip arp inspection validate src-mac sur un commutateur ?",
        "options":  [
                        "Il vérifie l’adresse L2 source dans l’en-tête Ethernet par rapport à l’adresse L2 de l’expéditeur dans le corps ARP.",
                        "Cela désactive tous les ports de jonction.",
                        "Il affiche les associations d’adresses IP-MAC pour les interfaces de commutateur.",
                        "Il active le portfast sur une interface de commutateur spécifique."
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  158,
        "original_id":  158,
        "question":  "Quelle longueur d’adresse et de préfixe est utilisée lors de la configuration d’une route statique IPv6 par défaut ?",
        "options":  [
                        "::/0",
                        "FF02::1/8",
                        "0.0.0.0/0",
                        "::1/128"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  159,
        "original_id":  159,
        "question":  "Quelles sont les deux caractéristiques de Cisco Express Forwarding (CEF) ? (choisitet deux.)",
        "options":  [
                        "Lorsqu’un paquet arrive sur une interface de routeur, il est transmis au plan de contrôle où le processeur fait correspondre l’adresse de destination avec une entrée de table de routage correspondante.",
                        "Il s’agit du mécanisme de transfert le plus rapide sur les routeurs Cisco et les commutateurs multicouches.",
                        "Avec cette méthode de commutation, les informations de flux pour un paquet sont stockées dans le cache à commutation rapide pour transférer les futurs paquets vers la même destination sans intervention du processeur.",
                        "Les paquets sont transférés en fonction des informations contenues dans le FIB et d’un tableau de contiguïté.",
                        "Lorsqu’un paquet arrive sur une interface de routeur, il est transmis au plan de contrôle où le processeur recherche une correspondance dans le cache à commutation rapide."
                    ],
        "correct":  [
                        1,
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  160,
        "original_id":  160,
        "question":  "Quel terme décrit le rôle d’un commutateur Cisco dans le contrôle d’accès basé sur les ports 802.1X ?",
        "options":  [
                        "agent",
                        "suppliant",
                        "authentificateur",
                        "serveur d’authentification"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  161,
        "original_id":  161,
        "question":  "Quelle solution Cisco permet d’éviter les attaques d’usurpation d’identité ARP et d’empoisonnement ARP ?",
        "options":  [
                        "Inspection ARP dynamique",
                        "Protection des sources IP",
                        "Snooping DHCP",
                        "Sécurité des ports"
                    ],
        "correct":  [
                        0
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  162,
        "original_id":  162,
        "question":  "Quel est l’avantage de PVST+ ?",
        "options":  [
                        "PVST+ optimise les performances sur le réseau grâce à la sélection automatique du pont racine.",
                        "PVST+ réduit la consommation de bande passante par rapport aux implémentations traditionnelles de STP qui utilisent CST.",
                        "PVST+ nécessite moins de cycles CPU pour tous les commutateurs du réseau.",
                        "PVST+ optimise les performances sur le réseau grâce au partage de charge."
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "PVST+ permet un équilibrage de charge optimal. Cependant, cela est accompli en configurant manuellement les commutateurs à élire comme ponts racine pour différents VLAN sur le réseau. Les ponts racine ne sont pas automatiquement sélectionnés. De plus, le fait d’avoir des instances spanning-tree pour chaque VLAN consomme en fait plus de bande passante et augmente les cycles CPU pour tous les commutateurs du réseau.",
        "image":  null
    },
    {
        "id":  163,
        "original_id":  163,
        "question":  "Quel protocole ou quelle technologie utilise un routeur de secours pour assumer la responsabilité du transfert de paquets si le routeur actif tombe en panne ?",
        "options":  [
                        "EtherChannel",
                        "DTP",
                        "HSRP",
                        "VTP"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  164,
        "original_id":  165,
        "question":  "Quelle action a lieu lorsque l’adresse MAC source d’une trame entrant dans un commutateur est dans la table d’adresses MAC ?",
        "options":  [
                        "Le commutateur transfère la trame hors du port spécifié.",
                        "Le commutateur met à jour la minuterie d’actualisation de l’entrée.",
                        "Le commutateur remplace l’ancienne entrée et utilise le port le plus récent.",
                        "Le commutateur ajoute une entrée de table d’adresses MAC pour l’adresse MAC de destination et le port de sortie."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  165,
        "original_id":  166,
        "question":  "Une petite maison d’édition a une conception de réseau telle que lorsqu’une diffusion est envoyée sur le réseau local, 200 appareils reçoivent la diffusion transmise. Comment l’administrateur réseau peut-il réduire le nombre d’appareils recevant du trafic de diffusion ?",
        "options":  [
                        "Ajoutez plus de commutateurs afin que moins d’appareils soient sur un commutateur particulier.",
                        "Remplacez les commutateurs par des commutateurs dotés de plus de ports par commutateur. Cela permettra à plus d’appareils sur un commutateur particulier.",
                        "Segmentez le réseau local en réseaux locaux plus petits et acheminez entre eux.*",
                        "Remplacez au moins la moitié des commutateurs par des concentrateurs pour réduire la taille du domaine de diffusion."
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Expliquez : En divisant un grand réseau en deux réseaux plus petits, l’administrateur réseau a créé deux domaines de diffusion plus petits. Lorsqu’une diffusion est maintenant envoyée sur le réseau, la diffusion ne sera envoyée qu’aux appareils sur le même réseau local Ethernet. L’autre LAN ne recevra pas la diffusion.",
        "image":  null
    },
    {
        "id":  166,
        "original_id":  167,
        "question":  "Qu’est-ce qui définit une route hôte sur un routeur Cisco ?",
        "options":  [
                        "L’adresse lien-local est ajoutée automatiquement à la table de routage en tant que route hôte IPv6.",
                        "Une configuration de route hôte statique IPv4 utilise une adresse IP de destination d’un appareil spécifique et un masque de sous-réseau /32.",
                        "Une route hôte est désignée par un C dansla table de routage.",
                        "Une route hôte IPv6 statique doit inclure le type d’interface et le numéro d’interface du routeur du prochain saut."
                    ],
        "correct":  [
                        1
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  167,
        "original_id":  168,
        "question":  "Quoi d’autre est requis lors de la configuration d’une route statique IPv6 à l’aide d’une adresse lien-local de prochain saut ?",
        "options":  [
                        "distance administrative",
                        "adresse IP du routeur voisin",
                        "numéro de réseau et masque de sous-réseau sur l’interface du routeur voisin",
                        "numéro et type d’interface"
                    ],
        "correct":  [
                        3
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  168,
        "original_id":  169,
        "question":  "Un technicien configure un réseau sans fil pour une petite entreprise à l’aide d’un routeur sans fil SOHO. Quelles sont les deux méthodes d’authentification utilisées si le routeur est configuré avec WPA2 ? (Choisissez deux réponses.)",
        "options":  [
                        "personnel",
                        "AES",
                        "TKIP",
                        "WEP",
                        "entreprise"
                    ],
        "correct":  [
                        0,
                        4
                    ],
        "explanation":  "",
        "image":  null
    },
    {
        "id":  169,
        "original_id":  171,
        "question":  "Un PC a envoyé un message RS à un routeur IPv6 connecté au même réseau. Quelles sont les deux informations que le routeur enverra au client ? (Choisissez deux réponses.)",
        "options":  [
                        "longueur du préfixe",
                        "masque de sous-réseau en notation décimale à points",
                        "nom de domaine",
                        "distance administrative",
                        "préfixe",
                        "Adresse IP du serveur DNS"
                    ],
        "correct":  [
                        0,
                        4
                    ],
        "explanation":  "Explication : Le routeur fait partie du groupe tous les routeurs IPv6 et a reçu le message RS. Il génère un RA contenant le préfixe du réseau local et la longueur du préfixe (par exemple, 2001:db8:acad:1::/64)",
        "image":  null
    },
    {
        "id":  170,
        "original_id":  172,
        "question":  "Lorsqu’ils assistent à une conférence, les participants utilisent des ordinateurs portables pour la connectivité réseau. Lorsqu’un orateur invité tente de se connecter au réseau, l’ordinateur portable ne parvient pas à afficher les réseaux sans fil disponibles. Le point d’accès doit fonctionner dans quel mode ?",
        "options":  [
                        "mixte",
                        "passif",
                        "actif",
                        "ouvrir"
                    ],
        "correct":  [
                        2
                    ],
        "explanation":  "Explique: Active est un mode utilisé pour configurer un point d’accès afin que les clients doivent connaître le SSID pour se connecter au point d’accès. Les points d’accès et les routeurs sans fil peuvent fonctionner en mode mixte, ce qui signifie que plusieurs normes sans fil sont prises en charge. Open est un mode d’authentification pour un point d’accès qui n’a aucun impact sur la liste des réseaux sans fil disponibles pour un client. Lorsqu’un point d’accès est configuré en mode passif, le SSID est diffusé afin que le nom du réseau sans fil apparaisse dans la liste des réseaux disponibles pour les clients.",
        "image":  null
    },
    {
        "id":  171,
        "original_id":  173,
        "question":  "Quels sont les trois composants combinés pour former un identifiant de pont ?",
        "options":  [
                        "ID système étendu",
                        "coût",
                        "Adresse IP",
                        "priorité du pont",
                        "Adresse MAC",
                        "ID de port"
                    ],
        "correct":  [
                        0,
                        3,
                        4
                    ],
        "explanation":  "Explication : Les trois composants qui sont combinés pour former un ID de pont sont la priorité du pont, l’ID système étendu et l’adresse MAC.",
        "image":  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAbFBMVEVzldTg4ODS0tLxDwDtAwDjAADD0uz39/fy8vL3k4nzgna4yOixwuXu7u7s6+zn5+fyd2rvcGPtZljYAABrjNCpvOHrWkxegsqfs93NAADpUUFRd8THAABBa7wnVbERRKa8vLyxsLCoqKigoKClCvcsAAAAXklEQVR4AS3JxUEAQQAEwZo13Mk/R9w5/7UERJCIGIgj5qfRJZEpPyNfCgJTjMR1eRRnJiExFJz5Mf1PokWr/UztIjRGQ3V486u0HO55m634U6dMcf0RNPfkVCTvKjO16xHA8miowAAAAABJRU5ErkJggg=="
    }
]
;
