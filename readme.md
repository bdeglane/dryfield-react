# Pattern Redux dans le jeu [dryfield](https://github.com/bdeglane/dryfield)

## Installation
Installer webpack globalement avec ```npm install -g webpack``` puis construire le bundle ```npm run build```.

## Principe
Le pattern redux repose sur trois principes fondamentales.
 1. une seule source de données (état) contenu dans un unique store
 2. l'état de l'application est en lecture seule
 3. les changements d'états se font par l'intermédiaire de fonctions pure

![class](/doc/schema/dryfield-react.png)