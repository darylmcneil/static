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
    stage('Load Stress Test') {
      steps {
        env.K6CLOUD_TOKEN=
        'ed2da07aa40e38c367c84d5c128301348a3716898b8c26a876827ef01bd83c2'
        {
            sh 'k6 run --quiet -o cloud github.com/loadimpact/k6-circleci-example/loadtests/main.js'        
        }  
          }
      }
    }
}


