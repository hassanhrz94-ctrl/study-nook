const dns = require('node:dns').promises;
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);