#!/bin/env python
# process google translation to clean html output

import sys

if len(sys.argv) < 2:
  print "First parameter is translation filename"
  sys.exit(1)
fd = open(sys.argv[1],"r")
raw = fd.read()
english = []
spanish = []
index = 0
while index < len(raw) and index != -1:
     index = raw.find("google-src-text",index)
     if index != -1:
        index = raw.find('left">',index) + 6
        if index != 5:
           endnibble = raw.find('</span>',index)
           if index != -1:
              english.append(raw[index:endnibble])
              index = endnibble + 7
              endnibble = raw.find("</span>",index)
              if endnibble != -1:
                 spanish.append(raw[index:endnibble])
                 index = endnibble + 7
# we are done with the input file
print "length of english array is %s"%len(english)
print "length of raw is %s"%len(raw)
if len(sys.argv) < 3:
  print "Second parameter is clean input filename"
  sys.exit(1)
raw = ''
fd = open(sys.argv[2],"r")
raw = fd.read()
outstr = ''
index = 0
cursor = 0
for i in range(len(english)):
   if english[i].find("href=") != -1:
       continue
   index = raw.find(english[i][0:20],index)
   if index == -1:
      index=cursor
      continue
   else:
#      print"[%s:%s]-%s"%(cursor,index, english[i])
      outstr += raw[cursor:index]
      outstr += spanish[i]
      index = index + len(english[i])
      cursor = index
outstr += raw[index:len(raw)] 
print outstr
