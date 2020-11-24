import Jasmine from 'jasmine'
import 'dotenv/config'

const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter
const MarkdownReporter = require('jasmine-markdown-reporter')
const JasmineConsoleReporter = require('jasmine-console-reporter')
const jasmine = new Jasmine()

jasmine.loadConfigFile('jasmine/support/jasmine.json')

jasmine.addReporter(
  new HtmlReporter({
    path: 'jasmine/report',
    writeReportEachSpec: true
  })
)

jasmine.addReporter(
  new JasmineConsoleReporter({
    colors: 1, // (0|false)|(1|true)|2
    cleanStack: 1, // (0|false)|(1|true)|2|3
    verbosity: 4, // (0|false)|1|2|(3|true)|4|Object
    listStyle: 'indent', // "flat"|"indent"
    timeUnit: 'ms', // "ms"|"ns"|"s"
    timeThreshold: { ok: 25000, warn: 30000, ouch: 35000 }, // Object|Number
    activity: false, // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
    emoji: false,
    beep: false
  })
)

jasmine.addReporter(
  new MarkdownReporter({
    title: 'Jasmine Test Results',
    destination: 'jasmine/report/spec.md'
  })
)

// const SpecReporter = require('jasmine-spec-reporter').SpecReporter
// jasmine.addReporter(
//   new SpecReporter({
//     spec: {
//       displayPending: true
//     }
//   })
// )

jasmine.execute()
