const File = Java.type("java.io.File")

/**
 * Adds commas to the number.
 * @param {Number} num
 * @returns
 */
export function addCommas(num) {
    try {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } catch (error) {
        return 0
    }
}

/**
 * Gets a value from an object with a dynamic path to the value.
 * @param {Object} obj
 * @param {String[]} path
 * @returns
 */
export function getObjectValue(obj, path) {
    let current = obj
    if (path == undefined) return undefined
    for (let i = 0; i < path.length; i++)
        current = current[path[i]]

    return current
}


export function parseNotatedInput(input) {
    for (let index = 0; index < input.length; index++) {

        switch (input[index]) {
            case "k":
                return 1000 * parseFloat(input.slice(0, index))
            case "m":
                return 1000000 * parseFloat(input.slice(0, index))
        }
    }
    if (parseFloat(input) == input)
        return parseFloat(input)
    else
        return undefined
}


/**
 * Gets the selected profile.
 * @param {Object} res The response from requesting https://api.hypixel.net/skyblock/profiles
 * @returns Selected profile
 */
export function getSelectedProfile(res) {
    for (let i = 0; i < res.profiles.length; i += 1) {
        if (res.profiles[i].selected == true)
            return res.profiles[i]
    }
}

/**
 * Capitalizes the first letter of every word in a sentence.
 * @param {String} sentence
 * @returns String
 */
export function capitalizeFirst(sentence) {
    if (sentence == undefined) return sentence
    let words = sentence.split(" "),
        capitalized = words.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })

    return capitalized.join(" ")
}

/**
 * This contains a value "drawState", this dictates whether or not this draw or not. Default to 0. Check for 1 in a "renderOverlay" to draw. (must set to draw.)
 * @returns
 */
export class Title {
    /**
     *
     * @param {{text: string, scale: number, time: number, sound: string, yOffset: number, xOffset: number}} param0
     */
    constructor({ text, scale = 5, time = 3000, sound = "random.orb", yOffset = 0, xOffset = 0 }) {
        this.text = text
        this.scale = scale
        this.time = time
        this.sound = sound
        this.yOffset = yOffset
        this.xOffset = xOffset
        this.drawState = 0
        this.drawing = false

        register("renderOverlay", () => {
            this.drawing = false
            if (this.drawState == 1) {
                this.drawing = true

                const title = new Text(this.text,
                    Renderer.screen.getWidth() / 2 + this.xOffset,
                    Renderer.screen.getHeight() / 2 - Renderer.screen.getHeight() / 14 + this.yOffset
                )
                if (this.drawTimestamp == undefined) {
                    World.playSound(this.sound, 1, 1)
                    this.drawTimestamp = Date.now()
                    this.drawState = 1
                }
                else if (Date.now() - this.drawTimestamp > this.time) {
                    this.drawTimestamp = undefined
                    this.drawState = 2
                }
                else {
                    title.setAlign("CENTER")
                        .setShadow(true)
                        .setScale(this.scale)
                        .draw()
                    this.drawState = 1
                }
            }
        })
    }

    draw() {
        this.drawState = 1
    }

    isDrawing() {
        return this.drawing
    }
}

// could move below to it's own file or do something else
class LocationChecker {
    /**
     *
     * @param {String[]} locations
     */
    constructor(locations) {
        this.locations = locations
        this.checkTime = Date.now()
        this.state = false
        this.scoreboard = 0
    }

    getState() {
        return this.check()
    }

    check() {
        if (Date.now() - this.checkTime > 1000) // 1 sec
        {
            this.checkTime = Date.now()
            this.scoreboard = Scoreboard.getLines()

            for (let lineIndex = 0; lineIndex < this.scoreboard.length; lineIndex++) {
                for (let locationsIndex = 0; locationsIndex < this.locations.length; locationsIndex++) {
                    if (this.scoreboard[lineIndex].toString().includes(this.locations[locationsIndex])) {
                        this.state = true
                        return this.state
                    }
                }
            }
            this.state = false
            return this.state
        }
        else
            return this.state
    }
}




export const hollowsChecker = new LocationChecker(["Goblin", "Jungle", "Mithril", "Precursor", "Magma", "Crystal", "Khazad", "Divan", "City"])
export const dwarvenChecker = new LocationChecker(["Dwarven", "Royal", "Palace", "Library", "Mist", "Cliffside", "Quarry", "Gateway", "Wall", "Forge", "Far", "Burrows", "Springs", "Upper", "Glacite"])
export const foragingChecker = new LocationChecker(["§aDark Thic", "§aBirch Par", "§aSpruce Wo", "§aSavanna W", "§aJungle Is", "§bForest"])
export const endChecker = new LocationChecker(["End", "Dragon's"])
export const mirroverseCheck = new LocationChecker(["§fMirrorver"])
export const mineshaftCheck = new LocationChecker(["shaft"])
export const gardenCheck = new LocationChecker(["Garde"])
export const gunpowderCheck = new LocationChecker(["§bGunpowder"])
export const minesOfDivanCheck = new LocationChecker(["Divan"])
/**
 * Converts seconds to a standard message.
 * @param {Number} seconds
 * @returns String
 */
export function secondsToMessage(seconds) {
    let hour = Math.floor(seconds / 60 / 60)
    if (hour < 1)
        return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`
    else
        return `${hour}h ${Math.floor(seconds / 60) - hour * 60}m`
}

let registers = [];
/**
 * Adds a trigger to the registers array to be reset on updateRegisters() 
 * Credit: BloomCore
 * @param {Trigger} trigger 
 * @param {CallableFunction} dependency 
 */
export function registerWhen(trigger, dependency) {
    registers.push([trigger.unregister(), dependency, false]);
}

/**
 * Registers and unregisters triggers.
 */
export function updateRegisters() {
    registers.forEach(trigger => {
        if (trigger[1]() && !trigger[2]) {
            trigger[0].register();
            trigger[2] = true;
        }
        else if (!trigger[1]() && trigger[2]) {
            trigger[0].unregister();
            trigger[2] = false;
        }
    });
}

export function rgbToColorInt(red, green, blue) {
    return (255 << 24) | (red << 16) | (green << 8) | blue;
}





const FORMATTING_CODE_PATTERN = /§[0-9a-fk-or]/gi;

Object.defineProperty(String.prototype, "noControlCodes", {
  get: function () {
    return this.replace(FORMATTING_CODE_PATTERN, "");
  },
});


function delay(seconds){
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}