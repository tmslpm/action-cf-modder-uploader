import * as core from '@actions/core'
import FormData from 'form-data'
import fs from 'fs';
import axios from 'axios';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  /**
    try {
     core.debug("step <- run.prepare");
     const API_TOKEN: string = core.getInput('cf-token');
     const PROJECT_ID: string = core.getInput('cf-projecid');
     const FILE_PATH: string = core.getInput('file-path');
     const CTX: string = core.getInput("cf-context");
     const METADATA: string = core.getInput("cf-metadata");
     const AGENT: string = core.getInput("axios-agent");
 
     core.debug("step <- run.validate");
     if (!fs.existsSync(FILE_PATH)) {
       core.setFailed(`not found file ${FILE_PATH}`);
     }
 
     core.debug("step <- run");
     const formData = new FormData();
     formData.append('metadata', JSON.stringify(METADATA));
     formData.append('file', fs.createReadStream(FILE_PATH));
     const result = await axios.post(`https://${CTX}.curseforge.com/api/projects/${PROJECT_ID}/upload-file`, formData, {
       headers: {
         "Content-Type": "multipart/form-data",
         'User-Agent': AGENT,
         'X-Api-Token': API_TOKEN,
         ...formData.getHeaders()
       }
     });
     core.setOutput('file', result)
   } catch (error) {
     if (error instanceof Error) core.setFailed(error.message)
   }
   */
}
