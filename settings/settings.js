import Settings from 'Amaterasu/core/Settings'
import DefaultConfig from 'Amaterasu/core/DefaultConfig'
import { broadcast } from '../util/broadcast'
const File = java.io.File;


const config = new DefaultConfig("Buba", "config/settings.json")
const CREDITS = FileLib.read("Buba", "settings/credits.md")

config
    .addSwitch({
        category: "Mouse",
        configName: "MouseLock",
        title: "Mouse Lock",
        description: "useful while farming to prevent mouse from moving.",
        value: true,
        subcategory: "Mouse"
    })
    .addSwitch({
        category: "Mouse",
        configName: "MouseUngrab",
        title: "Ungrab Mouse",
        description: "ungrabs mouse when locking",
        value: true,
        subcategory: "Mouse"
    })
    .addKeybind({
        category: "Mouse",
        subcategory: "Mouse",
        configName: "mlKeybind",
        title: "Mouse Lock Key",
        description: "toggles mouse lock.",
        value: 41,
        registerListener(previousValue, newValue) {
            KeyBind.removeKeyBind(Client.getKeyBindFromDescription("Draw line to current Waypoint"));
            new KeyBind("Draw line to current Waypoint", newValue, "Buba");
        }
    })
    

const setting = new Settings("Buba", config, "settings/ThemeV2.json", "Buba")
    .setCommand("buba", ["bb","buba"])
setting
    .addMarkdown("§7Credits", CREDITS)
    .apply();

export default () => setting.settings;
export {setting};