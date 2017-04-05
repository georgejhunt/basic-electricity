## Generate localized basic-electricity content

This repo applies the Portable Object (.po) strategy to localize "Lessions in Electric Circuits, by Tony Kuphaldt, et al..http://www.ibiblio.org/kuphaldt/electricCircuits. It creates .pot (portable object templates) files, and populates them with google translations. Native language speakers can correct these .pot files, and those corrections to the .pot files can accumulate over time.

On linux, and most other computer platforms, the "gettext" system is used to provide localized strings to runtime binary applications. There are runtime modules, compiled into application binaries, which substitute strings appropriately.

This repo provides substitutions for strings at the very beginning of the tool chain, which starts with the SubML mark up language, and then gets transformed to epub, tex, latex, groff, txt, as well as html outputs.

The html outputs are of particular interest me, as I have been working on an offline server for the developing world called "Internet-In-A-Box" (IIAB). There is a compressed html format, zims, which makes wikipedia in many languages, available to browsers, and smart phones via the $35 raspberry pi (yes the SD card is also $20-$35). My objective would be to provide Basic-Electricity in zim format. See https://en.wikipedia.org/wiki/Kiwix

In an earlier life, I taught high school electric shop, and my experience in a few developing countires, has caused me to lament that I could find no free, elementary electricity materials, in spanish or french.

#### How To help in transation

I lack a critical piece in this translation business -- the proficiency in another language. It would be wonderful to partner with native speakers, who shared the vision of excited 10 year olds wanting to discover how the world of electricity worked.

* At the bare minimum, I'd be happy to receive email of corrected .pot files, which I could easily integrate into the repo for others to benefit from.
* A larger investment would involve getting a github account, cloning the repo, making edits, and then generating "pull requests" from your github account to mine.
* Or once I'm no longer avilable, (I'm 75, and hoping that this will live on after I'm gone), local language experts can become their own country administrators. 
* It is almost a trivial operation to consolidate github clones, into a master of all the clones, which is again more of an administrative task, and doesn't involve language expertise.


