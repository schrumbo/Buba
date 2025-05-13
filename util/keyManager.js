import settings, { setting } from "../settings/settings";


//registers Keybind for mouse lock
new KeyBind("lock mouse", settings().mlKeybind, "Buba");

register("guiClosed", (gui) => {
    if(gui.getClass() == net.minecraft.client.gui.GuiControls) {
        let mlKeybind = 
        setting.config.find(category => category.category === "Mouse")
            .settings.find(setting => setting.name === "mlKeybind");
        mlKeybind.value = Client.getKeyBindFromDescription("lock mouse").getKeyCode();
        setting.apply();
    }
});