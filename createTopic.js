const kafka = require('kafka-node')
const config = require('./config')

const client = new kafka.KafkaClient({ kafkaHost: config.kafkaHost});

const topicToCreate = [{
    topic: config.kafkaTopic,
    partitions: 1,
    replicationFactor: 1
}]

client.createTopics(topicToCreate,(error, result) => {
    if(error) {
        console.log(error, 'errors creating topic')
        process.exit(0)
    }
    if(result) {
        console.log(result, 'topic created successfully');
        process.exit(1)
    }
})
