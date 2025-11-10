# SpoofDiscordQuest (QuestBot)

Ce dépôt contient `BypassQuest.js`, un script à injecter dans la console du client Discord pour simuler l'avancement des quêtes.

## Fonctionnalités

- Simulation des types de quête pris en charge:
  - WATCH_VIDEO (vidéo)
  - PLAY_ON_DESKTOP (jeu joué sur desktop)
  - STREAM_ON_DESKTOP (stream sur desktop)
  - PLAY_ACTIVITY (activité / présence)
- Logs bilingues (FR / EN) contrôlés par `CONFIG.language`.
- Logs colorisés et structuré pour faciliter la lecture dans la console.
- Contrôleur global `window.QuestBotController` pour arrêter proprement et enregistrer des nettoyages.
- Alias console pratiques:
  - `stopQB()` ou `stopQuest()` : arrêt propre (appel 2x dans 5s pour confirmer)
  - `statusQB()` : affiche le statut courant (running / runId / nombre de cleanups)


## Utilisation

1. Ouvrez Discord (de préférence l'application Desktop si la quête nécessite l'accès natif).
2. Ouvrez les outils développeur (Ctrl+Shift+I) et sélectionnez l'onglet Console.
3. Collez le contenu de [BypassQuest.js](https://github.com/2forgetitouan/Bypass-Quests-For-Discord/blob/main/BypassQuest.js) et appuyez sur Entrée.
4. Le script démarre automatiquement (`main()` est appelé). Les messages s'affichent en FR ou EN selon `CONFIG.language`.

### Commandes utiles
- stopQB() — Armer l'arrêt (apparaîtra un message), appelez `stopQB()` à nouveau dans les 5s pour confirmer et arrêter.
- stopQuest() — alias de `stopQB()`.
- statusQB() — affiche l'état courant du QuestBot (running, runId, nombre de cleanups).

## Configuration
Ouvrez le fichier `BypassQuest.js` et modifiez la constante `CONFIG` (en haut du fichier):

```js
const CONFIG = {
  language: "EN", // "FR" ou "EN"
  debug: true, // true pour les logs debug, false pour masquer les messages debug
};
```

- `language`: `FR` ou `EN`.
- `debug`: si `false`, les logs de niveau `debug` seront filtrés.

## Traductions & logs
Tous les messages affichés dans la console utilisent le système de traduction interne du script et sont colorisés selon leur niveau (info, success, warn, error, debug).

## Arrêt / nettoyage
Le script enregistre des fonctions de nettoyage (rétablissement des stores, désabonnements aux events) dans `window.QuestBotController.cleanups` et les exécute lors de l'arrêt confirmé.

## Limitations et avertissements
- Ce script manipule des internals de Discord (stores webpack internes). Il peut cesser de fonctionner si Discord modifie sa structure interne.
- Certains types de quêtes (ex: PLAY_ON_DESKTOP, STREAM_ON_DESKTOP) requièrent des fonctionnalités natives. Le script vérifie la présence de `DiscordNative` et affichera un avertissement si indisponible.

## Débogage
- Activez `CONFIG.debug = true` pour voir les logs `debug` (snapshots de cfg, valeurs capturées, etc.).
- Si vous observez un `ReferenceError` ou une erreur non couverte, collectez la stack complète depuis la console et ouvrez une issue / partagez-la pour diagnostic.

## Contribuer
- Toute amélioration (clarification des messages, gestion d'autres types de quêtes, tests) est bienvenue.

---

**Disclaimer**: Utiliser ce script comporte des risques et peut violer les conditions d'utilisation de Discord. Utilisez-le à vos propres risques et uniquement à des fins d'apprentissage ou de test sur des comptes de test.
