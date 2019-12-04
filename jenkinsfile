pipeline {
    agent any
    stages {
      stage('Lint HTML') {
        steps {
          sh 'tidy -q -e *.html'
        }
      }
      stage('Upload to AWS') {
        steps {
          retry(2) {
            sh './flakey-deploy.sh'
		            }
	        timeout(time: 3, unit: 'MINUTES') {
            sh './health-check.sh'
                }
          withAWS(region:'us-west-2',credentials:'aws-static') {
            s3Upload(pathStyleAccessEnabled:true, payloadSigningEnabled: true, file:'index.html', bucket:'jenbucketnano')
            }
          }
        }
      stage('Security Scan') {
        steps {
          probelyScan targetId: '3jL5hURsdnnz', credentialsId: 'securityscan'
          }
        }
      stage ("test") {                                                     env.K6CLOUD_TOKEN="daf002ec9b701e7dd8d1adeb91e528d95ca1c61ca3fe292a00789941106fe217"
      if (isUnix()) {
            sh "k6 run --quiet -o cloud github.com/loadimpact/k6-circleci-example/loadtests/main.js"
    } else {
            bat 'k6.exe run --quiet -o cloud github.com/loadimpact/k6-circleci-example/loadtests/main.js'
        }
    }

      }
    }


