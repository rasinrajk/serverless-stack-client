const config = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-api-prod-serverlessdeploymentbucket-12co5ya4rqnis",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://ud8bcgeyj8.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_ajOHYdCgm",
      APP_CLIENT_ID: "5q3df5p6mpv5of79i7st756rde",
      IDENTITY_POOL_ID: "us-east-2:6c52f306-b3db-4066-a786-5d27f1653249",
    },
  };
  
  export default config;