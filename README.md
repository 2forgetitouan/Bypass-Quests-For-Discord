# Discord Quest Spoofer

A script to simulate Discord quest progress directly from the browser console.

**Status:** Updated and Fixed for 2026

[English](#english) | [Français](#francais)

---

## English

### Quick Start

1. Open Discord and navigate to the Quests tab
2. Accept one or more quests you want to complete
3. Open DevTools:
   - Browser (Chrome, Firefox, Edge): press `F12`
   - Discord Desktop App: press `Ctrl+Shift+I`
4. Paste the entire `BypassQuest.js` script into the console and press Enter
5. If pasting is blocked, type `allow pasting` in the console, press Enter, then paste again

The script runs automatically and processes all active quests in parallel.

### Supported Quest Types

- WATCH_VIDEO
- WATCH_VIDEO_ON_MOBILE
- PLAY_ON_DESKTOP
- STREAM_ON_DESKTOP
- PLAY_ACTIVITY

### How It Works

The script:
1. Accesses Discord's internal webpack stores to retrieve active quests
2. Injects fake data into Discord's state (running games, stream metadata, etc.)
3. Sends spoofed progress updates to Discord's API
4. Processes multiple quests in parallel

### Requirements

- Desktop app required for PLAY_ON_DESKTOP and STREAM_ON_DESKTOP quests
- Browser console access
- Active Discord session


### Disclaimer

Use this script for educational purposes only. Automating quest completion may violate Discord's Terms of Service. The authors are not responsible for account suspension or other consequences.

---

<a id="francais"></a>

## Français

### Démarrage Rapide

1. Ouvrez Discord et allez dans l'onglet Quêtes
2. Acceptez une ou plusieurs quêtes que vous voulez compléter
3. Ouvrez les DevTools :
   - Navigateur (Chrome, Firefox, Edge) : appuyez sur `F12`
   - Application Discord Desktop : appuyez sur `Ctrl+Shift+I`
4. Collez tout le script `BypassQuest.js` dans la console puis appuyez sur Entrée
5. Si le collage est bloqué, tapez `allow pasting` dans la console, appuyez sur Entrée, puis collez à nouveau

Le script se lance automatiquement et traite toutes les quêtes actives en parallèle.

### Types de Quêtes Supportés

- WATCH_VIDEO
- WATCH_VIDEO_ON_MOBILE
- PLAY_ON_DESKTOP
- STREAM_ON_DESKTOP
- PLAY_ACTIVITY

### Comment Ça Marche

Le script :
1. Accède aux stores webpack internes de Discord pour récupérer les quêtes actives
2. Injecte de fausses données dans l'état Discord (jeux en cours, métadonnées de stream, etc.)
3. Envoie des mises à jour de progression spoofées à l'API Discord
4. Traite plusieurs quêtes en parallèle

### Prérequis

- L'application Desktop est requise pour PLAY_ON_DESKTOP et STREAM_ON_DESKTOP
- Accès à la console du navigateur
- Session Discord active


### Avertissement

Utilisez ce script à des fins éducatives uniquement. L'automatisation de la complétion des quêtes peut violer les Conditions d'utilisation de Discord. Les auteurs ne sont pas responsables des suspensions de compte ou d'autres conséquences.

