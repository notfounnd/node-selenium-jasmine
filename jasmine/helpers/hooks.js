import { startPageHelper, takeScreenShot } from './pagehelper'
import driverHelper from './driverhelper'

jasmine.getEnv().addReporter({
  specStarted: async (result) => {
    jasmine.testWatcher = result
  }
})

beforeAll(async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = process.env.JASMINE_TIMEOUT
})

beforeEach(async () => {
  await driverHelper.tearUp()
  await startPageHelper()
})

afterEach(async () => {
  await verifyFailureInExecution()
  await driverHelper.tearDown()
})

afterAll(async () => {
})

async function verifyFailureInExecution () {
  const haveFailure = typeof jasmine.testWatcher.failedExpectations[0]
  if (haveFailure !== 'undefined') {
    const fileName = jasmine.testWatcher.fullName.replace(/\s+/g, '')
    await takeScreenShot(fileName)
  }
}
