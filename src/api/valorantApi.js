import axios from 'axios';
import { getEnviroment } from '../agents/helpers/getEnviroment';

const { VITE_API_URL } = getEnviroment();

const valorantApi = axios.create({
  baseURL: VITE_API_URL,
});

export default valorantApi;
