node {
   stage('windowsPC') { // for display purposes
      checkout scm
   }
   stage('Build - NPM install') {
      powershell 'npm install'
      powershell 'npm install -g selenium-standalone'
   }
   stage('Build - selenium up') {
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
