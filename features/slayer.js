import settings from "../settings/settings";
import "../util/helperFunctions"




register("step", bossWarning).setFps(1);

function bossWarning(){
    if(!settings().bossWarning)return;

    let lines = Scoreboard.getTitle();

    lines.forEach(line => {
        ChatLib.chat(line);
    })
}