import settings from "../settings/settings";
import "../util/helperFunctions"




const effect = "Smoldering Polarization I:";
const effectGarden = "Harvest Harbinger V:";
const effectPest = "Douce Pluie de Stinky Cheese I:";
const effectMining = "Filet O' Fortune";


register("renderOverlay", renderText);
register("step", effectWarning).setFps(1);

function renderText() {

    
    let textX = settings().effectsX;
    let textY = settings().effectsY;
    let size = settings().effectsSize;
    let currentY = textY;

    textX = textX / size;
    textY = textY / size;

    const activeEffects = [];

    const players = TabList.getNames();
    players.forEach(player => {
        const noCodes = player.noControlCodes;

        if (noCodes.includes(effect) && settings().haribo) {
            activeEffects.push(player); 
        }
        if (noCodes.includes(effectGarden) && settings().farming) {
            activeEffects.push(player); 
        }
        if (noCodes.includes(effectPest) && settings().pest) {
            activeEffects.push(player); 
        }
        if (noCodes.includes(effectMining) && settings().filet) {
            activeEffects.push(player); 
        }
    });
    
    activeEffects.forEach(effectText => {
        Renderer.retainTransforms(true);
        Renderer.scale(size, size);
        Renderer.drawStringWithShadow(effectText, textX, currentY);
        Renderer.scale(1);
        Renderer.retainTransforms(false);
        currentY += 10;
    });
    
}

let lastWarning = 0;
const COOLDOWN_MS = 1 * 60 * 1000;

function effectWarning(){
    if(!settings().effectWarning)return;

    const currentTime = Date.now();
    if (currentTime - lastWarning < COOLDOWN_MS) {
        return;
    }

    const players = TabList.getNames();
    players.forEach(player => {
        noCodes = player.noControlCodes;
        if(noCodes.includes(effect) && noCodes.includes(effect + "5m")){
            World.playSound("mob.horse.donkey.death", 1000, 5);
            Client.showTitle("§2FRISS GUMMI", "§7BITCHASS", 10, 100, 10);
            lastWarning = Date.now();
        }
        if(noCodes.includes(effect) && noCodes.includes(effectPest + " 5m")){
            World.playSound("mob.horse.donkey.death", 1000, 5);
            Client.showTitle("§0LE CACA", "§7FICKER", 10, 100, 10);
            lastWarning = Date.now();
        }
        if(noCodes.includes(effect) && noCodes.includes(effectGarden + " 5m")){
            World.playSound("mob.horse.donkey.death", 1000, 5);
            Client.showTitle("§nKAROTTE", "§7VEGANER", 10, 100, 10);
            lastWarning = Date.now();
        }
        if(noCodes.includes(effect) && noCodes.includes(effectMining + " 5m")){
            World.playSound("mob.horse.donkey.death", 1000, 5);
            Client.showTitle("§3FICH FICH", "§7MINORS", 10, 100, 10);
            lastWarning = Date.now();
        }
    });

}






















































