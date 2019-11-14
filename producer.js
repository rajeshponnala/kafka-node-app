const kafka = require('kafka-node');
const config = require('./config');

const Producer = kafka.Producer
const client = new kafka.KafkaClient({ kafkaHost: config.kafkaHost});
const producer = new Producer(client,  {requireAcks: 0, partitionerType: 2});

const pushDataToKafka = (dataToPush) => {
    let payloadToKafkaTopic = [{ topic: config.KafkaTopic, messages: JSON.stringify(dataToPush) }]
    console.log(payloadToKafkaTopic);
    producer.on('ready', async () =>  {
        producer.send(payloadToKafkaTopic,(err, data) => {
            if(err) {
                console.log(err, 'error while sending data to kafka')
            } else {
                console.log('data: ', data);
            }
        })
    })
    producer.on('error', (err) => {
        console.log(err, 'Prodcuer error')
    })
}

const jsonData = require('./app_json.js');

pushDataToKafka(jsonData);
