const path = require('path')
const fs = require('fs')
const cp = require('child_process')
let bookmarksDataCache = null
let tabListCache = []

window.exports = {
  'wczz': {
    mode: 'list',
    args: {
      enter: (action, callbackSetList) => {
         window.utools.hideMainWindow()
         utools.ubrowser.goto('https://wantwords.thunlp.org/')
         .focus('#description')
         .paste()
         .run({ width: 1000, height: 1000 })
         utools.outPlugin()
      }
    }
  },
  'wczy': {
   mode: 'list',
   args: {
     enter: (action, callbackSetList) => {
        window.utools.hideMainWindow()
        utools.ubrowser.goto('https://wantwords.thunlp.org/')
        .click("#ui-id-2")
        .focus('#description_CE')
        .paste()
        .run({ width: 1000, height: 1000 })
        utools.outPlugin()
     }
   }
 },
 'wcyz': {
   mode: 'list',
   args: {
     enter: (action, callbackSetList) => {
        window.utools.hideMainWindow()
        utools.ubrowser.goto('https://wantwords.thunlp.org/')
        .click("#ui-id-4")
        .focus('#description_EC')
        .paste()
        .run({ width: 1000, height: 1000 })
        utools.outPlugin()
     }
   }
 },
 'wcyy': {
   mode: 'list',
   args: {
     enter: (action, callbackSetList) => {
        window.utools.hideMainWindow()
        utools.ubrowser.goto('https://wantwords.thunlp.org/')
        .click("#ui-id-3")
        .focus('#description_EE')
        .paste()
        .run({ width: 1000, height: 1000 })
        utools.outPlugin()
     }
   }
 }
}