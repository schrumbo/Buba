import Settings from 'Amaterasu/core/Settings'
import DefaultConfig from 'Amaterasu/core/DefaultConfig'
import { broadcast } from '../util/broadcast'
const File = java.io.File;


const config = new DefaultConfig("Buba", "config/settings.json")
const CREDITS = FileLib.read("Buba", "settings/credits.md")

config
    .addSwitch({
        category: "Effects",
        subcategory: "Effects",
        title: "Gummy",
        description: "displays duration left of the Smolderin Polarization effect",
        value: true,
        configName: "haribo"
    })
    .addSwitch({
        category: "Effects",
        subcategory: "Effects",
        title: "Harvest Harbinger",
        description: "displays duration left of the Harvest Harbinger effect",
        value: true,
        configName: "farming"
    })
    .addSwitch({
        category: "Effects",
        subcategory: "Effects",
        title: "Stinky Cheese",
        description: "displays duration left of the Douce Pluie de Stinky Cheese effect",
        value: true,
        configName: "pest"
    })
    .addSwitch({
        category: "Effects",
        subcategory: "Effects",
        title: "Filet",
        description: "displays duration left of the Filet O Fortune effect",
        value: true,
        configName: "filet"
    })
    .addSlider({
        category: "Effects",
        subcategory: "Size and Position",
        title: "Effects X",
        description: "",
        options: [0, 1150],
        value: 0,
        configName: "effectsX"
    })
    .addSlider({
        category: "Effects",
        subcategory: "Size and Position",
        title: "Effects Y",
        description: "",
        options: [0, 700],
        value: 0,
        configName: "effectsY"
    })
    .addSlider({
        category: "Effects",
        subcategory: "Size and Position",
        title: "Size",
        description: "",
        options: [0.5, 2.5],
        value: 1,
        configName: "effectsSize"
    })
    .addSwitch({
        category: "Effects",
        subcategory: "Warning",
        title: "Expire warning",
        description: "Reminds you to eat your shit",
        value: true,
        configName: "effectWarning"
    })
    

const setting = new Settings("Buba", config, "settings/ThemeV2.json", "Buba")
    .setCommand("buba", ["bb","buba"])
setting
    .addMarkdown("§7Credits", CREDITS)
    .apply();

export default () => setting.settings;
export {setting};