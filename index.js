// CowESP.js
import { EntityRenderer, Entity, World } from "Entity"
import { Renderer } from "Renderer"
import { register } from "Core"

// Zeichnet ESP Boxen um Kühe
register("renderWorld", () => {
    World.getAllEntities().forEach(entity => {
        if (entity.getName().removeFormatting() === "Cow") {
            Renderer.drawBox(
                Renderer.color(255, 255, 255, 255), // weiße Box
                entity.getRenderX(),
                entity.getRenderY(),
                entity.getRenderZ(),
                entity.getWidth(),
                entity.getHeight(),
                1, // Linienbreite
                false // kein Face-Fill
            )
        }
    })
})
