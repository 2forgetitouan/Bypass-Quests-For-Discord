# SpoofDiscordQuest (QuestBot)

### [Français](#fr) | [English](#en)

<a id="fr"></a>

# 🇫🇷 Français

Ce dépôt contient `BypassQuest.js`, un script à injecter dans la console du client Discord pour simuler l'avancement des quêtes.

### Fonctionnalités

- Simulation des types de quête pris en charge:
  - WATCH_VIDEO (vidéo)
  - PLAY_ON_DESKTOP (jeu joué sur desktop)
  - STREAM_ON_DESKTOP (stream sur desktop)
  - PLAY_ACTIVITY (activité / présence)
- Logs bilingues (FR / EN) contrôlés par `CONFIG.language`.
- Logs colorisés et structurés pour faciliter la lecture dans la console.
- Contrôleur global `window.QuestBotController` pour arrêter proprement et enregistrer des nettoyages.
- Alias console pratiques:
  - `stopQB()` ou `stopQuest()` : arrêt propre (appel 2x dans 5s pour confirmer)
  - `statusQB()` : affiche le statut courant (running / runId / nombre de cleanups)

### Utilisation

1. Ouvrez Discord (de préférence l'application Desktop si la quête nécessite l'accès natif).
2. Allez dans l'onglet 'Quêtes' et acceptez la quête que vous souhaitez compléter.
3. Ouvrez les outils développeur (Ctrl+Shift+I) et sélectionnez l'onglet Console.
4. Collez le contenu de [BypassQuest.js](https://github.com/2forgetitouan/Bypass-Quests-For-Discord/blob/main/BypassQuest.js) et appuyez sur Entrée.
5. Le script démarre automatiquement (`main()` est appelé). Les messages s'affichent en FR ou EN selon `CONFIG.language`.

#### Commandes utiles
- stopQB() — Armer l'arrêt (apparaîtra un message), appelez `stopQB()` à nouveau dans les 5s pour confirmer et arrêter.
- stopQuest() — alias de `stopQB()`.
- statusQB() — affiche l'état courant du QuestBot (running, runId, nombre de cleanups).

### Configuration
Ouvrez le fichier `BypassQuest.js` et modifiez la constante `CONFIG` (en haut du fichier):

```js
const CONFIG = {
  language: "EN", // "FR" ou "EN"
  debug: true, // true pour les logs debug, false pour masquer les messages debug
};
```

- `language`: `FR` ou `EN`.
- `debug`: si `false`, les logs de niveau `debug` seront filtrés.

### Traductions & logs
Tous les messages affichés dans la console utilisent le système de traduction interne du script et sont colorisés selon leur niveau (info, success, warn, error, debug).

### Arrêt / nettoyage
Le script enregistre des fonctions de nettoyage (rétablissement des stores, désabonnements aux events) dans `window.QuestBotController.cleanups` et les exécute lors de l'arrêt confirmé.

### Limitations et avertissements
- Ce script manipule des internals de Discord (stores webpack internes). Il peut cesser de fonctionner si Discord modifie sa structure interne.
- Certains types de quêtes (ex: PLAY_ON_DESKTOP, STREAM_ON_DESKTOP) requièrent des fonctionnalités natives. Le script vérifie la présence de `DiscordNative` et affichera un avertissement si indisponible.

### Débogage
- Activez `CONFIG.debug = true` pour voir les logs `debug` (snapshots de cfg, valeurs capturées, etc.).
- Si vous observez un `ReferenceError` ou une erreur non couverte, collectez la stack complète depuis la console et ouvrez une issue / partagez-la pour diagnostic.

### Contribuer
- Toute amélioration (clarification des messages, gestion d'autres types de quêtes, tests) est bienvenue.

---

**Disclaimer**: Utiliser ce script comporte des risques et peut violer les conditions d'utilisation de Discord. Utilisez-le à vos propres risques et uniquement à des fins d'apprentissage ou de test sur des comptes de test.


<a id="en"></a>

# 🇬🇧 English

This repository contains `BypassQuest.js`, a script you paste into Discord's client console to simulate quest progress.

### Features

- Supported quest types:
  - WATCH_VIDEO
  - PLAY_ON_DESKTOP
  - STREAM_ON_DESKTOP
  - PLAY_ACTIVITY
- Bilingual logs (FR / EN) controlled via `CONFIG.language`.
- Colorized and structured console logs for readability.
- Global controller `window.QuestBotController` for clean stop and cleanup registration.
- Handy console aliases:
  - `stopQB()` or `stopQuest()` — clean stop (call twice within 5s to confirm)
  - `statusQB()` — show current status (running / runId / cleanup count)

### Usage

1. Open Discord (preferably the Desktop app if the quest requires native access).
2. Go to the 'Quests' tab and accept the quest you want to complete.
3. Open DevTools (Ctrl+Shift+I / Cmd+Opt+I) and switch to the Console tab.
4. Paste the contents of [BypassQuest.js](https://github.com/2forgetitouan/Bypass-Quests-For-Discord/blob/main/BypassQuest.js) and press Enter.
5. The script starts automatically (`main()` is invoked). Messages will display in FR or EN according to `CONFIG.language`.

#### Useful commands
- stopQB() — Arms the stop (you'll see a message). Call `stopQB()` again within 5s to confirm and stop.
- stopQuest() — alias of `stopQB()`.
- statusQB() — prints QuestBot status (running, runId, cleanup count).

### Configuration
Open `BypassQuest.js` and edit the `CONFIG` constant (top of the file):

```js
const CONFIG = {
  language: "EN", // "FR" or "EN"
  debug: true, // true to see debug logs, false to hide debug messages
};
```

- `language`: `FR` or `EN`.
- `debug`: when `false`, debug-level logs are filtered.

### Translations & logs
All console messages use the script's translation system and are colorized by level (info, success, warn, error, debug).

### Stop / cleanup
The script registers cleanup functions (restore stores, unsubscribe from events) in `window.QuestBotController.cleanups` and runs them on confirmed stop.

### Limitations & warnings
- This script manipulates Discord internals (webpack stores). It may break if Discord changes internal structures.
- Some quest types (e.g., PLAY_ON_DESKTOP, STREAM_ON_DESKTOP) require native capabilities. The script checks for `DiscordNative` and will warn if unavailable.

### Debugging
- Enable `CONFIG.debug = true` to see `debug` logs (cfg snapshots, captured values, etc.).
- If you see a `ReferenceError` or another issue, capture the full stack trace from the console and open an issue / share it for diagnosis.

### Contributing
- PRs are welcome (clearer messages, support for more quest types, tests, etc.).

---

**Disclaimer**: Using this script may be risky and could violate Discord's Terms of Service. Use at your own risk and only for learning/testing on throwaway/test accounts.
