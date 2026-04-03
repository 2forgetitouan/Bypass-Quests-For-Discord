// =============================================
// CONFIGURATION INITIALE
// =============================================
const CONFIG = {
    language: "EN", // "FR" ou "EN"
    debug: false, // Affiche les logs détaillés
    processMultipleQuests: true, // Process all quests in sequence
    hideCompletedQuests: true, // Hide completed/expired quests from UI
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
        mobile_quest_skipped: (taskName) => `Quête mobile ne peut pas être bypassée, ignorée : ${taskName}`,
        all_quests_completed: `🎉 Toutes les quêtes acceptées ont été terminées !`,
        waiting_next_quest: (s) => `En attente de ${s}s avant de traiter la prochaine quête...`,
        found_quests: (count) => `Trouvé ${count} quête(s) acceptée(s) à terminer`,
        processing_quest: (current, total, name) => `Traitement de la quête ${current}/${total}: ${name}`,
        hidden_quests: (count) => `Masqué ${count} quête(s) terminée(s)/expirée(s) de l'interface`,
        no_quests_to_hide: `Aucune quête terminée/expirée à masquer`,
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
        all_quests_completed: `🎉 All accepted quests completed!`,
        waiting_next_quest: (s) => `Waiting ${s}s before processing next quest...`,
        found_quests: (count) => `Found ${count} accepted quest(s) to complete`,
        processing_quest: (current, total, name) => `Processing quest ${current}/${total}: ${name}`,
        hidden_quests: (count) => `Hidden ${count} completed/expired quest(s) from UI`,
        no_quests_to_hide: `No completed/expired quests to hide`,
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

// =============================================
// RÉCUPÉRATION DES STORES DISCORD
// =============================================
delete window.$;
const wpRequire = webpackChunkdiscord_app.push([[Symbol()], {}, (r) => r]);
webpackChunkdiscord_app.pop();
const stores = Object.values(wpRequire.c);

// Helper function to find exports dynamically without relying on minified property names
function findExport(predicate) {
    for (const store of stores) {
        try {
            if (!store?.exports) continue;
            // Check if predicate matches the exports object itself
            try {
                if (predicate(store.exports)) return store.exports;
            } catch {}
            // Check all properties of exports
            let keys;
            try {
                keys = Object.keys(store.exports);
            } catch {
                continue;
            }
            for (const key of keys) {
                try {
                    const exp = store.exports[key];
                    if (exp && predicate(exp)) return exp;
                } catch {}
            }
        } catch {}
    }
    return null;
}

// Helper for prototype method checks
function hasProtoMethod(obj, method) {
    return obj?.__proto__?.[method] !== undefined;
}

// Helper for direct method checks
function hasMethod(obj, method) {
    return typeof obj?.[method] === 'function';
}

const QuestsStore = findExport((x) => hasProtoMethod(x, 'getQuest'));
const ApplicationStreamingStore = findExport((x) => hasProtoMethod(x, 'getStreamerActiveStreamMetadata'));
const RunningGameStore = findExport((x) => hasMethod(x, 'getRunningGames'));
const ChannelStore = findExport((x) => hasProtoMethod(x, 'getAllThreadsForParent'));
const GuildChannelStore = findExport((x) => hasMethod(x, 'getSFWDefaultChannel'));
const FluxDispatcher = findExport((x) => hasProtoMethod(x, 'flushWaitQueue'));
const api = findExport((x) => hasMethod(x, 'get') && hasMethod(x, 'post'));

// Validation - warn if any store wasn't found
const storeChecks = {
    QuestsStore,
    ApplicationStreamingStore,
    RunningGameStore,
    ChannelStore,
    GuildChannelStore,
    FluxDispatcher,
    api,
};
for (const [name, store] of Object.entries(storeChecks)) {
    if (!store) log(`Failed to find ${name} - Discord may have updated`, 'error');
}

// =============================================
// HIDE COMPLETED/EXPIRED QUESTS
// =============================================
function hideCompletedQuests() {
    const indicators = ['View Reward', 'Quest ended', 'See Code'];
    const cardsToHide = new Set();

    // Use TreeWalker to efficiently find text nodes containing completion indicators
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    while (walker.nextNode()) {
        const text = walker.currentNode.textContent;
        if (!indicators.some((indicator) => text?.includes(indicator))) continue;

        // Walk up from this text node to find the quest card
        // Quest cards have id="quest-tile-{questId}" which is a stable identifier
        let el = walker.currentNode.parentElement;
        while (el && el !== document.body) {
            // Check if this element is a quest tile (has id starting with "quest-tile-")
            if (el.id && el.id.startsWith('quest-tile-')) {
                cardsToHide.add(el);
                break;
            }
            el = el.parentElement;
        }
    }

    // Hide identified quest cards
    cardsToHide.forEach((card) => (card.style.display = 'none'));

    if (cardsToHide.size > 0) {
        log(t('hidden_quests', cardsToHide.size), 'info');
    } else {
        log(t('no_quests_to_hide'), 'debug');
    }

    return cardsToHide.size;
}

// =============================================
// HELPER: Get all valid quests
// =============================================
function getAllValidQuests() {
    const allQuests = [...QuestsStore.quests.values()];
    const validQuests = [];

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

        validQuests.push(q);
    }

    return validQuests;
}

// =============================================
// LOGIQUE PRINCIPALE - PROCESS ALL QUESTS
// =============================================
async function main() {
    // mark this run with a unique id so older handlers can ignore themselves
    try { window.QuestBotRunId = (window.QuestBotRunId || 0) + 1; window.QuestBotController.runId = window.QuestBotRunId; } catch (e) {}
    
    // Hide completed/expired quests from UI if enabled
    if (CONFIG.hideCompletedQuests) {
        try {
            hideCompletedQuests();
        } catch (e) {
            log(`Error hiding completed quests: ${e}`, 'debug');
        }
    }

    if (!CONFIG.processMultipleQuests) {
        // Original behavior: process one quest
        await processSingleQuest();
        return;
    }

    // New behavior: process all quests
    const validQuests = getAllValidQuests();

    if (validQuests.length === 0) {
        log(t('questNotFound'), 'warn');
        return;
    }

    log(t('found_quests', validQuests.length), 'success');

    for (let i = 0; i < validQuests.length; i++) {
        // Check if stopped
        try {
            if ((window.QuestBotRunId || 0) !== window.QuestBotController.runId || !window.QuestBotController.running) {
                log('Stopped processing quests', 'warn');
                return;
            }
        } catch (e) {
            if (!window.QuestBotController.running) {
                log('Stopped processing quests', 'warn');
                return;
            }
        }

        const quest = validQuests[i];
        const { messages } = quest.config;
        log(t('processing_quest', i + 1, validQuests.length, messages.questName), 'info');

        await processQuest(quest);

        // Wait between quests
        if (i < validQuests.length - 1) {
            const delay = 3000;
            log(t('waiting_next_quest', delay/1000), 'info');
            await new Promise((r) => setTimeout(r, delay));
        }
    }

    log(t('all_quests_completed'), 'success');
}

// =============================================
// PROCESS SINGLE QUEST (original logic)
// =============================================
async function processSingleQuest() {
    const validQuests = getAllValidQuests();

    if (validQuests.length === 0) {
        log(t('questNotFound'), 'warn');
        return;
    }

    await processQuest(validQuests[0]);
}

// =============================================
// PROCESS ONE QUEST
// =============================================
async function processQuest(quest) {
    const { application, messages, taskConfig, taskConfigV2 } = quest.config;
    const taskName = Object.keys(taskConfig?.tasks || taskConfigV2?.tasks || {})[0];
    const secondsNeeded = taskConfig?.tasks[taskName]?.target || taskConfigV2?.tasks[taskName]?.target || taskConfigV2?.target || 0;
    let secondsDone = quest.userStatus?.progress?.[taskName]?.value || 0;
    
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

    const handlerRunId = window.QuestBotRunId || window.QuestBotController.runId;

    // Return a promise that resolves when quest is complete
    return new Promise((resolve) => {
        const handleHeartbeat = (data) => {
            // ignore if this handler belongs to an older run
            if (handlerRunId !== (window.QuestBotRunId || window.QuestBotController.runId)) {
                try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
                resolve();
                return;
            }
            try {
                // Get progress from heartbeat data (matching working script approach)
                const progress = config.configVersion === 1
                    ? data.userStatus.streamProgressSeconds
                    : Math.floor(data.userStatus.progress.PLAY_ON_DESKTOP.value);

                log(t('progression_seconds', progress, secondsNeeded), 'info');

                if (!window.QuestBotController.running) {
                    log(t('stopped_play_on_desktop'), 'warn');
                    try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
                    resolve();
                    return;
                }
                if (progress >= secondsNeeded) {
                    log(t('questCompleted'), 'success');
                    try { RunningGameStore.getRunningGames = () => realGames; } catch (e) {}
                    try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
                    resolve();
                }
            } catch (e) {
                log(t('error_handle_heartbeat', e), 'error');
            }
        };

        // Register cleanup to restore running games and unsubscribe handler on stop
        window.QuestBotController.addCleanup(() => {
            try { RunningGameStore.getRunningGames = () => realGames; } catch (e) {}
            try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat); } catch (e) {}
        });

        FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeat);
    });
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

    // Return a promise that resolves when quest is complete
    return new Promise((resolve) => {
        const handleHeartbeatStream = (data) => {
            // ignore if this handler belongs to an older run
            if (handlerRunId !== (window.QuestBotRunId || window.QuestBotController.runId)) {
                try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
                resolve();
                return;
            }
            try {
                // Get progress from heartbeat data (matching working script approach)
                const progress = config.configVersion === 1
                    ? data.userStatus.streamProgressSeconds
                    : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value);

                log(t('progression_seconds', progress, secondsNeeded), 'info');

                if (!window.QuestBotController.running) {
                    log(t('stopped_stream_on_desktop'), 'warn');
                    try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
                    resolve();
                    return;
                }
                if (progress >= secondsNeeded) {
                    log(t('questCompleted'), 'success');
                    try { ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc; } catch (e) {}
                    try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
                    resolve();
                }
            } catch (e) {
                log(t('error_handle_heartbeat_stream', e), 'error');
            }
        };

        // Register cleanup to restore streaming metadata and unsubscribe handler on stop
        window.QuestBotController.addCleanup(() => {
            try { ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc; } catch (e) {}
            try { FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream); } catch (e) {}
        });

        FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handleHeartbeatStream);
    });
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
