pipeline {
  agent any

  environment {
    GIT_NAME = "eea.docker.apache-eea-www"
  }

  stages {
    stage('Build & Test') {
      steps {
        node(label: 'clair') {
          script {
            try {
              checkout scm
              sh '''docker build -t ${BUILD_TAG,,} .'''
              // sh '''TMPDIR=`pwd` clair-scanner --ip=`hostname` --clair=https://clair.eea.europa.eu -t=Critical ${BUILD_TAG,,}'''
              sh '''docker run -i --name=${BUILD_TAG,,} ${BUILD_TAG,,} apachectl configtest'''
            } finally {
              sh '''docker rm -v ${BUILD_TAG,,}'''
              sh '''docker rmi ${BUILD_TAG,,}'''
            }
          }
        }

      }
    }



    stage('Release') {
      when {
        allOf {
          environment name: 'CHANGE_ID', value: ''
          branch 'master'
        }
      }
      steps {
        node(label: 'clair') {
          withCredentials([string(credentialsId: 'eea-jenkins-token', variable: 'GITHUB_TOKEN'),usernamePassword(credentialsId: 'jekinsdockerhub', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
            //sh '''/scan_catalog_entry.sh templates/www-frontend eeacms/apache-eea-www'''
            //sh '''/scan_catalog_entry.sh templates/www-eea eeacms/apache-eea-www'''
            sh '''docker run -i --rm --name="$BUILD_TAG-release" -e GIT_BRANCH="$BRANCH_NAME" -e GIT_NAME="$GIT_NAME" -e GIT_TOKEN="$GITHUB_TOKEN" -e DOCKERHUB_USER="$DOCKERHUB_USER" -e DOCKERHUB_PASS="$DOCKERHUB_PASS"  eeacms/gitflow'''
          }
        }
      }
    }

  }

  post {
    changed {
      script {
        def url = "${env.BUILD_URL}/display/redirect"
        def status = currentBuild.currentResult
        def subject = "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
        def summary = "${subject} (${url})"
        def details = """<h1>${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${status}</h1>
                         <p>Check console output at <a href="${url}">${env.JOB_BASE_NAME} - #${env.BUILD_NUMBER}</a></p>
                      """

        def color = '#FFFF00'
        if (status == 'SUCCESS') {
          color = '#00FF00'
        } else if (status == 'FAILURE') {
          color = '#FF0000'
        }
        emailext (subject: '$DEFAULT_SUBJECT', to: '$DEFAULT_RECIPIENTS', body: details)
      }
    }
  }
}
