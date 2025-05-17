import settings from "../settings/settings";
import "../util/helperFunctions";




const effect = "Smoldering Polarization I:";
const effectGarden = "Harvest Harbinger V:";
const effectPest = "Douce Pluie de Stinky Cheese I:";
const effectMining = "Filet O' Fortune";


register("renderOverlay", renderText);
register("step", effectWarning).setDelay(5);

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



function effectWarning(){
    if(!settings().effectWarning)return;

    let warningTime = settings().warningTime;
    let time = 0;

    if(warningTime == 0){
        time = 10;
    }else if (warningTime == 1){
        time = 5;
    }else if (warningTime == 2){
        time = 4;
    }else if (warningTime == 3){
        time = 3;
    }else if (warningTime == 4){
        time = 2;
    }
    


    const players = TabList.getNames();
    players.forEach(player => {
        noCodes = player.noControlCodes;

        if(noCodes.includes(effect + " " + time +"m")){
            Client.showTitle("§2FRISS GUMMI", "§7POLAR", 10, 100, 10);
        }
        if(noCodes.includes(effectPest + " " + time +"m")){
            Client.showTitle("§0LE CACA", "§7CACA", 10, 100, 10);
        }
        if(noCodes.includes(effectGarden + " " + time +"m")){
            Client.showTitle("§nKAROTTE", "§7VEGAN", 10, 100, 10);
        }
        if(noCodes.includes(effectMining + " " + time +"m")){

            Client.showTitle("§3FICH FICH", "§7FILET", 10, 100, 10);
        }
    });

}






















































