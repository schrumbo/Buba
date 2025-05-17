import Settings from 'Amaterasu/core/Settings'
import DefaultConfig from 'Amaterasu/core/DefaultConfig'
import { broadcast } from '../util/broadcast'
const File = java.io.File;


const config = new DefaultConfig("Buba", "config/settings.json")
const CREDITS = FileLib.read("Buba", "settings/credits.md")

config
    .addSwitch({
        category: "Effekte",
        subcategory: "Effekte",
        title: "Gummi",
        description: "Zeigt Effektdauer",
        value: true,
        configName: "haribo"
    })
    .addSwitch({
        category: "Effekte",
        subcategory: "Effekte",
        title: "Harvest Harbinger",
        description: "Zeigt Effektdauer",
        value: true,
        configName: "farming"
    })
    .addSwitch({
        category: "Effekte",
        subcategory: "Effekte",
        title: "Stinky Cheese",
        description: "Zeigt Effektdauer",
        value: true,
        configName: "pest"
    })
    .addSwitch({
        category: "Effekte",
        subcategory: "Effekte",
        title: "Filet",
        description: "Zeigt Effektdauer",
        value: true,
        configName: "filet"
    })
    .addSlider({
        category: "Effekte",
        subcategory: "Size and Position",
        title: "Effects X",
        description: "",
        options: [0, 1150],
        value: 0,
        configName: "effectsX"
    })
    .addSlider({
        category: "Effekte",
        subcategory: "Size and Position",
        title: "Effects Y",
        description: "",
        options: [0, 700],
        value: 0,
        configName: "effectsY"
    })
    .addSlider({
        category: "Effekte",
        subcategory: "Size and Position",
        title: "Size",
        description: "",
        options: [0.5, 2.5],
        value: 1,
        configName: "effectsSize"
    })
    .addSwitch({
        category: "Effekte",
        subcategory: "Warning",
        title: "Mindesthaltbarkeit",
        description: "Erinnerung zu konsumieren",
        value: true,
        configName: "effectWarning"
    })
    .addDropDown({
        category: "Effekte",
        configName: "warningTime",
        title: "Warnungszeitpunkt",
        description: "Wähle Zeitpunkt wann die Effektwarnung eintritt",
        options: ["10m", "5m", "4m", "3m", "2m"],
        value: 3,
        subcategory: "Warning"
    })
    .addSwitch({
        category: "Slayer",
        subcategory: "Slayer",
        title: "Boss Warning",
        description: "Warnt falls ein Boss spawned",
        value: true,
        configName: "bossWarning"
    })
    
    
    
    

const setting = new Settings("Buba", config, "settings/ThemeV2.json", "Buba")
    .setCommand("buba", ["bb","buba"])
setting
    .addMarkdown("§7Credits", CREDITS)
    .apply();

export default () => setting.settings;
export {setting};