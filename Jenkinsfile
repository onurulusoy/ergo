node {
   stage('windowsPC') { // for display purposes
      checkout scm
   }
   stage('Build') {
         sh 'npm install'
         sh 'npm install -g selenium-standalone'
		 sh 'selenium-standalone install'
		 sh 'selenium-standalone start'
   }
   stage('Test') {
         sh 'node node_modules/codeceptjs-webdriverio/node_modules/codeceptjs/bin/codecept.js run --steps'
   }
   stage('Results') {
      junit 'reports/*.xml'
   }
}