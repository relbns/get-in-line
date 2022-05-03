import { SlotsFinder } from './src/services/slots-finder';
import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';
import { HttpService, SessionCreator } from './src/services';
import { getLogger, LoggerMessages, withRequest } from './src/services/logger';

const MAX_DAYS = 14;

export async function findSlots(event: any, context: any): Promise<void> {
  withRequest(event, context)
  const logger = getLogger();

  const token = await SessionCreator.create();
  const httpService = new HttpService(token, false);
  const slotsFinder = new SlotsFinder(httpService);
  const sqsClient = new SQSClient({ region: 'eu-central-1' });
  const queueUrl = process.env.SLOTS_QUEUE_URL;
  const slots = await slotsFinder.find(MAX_DAYS);
  const slotsCities = Array.from(new Set(slots.map(s => s.city))).join(',');
  logger.info({slotsLength: slots.length, cities: slotsCities}, LoggerMessages.SlotsFound)
  const publishes = slots.map(slot =>
    sqsClient.send(new SendMessageCommand({
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(slot)
    })));

  await Promise.all(publishes);
};

