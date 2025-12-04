import axios from 'axios';
import { API_KEYS } from './apiKeys';

let currentApiKeyIndex = 0;
export const fetcher = async (url: string) => {
	let response;

	while (currentApiKeyIndex < API_KEYS.length) {
		try {
			response = await axios.get(url, {
				params: {
					apiKey: API_KEYS[currentApiKeyIndex],
				},
			});
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response && error.response.status === 402) {
					console.warn(
						`API key exceeded its limit. Switching to next key. ${currentApiKeyIndex + 1}/${API_KEYS.length}`
					);
					currentApiKeyIndex++;
				} else {
					throw error;
				}
			} else {
				throw new Error('An unexpected error occurred');
			}
		}
	}

	throw new Error('All API keys have been exhausted.');
};
