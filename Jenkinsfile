@Library('jenkins-library@fix/DOPS-1835/polkaswap-cd') _

if (env.BRANCH_NAME == "master" || env.BRANCH_NAME == "develop") {
    buildEnvironment = ['VUE_CLI_KEEP_TEST_ATTRS': true]
} else {
    buildEnvironment = [:]
}

def pipeline = new org.js.AppPipeline(steps: this,
    dockerImageName: 'polkaswap/exchange-web',
    buildDockerImage: 'docker.soramitsu.co.jp/build-tools/node:14-ubuntu-extended',
    dockerRegistryCred: 'bot-polkaswap-rw',
    buildEnvironment: buildEnvironment,
    sonarProjectName: 'polkaswap-exchange-web',
    sonarProjectKey: 'jp.co.soramitsu:polkaswap-exchange-web',
    copyStaticToBranch: true,
    copyToBranches: ['fleek-test'],
    copyFile: 'env.json',
    stageDeploy: true,
    downstreamJob: '../deploy/exchange-stage1')
pipeline.runPipeline()
