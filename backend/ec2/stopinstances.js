const {
  EC2Client,
    StartInstancesCommand,
    StopInstancesCommand,
  } = require("@aws-sdk/client-ec2");

  const ec2Client = new EC2Client({ region: "us-east-1" });

  
  const stop = async (instanceId) => {
    const params = { InstanceIds: [instanceId] };
    try {
      const data = await ec2Client.send(new StopInstancesCommand(params));
      console.log("Success", data.StoppingInstances);
      return data;
    } catch (err) {
      console.log("Error", err);
    }
  };
  module.exports = {stop};