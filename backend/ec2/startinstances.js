const {
    EC2Client,
      StartInstancesCommand,
      StopInstancesCommand,
    } = require("@aws-sdk/client-ec2");
  
    const ec2Client = new EC2Client({ region: "us-east-1" });
   
    const start = async (instanceId) => {

 const params = { InstanceIds: [instanceId] }; 
        try {
          const data = await ec2Client.send(new StartInstancesCommand(params));
          console.log("Success", data.StartingInstances);
          return data;
        } catch (err) {
          console.log("Error2", err);
        }

    };
    
module.exports = {start}