const express = require('express')
const app = express();
const describe = require('./ec2/describeinstances');
const create = require('./ec2/createinstances');
const start = require('./ec2/startinstances');
const stop = require('./ec2/stopinstances');



app.get('/', async (req, res)=>  {
    const data = await describe.list();
    
    const {
        Reservations : [
            {
                Instances :[
                    {
                        InstanceId,
                        State : {
                            Name
                        },
                        Tags : [
                            {
                                Value
                            }
                        ]
                    }
                ]
            }
        ]
    } = data;
    newData = {
        Reservations : [
            {
                Instances :[
                    {
                        InstanceId,
                        State : {
                            Name
                        },
                        Tags : [
                            {
                                Value
                            }
                        ]
                    }
                ]
            }
        ]
    }
    res.send(newData);
    console.log(newData)
    //res.send(data)
    res.end();
});

app.get('/create/:instance_name', (req, res)=>{
    const {instance_name} = req.params;
    create.create(instance_name)
    res.end("Instance created");
});

app.get('/start/:instanceId', (req, res)=>{
    const {instanceId} = req.params;
    start.start(instanceId)
    res.end("Instance Started");
});

app.get('/stop/:instanceId', (req, res)=>{
    const {instanceId} = req.params;
    stop.stop(instanceId)
    res.end("Instance Stopped");
});



app.listen(6000,() => {
    console.log('SErver Started')
});