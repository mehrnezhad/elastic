import { Client } from "@elastic/elasticsearch";
import { config } from "dotenv";
config()
const { ELASTIC_SEARCH_HOST } = process.env

const elasticClient = new Client({
    node: ELASTIC_SEARCH_HOST,
    requestTimeout: 60000,
    tls: {
        rejectUnauthorized: false
    }
})

export default elasticClient