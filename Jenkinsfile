node {
   stage('windowsPC') { // for display purposes
      checkout scm
   }
   stage('Build') {
        powershell 'npm install'
        powershell 'npm install -g selenium-standalone'
	powershell 'selenium-standalone install'
	powershell 'selenium-standalone start'
   }
   stage('Test') {
         powershell 'node node_modules/codeceptjs-webdriverio/node_modules/codeceptjs/bin/codecept.js run --steps'
   }
   stage('Results') {
      junit 'reports/*.xml'
   }
}
