
pipeline {
    // This line is required for declarative pipelines. Just keep it here.
    agent any

    // This section contains environment variables which are available for use in the
    // pipeline's stages.
    // environment {
	  //   region = "us-east-1"
    // }
    
    // Here you can define one or more stages for your pipeline.
    // Each stage can execute one or more steps.
	// write access?
    stages {
        // This is a stage.
        stage('Build') {
          steps {
             // Get SHA1 of current commit
             // script {
             //    commit_id = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
             // }
              sh "cd frontend && nvm install 14.13.8"
              sh "npm run build"
         }
       }
        stage('Upload') {
          steps {
            
           sh "aws s3 cp ./build/. s3://jenkins-makpar-odos --recursive"
          }
        }
    }
}
