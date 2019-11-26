pipeline {
  agent any
  stages {
    stage('Lint HTML') {
      steps {
        s3Upload(bucket: 'jenbucketnano', pathStyleAccessEnabled: true, payloadSigningEnabled: true, file: 'index.html')
      }
    }

  }
}