import Jasmine from 'jasmine'
import 'dotenv/config'

const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter
const SpecReporter = require('jasmine-spec-reporter').SpecReporter
const MarkdownReporter = require('jasmine-markdown-reporter')
const jasmine = new Jasmine()

jasmine.loadConfigFile('jasmine/support/jasmine.json')

jasmine.addReporter(
  new HtmlReporter({
    path: 'jasmine/report',
    writeReportEachSpec: true
  })
)

jasmine.addReporter(
  new SpecReporter({
    spec: {
      displayPending: true
    }
  })
)

jasmine.addReporter(
  new MarkdownReporter({
    title: 'Jasmine Test Results',
    destination: 'jasmine/report/spec.md'
  })
)

jasmine.execute()
