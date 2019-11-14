const conf = require('dotenv').config({path: '.env'});

const config = {
  KafkaHost: conf.parsed.KAFKA_HOST,
  KafkaTopic: conf.parsed.KAFKA_TOPIC
};

module.exports = config;
