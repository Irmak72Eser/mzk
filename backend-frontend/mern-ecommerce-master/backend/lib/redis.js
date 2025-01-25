/*import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
*/

import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis({
    host: 'redis-11682.c55.eu-central-1-1.ec2.redns.redis-cloud.com',
    port: 11682,
    password: '9Qg4O2EqiWPaN0y1flKgnH6uhtT36JI3',
});
