pipeline {
  agent any

  environment {
    GIT_NAME = "eea.docker.apache-eea-www"
  }

  stages {
    stage('Build & Test') {
      when {
          environment name: 'CHANGE_ID', value: ''
          branch 'develop'
      }
      steps {
        node(label: 'docker') {
          script {
            try {
              checkout scm
              withCredentials([usernamePassword(credentialsId: 'jekinsdockerhub', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                  sh '''docker run -i --rm --name="$BUILD_TAG-release" -e DOCKERHUB_USER="$DOCKERHUB_USER" -e DOCKERHUB_PASS="$DOCKERHUB_PASS"  -e GIT_COMMIT="$GIT_COMMIT" eeacms/gitflow /dockerhub_release_wait.sh eeacms/apache-eea-www develop'''
              }
              sh '''docker pull eeacms/apache-eea-www:develop'''
              sh '''docker run -i --name=${BUILD_TAG,,} eeacms/apache-eea-www:develop apachectl configtest'''
            } finally {
              sh '''docker rm -v ${BUILD_TAG,,}'''
              sh '''docker rmi eeacms/apache-eea-www:develop'''
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
        node(label: 'docker') {
          withCredentials([string(credentialsId: 'eea-jenkins-token', variable: 'GITHUB_TOKEN'),usernamePassword(credentialsId: 'jekinsdockerhub', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
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
