import json,sys,asyncio
from json import loads
from azure.eventhub.aio import EventHubProducerClient
from azure.eventhub import EventData
from kafka import KafkaConsumer
from chardet import detect
from confluent_kafka import Consumer
import socket

conf={"bootstrap.servers": "https://kafkaconodc01-dev.test.intranet:8083",
         "client.id": socket.gethostname(),
         "admin.override.sasl.jaas.config": "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required username=<service_account> password=xxx metadataServerUrls='https://kafkabkrodc01-dev.test.intranet:8090,https://kafkabkrodc02-dev.test.intranet:8090,https://kafkabkrodc03-dev.test.intranet:8090, https://kafkabkrodc04-dev.test.intranet:8090,https://kafkabkrodc05-dev.test.intranet:8090';","producer.override.sasl.jaas.config": "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required username=<service_account> password=xxx metadataServerUrls='https://kafkabkrodc01-dev.test.intranet:8090,https://kafkabkrodc02-dev.test.intranet:8090,https://kafkabkrodc03-dev.test.intranet:8090,https://kafkabkrodc04-dev.test.intranet:8090,https://kafkabkrodc05-dev.test.intranet:8090';"}

consumer = Consumer(conf)
try:
    consumer.subscribe(["users"])
    running=True

    while running:
        msg = consumer.poll(timeout=1.0)
        if msg is None: break

        if msg.error():
            if msg.error().code() == KafkaError._PARTITION_EOF:
                # End of partition event
                sys.stderr.write('%% %s [%d] reached end at offset %d\n' %
                                (msg.topic(), msg.partition(), msg.offset()))
            elif msg.error():
                raise KafkaException(msg.error())
        else:
            print(msg.value())
            #event_data_batch.add(EventData(msg))
finally:
# Close down consumer to commit final offsets.
    consumer.close()
