
const{
    EC2Client,
    CreateTagsCommand,
    RunInstancesCommand
} = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "us-east-1" });
// Set the parameters
const instanceParams = {
    ImageId: "ami-0cf6644eac2eafb66", //AMI_ID
    InstanceType: "t2.micro",
    KeyName: "aws-api", //KEY_PAIR_NAME
    MinCount: 1,
    MaxCount: 1,
};

const create = async (instance_name) => {

    try {
        const data = await ec2Client.send(new RunInstancesCommand(instanceParams));
        console.log(data.Instances[0].InstanceId);
        const instanceId = data.Instances[0].InstanceId;
        console.log("Created instance", instanceId);
        // Add tags to the instance
        const tagParams = {
            Resources: [instanceId],
            Tags: [
                {
                    Key: new Date().getDate(),
                    Value: instance_name,
                },
            ],
        };
        try {
            const data = await ec2Client.send(new CreateTagsCommand(tagParams));
            console.log("Instance tagged with key '${tag_key}'");
        } catch (err) {
            console.log("Error", err);
        }
    } catch (err) {
        console.log("Error", err);
    }
};
module.exports = {create};

