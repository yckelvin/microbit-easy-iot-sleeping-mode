microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    Mode = message
    microIoT.microIoT_ledBlank()
    microIoT.microIoT_showUserText(0, "Mode: " + Mode)
})
function curtainUp () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S2, 180)
    basic.pause(1000)
    microIoT.microIoT_ServoRun(microIoT.aServos.S2, 90)
}
function curtainDown () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S2, 0)
    basic.pause(1000)
    microIoT.microIoT_ServoRun(microIoT.aServos.S2, 90)
}
let Mode = ""
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI("DGINCB_WT6F", "20210601")
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"DanDCZznR",
microIoT.SERVERS.English
)
basic.forever(function () {
    if (Mode == "sunny mode") {
        pins.analogWritePin(AnalogPin.P12, 0)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        curtainUp()
    } else if (Mode == "rainy mode") {
        pins.analogWritePin(AnalogPin.P12, 500)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
        curtainDown()
    } else if (Mode == "sleeping mode") {
        pins.analogWritePin(AnalogPin.P12, 50)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    }
})
