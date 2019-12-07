pipeline {
  agent any
  options {
        timeout(time: 10, unit: 'MINUTES')
        retry(3) 
    }
  stages {
    stage('Lint HTML') {
      steps {
        sh 'tidy -q -e *.html'
      }
    }
    stage('Upload to AWS') {
      steps {
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
      environment {
        K6CLOUD_TOKEN='ed2da07aa40e38c367c84d5c128301348a3716898b8c26a876827ef01bd83c2'
      }
        steps {
            sh 'k6 run --quiet -o cloud github.com/darylmcneil/static/blob/master/performance.js'        
        }  
          }
      }
    }



