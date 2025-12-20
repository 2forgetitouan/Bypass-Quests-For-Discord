// =============================================
// CONFIGURATION INITIALE
// =============================================
const CONFIG = {
    language: "EN", // "FR" ou "EN"
    debug: false, // Affiche les logs détaillés
};

// =============================================
// TRADUCTIONS
// =============================================
const TRANSLATIONS = {
    FR: {
        questNotFound: "Aucune quête active trouvée !",
        questCompleted: "Quête terminée !",
        spoofingVideo: (questName) => `Simulation de vidéo pour : ${questName}`,
        spoofingGame: (appName, timeLeft) =>
        `Jeu simulé : ${appName}. Temps restant : ~${timeLeft} min.`,
        spoofingStream: (appName, timeLeft) =>
        `Stream simulé : ${appName}. Temps restant : ~${timeLeft} min.`,
        spoofingActivity: (questName) => `Activité simulée : ${questName}`,
        // contrôleur / status / erreurs / debug
        controller_confirm_stop_arm: (s) => `Appelez stopQB() à nouveau dans ${s}s pour confirmer l'arrêt de QuestBot.`,
        controller_stopping_by: (caller) => `Arrêt de QuestBot... appelé par : ${caller}`,
        controller_stopping_unknown: `Arrêt de QuestBot... (appel inconnu)`,
        controller_stopped: `QuestBot arrêté et déchargé.`,
        controller_started: `QuestBot démarré. Relance en cours...`,
        controller_start_no_main: `main() non disponible pour redémarrer ; veuillez recharger le script.`,
        controller_stop_check_failed: (e) => `La vérification d'arrêt a échoué : ${e}`,
        controller_cleanup_error: (e) => `Erreur pendant le nettoyage : ${e}`,
        controller_start_main_error: (e) => `Erreur lors du lancement de main() : ${e}`,
        controller_status_error: (e) => `Statut : erreur ${e}`,
        main_unhandled_rejection: (e) => `Erreur inattendue dans main() : ${e}`,
        controller_status_prefix: `Statut`,
        main_quest_info: (taskName, needed, done) => `Type de quête: ${taskName}, Secondes nécessaires: ${needed}, Secondes déjà faites: ${done}`,
        main_unhandled_type: (taskName) => `Type de quête non géré : ${taskName}`,
        requires_desktop: `⚠️ Cette quête nécessite l'application desktop.`,
        debug_outer_seconds: (s) => `(debug) outer secondsNeeded (closure) : ${s}`,
        debug_cfg_snapshot: (snap) => `(debug) cfg snapshot: ${snap}`,
        debug_could_not_stringify_cfg: (e) => `(debug) impossible de convertir cfg en string: ${e}`,
        progression_seconds: (done, needed) => `Progression : ${done}/${needed} secondes`,
        stopped_watch_video: `Arrêt pendant la boucle WATCH_VIDEO.`,
        stopped_play_on_desktop: `Arrêt pendant le heartbeat PLAY_ON_DESKTOP.`,
        stopped_stream_on_desktop: `Arrêt pendant le heartbeat STREAM_ON_DESKTOP.`,
        stopped_play_activity: `Arrêt pendant la boucle PLAY_ACTIVITY.`,
        error_handle_heartbeat: (e) => `Erreur dans handleHeartbeat (PLAY_ON_DESKTOP): ${e}`,
        error_handle_heartbeat_stream: (e) => `Erreur dans handleHeartbeatStream (STREAM_ON_DESKTOP): ${e}`,
    },
    EN: {
        questNotFound: "No active quest found!",
        questCompleted: "Quest completed!",
        spoofingVideo: (questName) => `Spoofing video for: ${questName}`,
        spoofingGame: (appName, timeLeft) =>
        `Spoofed game: ${appName}. Time left: ~${timeLeft} min.`,
        spoofingStream: (appName, timeLeft) =>
        `Spoofed stream: ${appName}. Time left: ~${timeLeft} min.`,
        spoofingActivity: (questName) => `Spoofed activity: ${questName}`,
        // controller / status / errors / debug
        controller_confirm_stop_arm: (s) => `Call stopQB() again within ${s}s to confirm stopping QuestBot.`,
        controller_stopping_by: (caller) => `QuestBot stopping... called by: ${caller}`,
        controller_stopping_unknown: `QuestBot stopping... (caller unknown)`,
        controller_stopped: `QuestBot stopped and unloaded.`,
        controller_started: `QuestBot started. Relaunching...`,
        controller_start_no_main: `main() not available to restart; please reload the script.`,
        controller_stop_check_failed: (e) => `Stop confirmation check failed: ${e}`,
        controller_cleanup_error: (e) => `Error during cleanup: ${e}`,
        controller_start_main_error: (e) => `Error while launching main(): ${e}`,
        controller_status_error: (e) => `Status: error ${e}`,
        main_unhandled_rejection: (e) => `Unexpected error in main(): ${e}`,
        controller_status_prefix: `Status`,
        main_quest_info: (taskName, needed, done) => `Quest type: ${taskName}, Seconds needed: ${needed}, Seconds done: ${done}`,
        main_unhandled_type: (taskName) => `Unhandled quest type: ${taskName}`,
        requires_desktop: `⚠️ This quest requires the desktop application.`,
        debug_outer_seconds: (s) => `(debug) outer secondsNeeded (closure): ${s}`,
        debug_cfg_snapshot: (snap) => `(debug) cfg snapshot: ${snap}`,
        debug_could_not_stringify_cfg: (e) => `(debug) could not stringify cfg: ${e}`,
        progression_seconds: (done, needed) => `Progress: ${done}/${needed} seconds`,
        stopped_watch_video: `Stopped during WATCH_VIDEO loop.`,
        stopped_play_on_desktop: `Stopped during PLAY_ON_DESKTOP heartbeat.`,
        stopped_stream_on_desktop: `Stopped during STREAM_ON_DESKTOP heartbeat.`,
        stopped_play_activity: `Stopped during PLAY_ACTIVITY loop.`,
        error_handle_heartbeat: (e) => `Error in handleHeartbeat (PLAY_ON_DESKTOP): ${e}`,
        error_handle_heartbeat_stream: (e) => `Error in handleHeartbeatStream (STREAM_ON_DESKTOP): ${e}`,
        mobile_quest_skipped: (taskName) => `Mobile quest cannot be bypassed, skipping: ${taskName}`,
    },
    FR: {
        questNotFound: "Aucune quête active trouvée !",
        questCompleted: "Quête terminée !",
        spoofingVideo: (questName) => `Simulation de vidéo pour : ${questName}`,
        spoofingGame: (appName, timeLeft) =>
        `Jeu simulé : ${appName}. Temps restant : ~${timeLeft} min.`,
        spoofingStream: (appName, timeLeft) =>
        `Stream simulé : ${appName}. Temps restant : ~${timeLeft} min.`,
        spoofingActivity: (questName) => `Activité simulée : ${questName}`,
        controller_confirm_stop_arm: (s) => `Appelez stopQB() à nouveau dans ${s}s pour confirmer l'arrêt de QuestBot.`,
        controller_stopping_by: (caller) => `Arrêt de QuestBot... appelé par : ${caller}`,
        controller_stopping_unknown: `Arrêt de QuestBot... (appel inconnu)`,
        controller_stopped: `QuestBot arrêté et déchargé.`,
        controller_started: `QuestBot démarré. Relance en cours...`,
        controller_start_no_main: `main() non disponible pour redémarrer ; veuillez recharger le script.`,
        controller_stop_check_failed: (e) => `La vérification d'arrêt a échoué : ${e}`,
        controller_cleanup_error: (e) => `Erreur pendant le nettoyage : ${e}`,
        controller_start_main_error: (e) => `Erreur lors du lancement de main() : ${e}`,
        controller_status_error: (e) => `Statut : erreur ${e}`,
        main_unhandled_rejection: (e) => `Erreur inattendue dans main() : ${e}`,
        controller_status_prefix: `Statut`,
        main_quest_info: (taskName, needed, done) => `Type de quête: ${taskName}, Secondes nécessaires: ${needed}, Secondes déjà faites: ${done}`,
        main_unhandled_type: (taskName) => `Type de quête non géré : ${taskName}`,
        requires_desktop: `⚠️ Cette quête nécessite l'application desktop.`,
        debug_outer_seconds: (s) => `(debug) outer secondsNeeded (closure) : ${s}`,
        debug_cfg_snapshot: (snap) => `(debug) cfg snapshot: ${snap}`,
        debug_could_not_stringify_cfg: (e) => `(debug) impossible de convertir cfg en string: ${e}`,
        progression_seconds: (done, needed) => `Progression : ${done}/${needed} secondes`,
        stopped_watch_video: `Arrêt pendant la boucle WATCH_VIDEO.`,
        stopped_play_on_desktop: `Arrêt pendant le heartbeat PLAY_ON_DESKTOP.`,
        stopped_stream_on_desktop: `Arrêt pendant le heartbeat STREAM_ON_DESKTOP.`,
        stopped_play_activity: `Arrêt pendant la boucle PLAY_ACTIVITY.`,
        error_handle_heartbeat: (e) => `Erreur dans handleHeartbeat (PLAY_ON_DESKTOP): ${e}`,
        error_handle_heartbeat_stream: (e) => `Erreur dans handleHeartbeatStream (STREAM_ON_DESKTOP): ${e}`,
        mobile_quest_skipped: (taskName) => `Quête mobile ne peut pas être bypassée, ignorée : ${taskName}`,
    },
};

// Formatter simple: remplace %s successivement
function fmt(msg, args) {
    if (!args || args.length === 0) return msg;
    let out = msg;
    for (const a of args) {
        out = out.replace(/%s/, String(a));
    }
    return out;
}

// Translate helper: accepte soit une clé qui référence TRANSLATIONS[lang][key]
// soit une fonction stockée dans TRANSLATIONS (pour les templates), soit une string brute.
function t(key, ...args) {
    try {
        const lang = CONFIG.language in TRANSLATIONS ? CONFIG.language : 'EN';
        const dict = TRANSLATIONS[lang] || TRANSLATIONS['EN'];
        const v = dict && dict[key];
        if (typeof v === 'function') return v(...args);
        if (typeof v === 'string') return fmt(v, args);
        // fallback: if the top-level dict contains the key as a callable named like previous named functions
        return key && typeof key === 'string' ? fmt(key, args) : String(key);
    } catch (e) {
        return String(key);
    }
}

// Enhanced log with levels and colors
function log(message, level = 'info') {
    // If debug flag is false, skip debug messages
    if (!CONFIG.debug && level === 'debug') return;
    const styles = {
        info: 'color: #2196F3; font-weight: 600;',
        success: 'color: #4CAF50; font-weight: 600;',
        warn: 'color: #FF9800; font-weight: 600;',
        error: 'color: #F44336; font-weight: 600;',
        debug: 'color: #9E9E9E;'
    };
    const prefixStyle = 'color: #ffffff; background: #333; padding: 2px 6px; border-radius: 3px; font-weight:700;';
    try {
        if (typeof window !== 'undefined' && window.console && window.console.log) {
            // use %c styling when available
            console.log('%c[QuestBot] %c' + message, prefixStyle, styles[level] || styles.info);
        } else {
            console.log('[QuestBot] ' + message);
        }
    } catch (e) {
        try { console.log('[QuestBot] ' + message); } catch (e2) {}
    }
}

// Controller to allow stopping the script and cleaning up modifications
if (!window.QuestBotController) {
    window.QuestBotController = {
        running: true,
        cleanups: [],
        // track runs to invalidate old handlers when restarting/stopping
        runId: 0,
        status() {
            return { running: this.running, cleanups: this.cleanups.length };
        },
        stop() {
            // two-step confirmation: first call arms stop (5s), second call within window actually stops
                    try {
                        const now = Date.now();
                        const pending = window.QuestBotStopPending || 0;
                        const delta = now - pending;
                        const confirmWindow = 5000; // ms
                        if (!pending || delta > confirmWindow) {
                            window.QuestBotStopPending = now;
                            log(t('controller_confirm_stop_arm', confirmWindow/1000), 'warn');
                            return;
                        }
                // confirmed
                // clear pending flag
                try { delete window.QuestBotStopPending; } catch (e) {}
                if (!this.running) return;
                // Log caller stack to help debug unexpected stops
                try {
                    const stack = new Error().stack || '';
                    const caller = stack.split('\n').slice(2,6).map(s => s.trim()).join(' | ');
                    log(t('controller_stopping_by', caller), 'info');
                } catch (e) {
                    log(t('controller_stopping_unknown'), 'info');
                }
            } catch (e) {
                log(t('controller_stop_check_failed', e), 'error');
                return;
            }
            // run cleanup functions (restore stores, unsubscribe handlers)
            while (this.cleanups.length) {
                try {
                    const fn = this.cleanups.pop();
                    if (typeof fn === 'function') fn();
                } catch (e) {
                    log(t('controller_cleanup_error', e), 'error');
                }
            }
            this.running = false;
            // invalidate existing handlers
            try { window.QuestBotController.runId = (window.QuestBotController.runId || 0) + 1; } catch (e) {}
            // remove globals to simulate fresh Discord relaunch
            try { delete window.QuestBotRunId; } catch (e) {}
            try { delete window.stopQB; } catch (e) {}
            try { delete window.stopQuest; } catch (e) {}
            try { delete window.stopQuestBot; } catch (e) {}
            try { delete window.statusQB; } catch (e) {}
            try { delete window.startQB; } catch (e) {}
            try { delete window.QuestBotController; } catch (e) {}
            log(t('controller_stopped'), 'success');
        },
        start() {
            if (this.running) return;
            this.running = true;
                log(t('controller_started'), 'success');
            // increment runId to mark new run
            try { this.runId = (this.runId || 0) + 1; window.QuestBotRunId = this.runId; } catch (e) {}
            if (typeof main === 'function') {
                // call main but don't await here
                try {
                    main().catch((err) => log(t('main_unhandled_rejection', err), 'error'));
                } catch (e) {
                    log(t('controller_start_main_error', e), 'error');
                }
            } else {
                    log(t('controller_start_no_main'), 'warn');
            }
        },
        addCleanup(fn) {
            if (typeof fn === 'function') this.cleanups.push(fn);
        }
    };
}
// Short, intuitive console aliases to stop the bot quickly
// Utilisez `stopQB()` ou `stopQuest()` dans la console pour arrêter proprement.
// stopQB requires a quick double-call to confirm (call once to arm, again within 5s to stop)
window.stopQB = () => window.QuestBotController && window.QuestBotController.stop && window.QuestBotController.stop();
window.stopQuest = window.stopQB;
// Short status and start aliases
window.statusQB = () => {
    try {
        const base = window.QuestBotController && window.QuestBotController.status ? window.QuestBotController.status() : { running: false };
        const s = Object.assign({}, base, { runId: window.QuestBotRunId || window.QuestBotController.runId || 0 });
        log(t('controller_status_prefix') + ': ' + JSON.stringify(s), 'info');
        return s;
    } catch (e) {
        log(t('controller_status_error', e), 'error');
        return null;
    }
};
// startQB removed — restart the script by re-pasting/reloading the file

// Utility: extract target value robustly from a quest API response body
function extractTargetFromBody(body, taskKey, fallback = 0) {
    if (!body) return fallback;
    // Common paths we saw in different quest payloads
    const tryPaths = [
        body.config?.taskConfig?.tasks?.[taskKey]?.target,
        body.config?.taskConfigV2?.tasks?.[taskKey]?.target,
        body.config?.taskConfigV2?.target,
        body.taskConfig?.tasks?.[taskKey]?.target,
        body.taskConfigV2?.tasks?.[taskKey]?.target,
        body.taskConfigV2?.target,
        body.target,
        body.config?.target,
    ];
    for (const v of tryPaths) {
        if (typeof v === "number" && !isNaN(v)) return v;
    }

    // Fallback: do a shallow deep-search for the first numeric 'target' key
    let found = null;
    function deepSearch(obj, depth = 0) {
        if (!obj || typeof obj !== "object" || depth > 6 || found !== null) return;
        for (const k of Object.keys(obj)) {
            try {
                if (k === "target" && typeof obj[k] === "number") {
                    found = obj[k];
                    return;
                }
                if (typeof obj[k] === "object") deepSearch(obj[k], depth + 1);
            } catch (e) {
                // ignore
            }
            if (found !== null) return;
        }
    }
    deepSearch(body, 0);
    return found !== null ? found : fallback;
}

// =============================================
// RÉCUPÉRATION DES STORES DISCORD
// =============================================
delete window.$;
const wpRequire = webpackChunkdiscord_app.push([[Symbol()], {}, (r) => r]);
webpackChunkdiscord_app.pop();
const stores = Object.values(wpRequire.c);
const QuestsStore = stores.find((x) => x?.exports?.Z?.__proto__?.getQuest).exports.Z;
const ApplicationStreamingStore = stores.find((x) => x?.exports?.Z?.__proto__?.getStreamerActiveStreamMetadata).exports.Z;
const RunningGameStore = stores.find((x) => x?.exports?.ZP?.getRunningGames).exports.ZP;
const ChannelStore = stores.find((x) => x?.exports?.Z?.__proto__?.getAllThreadsForParent).exports.Z;
const GuildChannelStore = stores.find((x) => x?.exports?.ZP?.getSFWDefaultChannel).exports.ZP;
const FluxDispatcher = stores.find((x) => x?.exports?.Z?.__proto__?.flushWaitQueue).exports.Z;
const api = stores.find((x) => x?.exports?.tn?.get).exports.tn;

// =============================================
// LOGIQUE PRINCIPALE
// =============================================
async function main() {
    // mark this run with a unique id so older handlers can ignore themselves
    try { window.QuestBotRunId = (window.QuestBotRunId || 0) + 1; window.QuestBotController.runId = window.QuestBotRunId; } catch (e) {}
    
    // Get all quests and find one that's not mobile and not completed
    const allQuests = [...QuestsStore.quests.values()];
    let quest = null;
    
    for (const q of allQuests) {
        const isValid = q.id !== "1248385850622869556" &&
                       q.userStatus?.enrolledAt &&
                       !q.userStatus?.completedAt &&
                       new Date(q.config.expiresAt).getTime() > Date.now();
        
        if (!isValid) continue;
        
        const taskName = Object.keys(q.config.taskConfig?.tasks || q.config.taskConfigV2?.tasks || {})[0];
        
        // Skip mobile quests
        if (taskName && taskName.includes('MOBILE')) {
            log(t('mobile_quest_skipped', taskName), 'info');
            continue;
        }
        
        quest = q;
        break;
    }
    
    if (!quest) {
        log(t('questNotFound'), 'warn');
        return;
    }
    
    const { application, messages, taskConfig, taskConfigV2 } = quest.config;
    const taskName = Object.keys(taskConfig?.tasks || taskConfigV2?.tasks || {})[0];
    const secondsNeeded = taskConfig?.tasks[taskName]?.target || taskConfigV2?.tasks[taskName]?.target || taskConfigV2?.target || 0;
    let secondsDone = quest.userStatus?.progress?.[taskName]?.value || 0;
    const timeLeft = Math.ceil((secondsNeeded - secondsDone) / 60);
    
    log(t('main_quest_info', taskName, secondsNeeded, secondsDone), 'info');
    
    
    // Logique par type de quête
    switch (taskName) {
        case "WATCH_VIDEO":
            await spoofVideo(quest, secondsDone, secondsNeeded);
            break;
        case "PLAY_ON_DESKTOP":
            await spoofGame(quest, application, secondsDone, secondsNeeded);
            break;
        case "STREAM_ON_DESKTOP":
            await spoofStream(quest, application, secondsDone, secondsNeeded);
            break;
        case "PLAY_ACTIVITY":
            await spoofActivity(quest, secondsDone, secondsNeeded);
            break;
        default:
            log(t('main_unhandled_type', taskName), 'warn');
    }
}

// =============================================
// SIMULATION VIDÉO
// =============================================
async function spoofVideo(quest, secondsDone, secondsNeeded) {
    const { id, config } = quest;
    const { messages } = config;
    log(t('spoofingVideo', messages.questName), 'info');
    
    const maxFuture = 10;
    const speed = 7;
    const interval = 1;
    const enrolledAt = new Date(quest.userStatus.enrolledAt).getTime();
    
    while (secondsDone < secondsNeeded) {
        // stop if runId changed or controller stopped
        try {
            if ((window.QuestBotRunId || 0) !== window.QuestBotController.runId || !window.QuestBotController.running) {
                log(t('stopped_watch_video'), 'warn');
                return;
            }
        } catch (e) {
            if (!window.QuestBotController.running) { log(t('stopped_watch_video'), 'warn'); return; }
        }
        const maxAllowed = Math.floor((Date.now() - enrolledAt) / 1000) + maxFuture;
        const diff = maxAllowed - secondsDone;
        if (diff >= speed) {
            await api.post({
                url: `/quests/${id}/video-progress`,
                body: { timestamp: Math.min(secondsNeeded, secondsDone + speed) },
            });
            secondsDone = Math.min(secondsNeeded, secondsDone + speed);
            log(t('progression_seconds', secondsDone, secondsNeeded), 'info');
        }
        await new Promise((r) => setTimeout(r, interval * 1000));
    }
    log(t('questCompleted'), 'success');
}

// =============================================
// SIMULATION JEU
// =============================================
async function spoofGame(quest, application, secondsDone, secondsNeeded) {
    const { id, config } = quest;
    const { messages } = config;
    const timeLeft = Math.ceil((secondsNeeded - secondsDone) / 60);
    
    if (typeof DiscordNative === "undefined") {
        log(t('requires_desktop'), 'warn');
        return;
    }
    
    log(t('spoofingGame', application.name, timeLeft), 'info');
    
    const fakeGame = {
        cmdLine: `C:\\FakePath\\${application.name}\\game.exe`,
        exeName: "game.exe",
        exePath: `c:/fakepath/${application.name.toLowerCase()}/game.exe`,
        hidden: false,
        isLauncher: false,
        id: application.id,
        name: application.name,
        pid: Math.floor(Math.random() * 30000) + 1000,
        pidPath: [Math.floor(Math.random() * 30000) + 1000],
        processName: application.name,
        start: Date.now(),
    };
    
    const realGames = RunningGameStore.getRunningGames();
    RunningGameStore.getRunningGames = () => [fakeGame];
    FluxDispatcher.dispatch({
        type: "RUNNING_GAMES_CHANGE",
        removed: realGames,
        added: [fakeGame],
        games: [fakeGame],
    });
    // Register cleanup to restore running games and unsubscribe handler on stop
    window.QuestBotController.addCleanup(() => {
        try { RunningGameStore.getRunningGames = () => realGames; } catch (e) {}
        try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
    });
    
    const handlerRunId = window.QuestBotRunId || window.QuestBotController.runId;
    const handleHeartbeat = async (data) => {
        // ignore if this handler belongs to an older run
        if (handlerRunId !== (window.QuestBotRunId || window.QuestBotController.runId)) {
            try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
            return;
        }
        try {
            const progress = data.userStatus.progress.PLAY_ON_DESKTOP.value;
            // Debug: show the outer secondsNeeded captured by closure
            log(t('debug_outer_seconds', secondsNeeded), 'debug');
            // Re-fetch quest to get up-to-date target in case the structure changed
            const res = await api.get({ url: `/quests/${id}` });
            const cfg = res.body.config || {};
            // Debug: log a small snapshot of cfg to help understand structure
            try {
                const snap = JSON.stringify(cfg).slice(0, 1000);
                log(t('debug_cfg_snapshot', snap + (snap.length>=1000?"... (truncated)":"")), 'debug');
            } catch (e) {
                log(t('debug_could_not_stringify_cfg', e), 'debug');
            }
            const currentTarget = extractTargetFromBody(res.body, 'PLAY_ON_DESKTOP', secondsNeeded);

            log(t('progression_seconds', progress, currentTarget), 'info');
            if (!window.QuestBotController.running) {
                log(t('stopped_play_on_desktop'), 'warn');
                try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
                return;
            }
                if (progress >= currentTarget) {
                log(t('questCompleted'), 'success');
                try { RunningGameStore.getRunningGames = () => realGames; } catch (e) {}
                try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
            }
        } catch (e) {
            log(t('error_handle_heartbeat', e), 'error');
        }
    };
    FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat);
    // ensure handler ignores stale runs: capture current run id
}


// =============================================
// SIMULATION STREAM
// =============================================
async function spoofStream(quest, application, secondsDone, secondsNeeded) {
    const { id, config } = quest;
    const { messages } = config;
    const timeLeft = Math.ceil((secondsNeeded - secondsDone) / 60);
    
    if (typeof DiscordNative === "undefined") {
        log(t('requires_desktop'), 'warn');
        return;
    }
    
    log(t('spoofingStream', application.name, timeLeft), 'info');
    
    const handlerRunId = window.QuestBotRunId || window.QuestBotController.runId;
    const realFunc = ApplicationStreamingStore.getStreamerActiveStreamMetadata;
    ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
        id: application.id,
        pid: Math.floor(Math.random() * 30000) + 1000,
                                                                       sourceName: null,
    });
    // Register cleanup to restore streaming metadata and unsubscribe handler on stop
    window.QuestBotController.addCleanup(() => {
        try { ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc; } catch (e) {}
        try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
    });
    
    const handleHeartbeatStream = async (data) => {
        // ignore if this handler belongs to an older run
        if (handlerRunId !== (window.QuestBotRunId || window.QuestBotController.runId)) {
            try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
            return;
        }
        try {
            const progress = data.userStatus.progress.STREAM_ON_DESKTOP.value;
            // Debug: show the outer secondsNeeded captured by closure
            log(t('debug_outer_seconds', secondsNeeded), 'debug');
            const res = await api.get({ url: `/quests/${id}` });
            const cfg = res.body.config || {};
            try {
                const snap = JSON.stringify(cfg).slice(0, 1000);
                log(t('debug_cfg_snapshot', snap + (snap.length>=1000?"... (truncated)":"")), 'debug');
            } catch (e) {
                log(t('debug_could_not_stringify_cfg', e), 'debug');
            }
            const currentTarget = extractTargetFromBody(res.body, 'STREAM_ON_DESKTOP', secondsNeeded);

            log(t('progression_seconds', progress, currentTarget), 'info');
            if (!window.QuestBotController.running) {
                log(t('stopped_stream_on_desktop'), 'warn');
                try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
                return;
            }
                if (progress >= currentTarget) {
                log(t('questCompleted'), 'success');
                try { ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc; } catch (e) {}
                try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
            }
        } catch (e) {
            log(t('error_handle_heartbeat_stream', e), 'error');
        }
    };
    FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream);
}
// =============================================
// SIMULATION ACTIVITÉ
// =============================================
async function spoofActivity(quest, secondsDone, secondsNeeded) {
    const { id, config } = quest;
    const { messages } = config;
    log(t('spoofingActivity', messages.questName), 'info');
    
    const channelId =
    ChannelStore.getSortedPrivateChannels()[0]?.id ||
    Object.values(GuildChannelStore.getAllGuilds()).find(
        (x) => x?.VOCAL?.length > 0
    )?.VOCAL[0]?.channel?.id;
    
    while (secondsDone < secondsNeeded) {
        try {
            if ((window.QuestBotRunId || 0) !== window.QuestBotController.runId || !window.QuestBotController.running) {
                log(t('stopped_play_activity'), 'warn');
                return;
            }
        } catch (e) {
            if (!window.QuestBotController.running) { log(t('stopped_play_activity'), 'warn'); return; }
        }
        await api.post({
            url: `/quests/${id}/heartbeat`,
            body: { stream_key: `call:${channelId}:1`, terminal: false },
        });
        const res = await api.get({ url: `/quests/${id}` });
        secondsDone = res.body.userStatus.progress.PLAY_ACTIVITY.value;
        log(t('progression_seconds', secondsDone, secondsNeeded), 'info');
        await new Promise((r) => setTimeout(r, 20000));
    }
    log(t('questCompleted'), 'success');
}

// =============================================
// LANCEMENT
// =============================================
main().catch(log);
