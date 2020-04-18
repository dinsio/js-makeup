# JBDAP-Node-Makeup

### A basic library for js development, which extends String/Number/Date to make coding easier.

## **Install**

~~~
npm install jbdap-makeup --save
~~~

or

~~~
yarn add jbdap-makeup
~~~

## **Features**

- String
    - String.prototype.replaceAll(oldStr,newStr) - global replacement function, no need to write regExp
    - String.prototype.removeBlank() - remove all blanks
    - String.prototype.removeEOL() - remove all line-breaks
    - String.prototype.toHash(cipher) - get the hash value by different ciphers, such as md5/sha256
    - String.prototype.md5() - a shortcut for generating a md5 hash
    - String.prototype.sha256()
    - String.prototype.sha512()
    - String.prototype.padLeft(len,char) - padding a string to specific length with one character
    - String.prototype.padRight(len,char)
- Date
    - Date.makeOne(year,month,day,hour,minute,second,milsec) - the only difference between this and *new Date()* is that you need not to assign the month parameter to 0 when you actually mean the 1st month (January), i think this way is more humanized
    - Date.prototype.addMinutes()
    - Date.prototype.addHours()
    - Date.prototype.addDays()
    - Date.prototype.dateString() - converting a Date Object to a string, ignoring the timezone, just the same as what you get from a local clock
    - Date.prototype.timeString() - it does the same work as *dateString()*, except only getting the time part
    - Date.prototype.dtString() - *dtString() = dateString() + ' ' + timeString()*
- Number
    - Number.randomBetween(min,max) - get a random number between min and max


## Enjoy it :-)