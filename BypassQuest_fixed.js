// Discord Quest Spoofer
// Simulates quest progress by injecting fake data into Discord's store
(() => {
function log(msg, level = 'info') {
    const styles = {
        info: 'color: #2196F3; font-weight: 600;',
        success: 'color: #4CAF50; font-weight: 600;',
        warn: 'color: #FF9800; font-weight: 600;',
    };
    try {
        if (window?.console?.log) {
            console.log('%c[QuestBot] %c' + msg, 'color:#fff;background:#333;padding:2px 6px;font-weight:700;border-radius:3px;', styles[level] || styles.info);
        } else {
            console.log('[QuestBot] ' + msg);
        }
    } catch (e) {
        
    }
}

delete window.$;
const wpRequire = webpackChunkdiscord_app.push([[Symbol()], {}, r => r]);
webpackChunkdiscord_app.pop();
const stores = Object.values(wpRequire.c);

const ApplicationStreamingStore = stores.find(x => x?.exports?.A?.__proto__?.getStreamerActiveStreamMetadata)?.exports.A;
const RunningGameStore = stores.find(x => x?.exports?.Ay?.getRunningGames)?.exports.Ay;
const QuestsStore = stores.find(x => x?.exports?.A?.__proto__?.getQuest)?.exports.A;
const ChannelStore = stores.find(x => x?.exports?.A?.__proto__?.getAllThreadsForParent)?.exports.A;
const GuildChannelStore = stores.find(x => x?.exports?.Ay?.getSFWDefaultChannel)?.exports.Ay;
const FluxDispatcher = stores.find(x => x?.exports?.h?.__proto__?.flushWaitQueue)?.exports.h;
const api = stores.find(x => x?.exports?.Bo?.get)?.exports.Bo;

const SUPPORTED_TASKS = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"];
const IS_DESKTOP = typeof DiscordNative !== "undefined";

async function spoofVideo(quest, secondsNeeded) {
    const maxFuture = 10, speed = 7, interval = 1;
    const enrolledAt = new Date(quest.userStatus.enrolledAt).getTime();
    let secondsDone = quest.userStatus?.progress?.WATCH_VIDEO?.value ?? 0;
    let completed = false;

    log(`Spoofing video: ${quest.config.messages.questName}`, 'info');

    const loop = async () => {
        while (true) {
            const maxAllowed = Math.floor((Date.now() - enrolledAt) / 1000) + maxFuture;
            const diff = maxAllowed - secondsDone;
            const timestamp = secondsDone + speed;

            if (diff >= speed) {
                const res = await api.post({
                    url: `/quests/${quest.id}/video-progress`,
                    body: { timestamp: Math.min(secondsNeeded, timestamp + Math.random()) }
                });
                completed = res.body.completed_at != null;
                secondsDone = Math.min(secondsNeeded, timestamp);
                log(`Progress: ${secondsDone}/${secondsNeeded}s`, 'info');
            }

            if (timestamp >= secondsNeeded) break;
            await new Promise(r => setTimeout(r, interval * 1000));
        }

        if (!completed) {
            await api.post({
                url: `/quests/${quest.id}/video-progress`,
                body: { timestamp: secondsNeeded }
            });
        }
        log('Quest completed.', 'success');
    };

    loop();
}

async function spoofGame(quest, appId, appName, questName, secondsNeeded) {
    if (!IS_DESKTOP) {
        log('This quest requires Discord desktop application.', 'warn');
        return;
    }

    const secsDone = quest.userStatus?.progress?.PLAY_ON_DESKTOP?.value ?? 0;
    log(`Spoofing game: ${appName} (${Math.ceil((secondsNeeded - secsDone) / 60)} min remaining)`, 'info');

    api.get({ url: `/applications/public?application_ids=${appId}` }).then(res => {
        const app = res.body[0];
        const exe = app.executables?.find(x => x.os === "win32")?.name?.replace(">", "") ?? app.name.replace(/[\/\\:*?"<>|]/g, "");

        const fakeGame = {
            cmdLine: `C:\\Program Files\\${app.name}\\${exe}`,
            exeName: exe,
            exePath: `c:/program files/${app.name.toLowerCase()}/${exe}`,
            hidden: false,
            isLauncher: false,
            id: appId,
            name: app.name,
            pid: Math.floor(Math.random() * 30000) + 1000,
            pidPath: [Math.floor(Math.random() * 30000) + 1000],
            processName: app.name,
            start: Date.now(),
        };

        const realGames = RunningGameStore.getRunningGames();
        const fakes = RunningGameStore.__fakeGames__ = (RunningGameStore.__fakeGames__ ?? []);
        fakes.push(fakeGame);

        RunningGameStore.__realGetRunningGames__ ??= RunningGameStore.getRunningGames;
        RunningGameStore.__realGetGameForPID__ ??= RunningGameStore.getGameForPID;
        RunningGameStore.getRunningGames = () => RunningGameStore.__fakeGames__;
        RunningGameStore.getGameForPID = (pid) => RunningGameStore.__fakeGames__.find(x => x.pid === pid);
        
        FluxDispatcher.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            removed: realGames,
            added: [fakeGame],
            games: RunningGameStore.__fakeGames__
        });

        const handler = (data) => {
            if (data.questId !== quest.id) return;
            const progress = quest.config.configVersion === 1 
                ? data.userStatus.streamProgressSeconds 
                : Math.floor(data.userStatus.progress.PLAY_ON_DESKTOP.value);
            log(`Progress: ${progress}/${secondsNeeded}s`, 'info');

            if (progress >= secondsNeeded) {
                log('Quest completed.', 'success');
                RunningGameStore.__fakeGames__ = RunningGameStore.__fakeGames__.filter(x => x.pid !== fakeGame.pid);
                if (RunningGameStore.__fakeGames__.length === 0) {
                    RunningGameStore.getRunningGames = RunningGameStore.__realGetRunningGames__;
                    RunningGameStore.getGameForPID = RunningGameStore.__realGetGameForPID__;
                    delete RunningGameStore.__fakeGames__;
                    delete RunningGameStore.__realGetRunningGames__;
                    delete RunningGameStore.__realGetGameForPID__;
                }
                FluxDispatcher.dispatch({
                    type: "RUNNING_GAMES_CHANGE",
                    removed: [fakeGame],
                    added: [],
                    games: RunningGameStore.__fakeGames__ ?? []
                });
                FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handler);
            }
        };
        FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handler);
    });
}

async function spoofStream(quest, appId, appName, questName, secondsNeeded) {
    if (!IS_DESKTOP) {
        log('This quest requires Discord desktop application.', 'warn');
        return;
    }

    const secsDone = quest.userStatus?.progress?.STREAM_ON_DESKTOP?.value ?? 0;
    log(`Spoofing stream: ${appName} (${Math.ceil((secondsNeeded - secsDone) / 60)} min remaining)`, 'info');

    ApplicationStreamingStore.__realGetStreamerActiveStreamMetadata__ ??= ApplicationStreamingStore.getStreamerActiveStreamMetadata;
    ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
        id: appId,
        pid: Math.floor(Math.random() * 30000) + 1000,
        sourceName: null
    });

    const handler = (data) => {
        if (data.questId !== quest.id) return;
        const progress = quest.config.configVersion === 1 
            ? data.userStatus.streamProgressSeconds 
            : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value);
        log(`Progress: ${progress}/${secondsNeeded}s`, 'info');

        if (progress >= secondsNeeded) {
            log('Quest completed.', 'success');
            ApplicationStreamingStore.getStreamerActiveStreamMetadata = ApplicationStreamingStore.__realGetStreamerActiveStreamMetadata__;
            delete ApplicationStreamingStore.__realGetStreamerActiveStreamMetadata__;
            FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handler);
        }
    };
    FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", handler);
}

async function spoofActivity(quest, questName, secondsNeeded) {
    log(`Spoofing activity: ${questName}`, 'info');

    const channelId = ChannelStore.getSortedPrivateChannels()[0]?.id ?? 
        Object.values(GuildChannelStore.getAllGuilds()).find(x => x?.VOCAL?.length > 0)?.VOCAL[0].channel.id;
    const streamKey = `call:${channelId}:1`;

    const loop = async () => {
        while (true) {
            const res = await api.post({
                url: `/quests/${quest.id}/heartbeat`,
                body: { stream_key: streamKey, terminal: false }
            });
            const progress = res.body.progress.PLAY_ACTIVITY.value;
            log(`Progress: ${progress}/${secondsNeeded}s`, 'info');

            if (progress >= secondsNeeded) {
                await api.post({
                    url: `/quests/${quest.id}/heartbeat`,
                    body: { stream_key: streamKey, terminal: true }
                });
                log('Quest completed.', 'success');
                break;
            }

            await new Promise(r => setTimeout(r, 20000));
        }
    };

    loop();
}

const quests = [...QuestsStore.quests.values()].filter(q =>
    q.userStatus?.enrolledAt &&
    !q.userStatus?.completedAt &&
    new Date(q.config.expiresAt).getTime() > Date.now() &&
    SUPPORTED_TASKS.some(t => (q.config.taskConfig ?? q.config.taskConfigV2).tasks[t])
);

if (!quests.length) {
    log('No active quests found.', 'warn');
} else {
    quests.forEach(quest => {
        const appId = quest.config.application.id;
        const appName = quest.config.application.name;
        const questName = quest.config.messages.questName;
        const taskConfig = quest.config.taskConfig ?? quest.config.taskConfigV2;
        const taskName = SUPPORTED_TASKS.find(t => taskConfig.tasks[t]);
        const secondsNeeded = taskConfig.tasks[taskName].target;
        const secondsDone = quest.userStatus?.progress?.[taskName]?.value ?? 0;

        log(`Quest type: ${taskName} | Need: ${secondsNeeded}s | Done: ${secondsDone}s`, 'info');

        switch (taskName) {
            case "WATCH_VIDEO":
            case "WATCH_VIDEO_ON_MOBILE":
                spoofVideo(quest, secondsNeeded);
                break;
            case "PLAY_ON_DESKTOP":
                spoofGame(quest, appId, appName, questName, secondsNeeded);
                break;
            case "STREAM_ON_DESKTOP":
                spoofStream(quest, appId, appName, questName, secondsNeeded);
                break;
            case "PLAY_ACTIVITY":
                spoofActivity(quest, questName, secondsNeeded);
                break;
            default:
                log(`Unknown quest type: ${taskName}`, 'warn');
        }
    });
}

})();
