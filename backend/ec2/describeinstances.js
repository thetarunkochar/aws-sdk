
const{ EC2Client, DescribeInstancesCommand } = require("@aws-sdk/client-ec2");
const ec2Client = new EC2Client({ region: "us-east-1" });

const list = async () => {
  try {
    const data = await ec2Client.send(new DescribeInstancesCommand({}));
    //console.log("Success", JSON.stringify(data));
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
module.exports = {list}