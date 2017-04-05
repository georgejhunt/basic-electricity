##Generate localized basic-electricity content

This repo applies the Portable Object (.po) strategy to localize "Lessions in Electric Circuits, by Tony Kuphaldt, et al..http://www.ibiblio.org/kuphaldt/electricCircuits. It creates .pot (portable object templates) files, and populates them with google translations. Native language speakers can correct these .pot files, and those corrections to the .pot files can accumulate.

On linux, and most other computer platforms, the "gettext" system is used to provide localized strings to runtime binary applications. There are runtime modules, compiled into application binaries, which substitute strings appropriately.

This repo provides substitutions for strings at the very beginning of the tool chain, which starts with the SubML mark up language, and then gets transformed to epub, tex, latex, groff, txt, as well as html outputs.

The html outputs are of particular interest me, as I have been working on an offline server for the developing world called "Internet-In-A-Box" (IIAB). There is a compressed html format, zims, which makes wikipedia in many languages, available to browsers, and smart phones via the $35 raspberry pi (yes the SD card is also $20-$35). My objective would be to provide Basic-Electricity in zim format. See https://en.wikipedia.org/wiki/Kiwix

In an earlier life, I taught high school electric shop, and my experience in a few developing countires, has caused me tolament that I could find no free, elementary electricity materials, in spanish or french.
