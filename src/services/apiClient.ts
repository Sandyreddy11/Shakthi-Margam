// src/services/apiClient.ts
const API_BASE_URL = '/api'; // Matches handlers.ts

interface RequestOptions extends RequestInit {
  body?: any; // Allow any body type for simplicity, will be stringified
}

async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { body, ...customConfig } = options;
  const headers: HeadersInit = { 'Content-Type': 'application/json' };

  // Attempt to get token from localStorage
  // This is a common way to handle tokens, but can be adapted (e.g., to state management)
  if (typeof window !== 'undefined') { // Ensure localStorage is available (not in SSR)
    const token = localStorage.getItem('authToken'); 
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const config: RequestInit = {
    method: body ? 'POST' : 'GET', // Default to GET if no body, else POST
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ 
        message: response.statusText || 'An error occurred without a JSON body',
      }));
      const error = new Error(errorData.message || 'API request failed');
      (error as any).status = response.status;
      (error as any).data = errorData;
      throw error;
    }
    
    const contentType = response.headers.get('content-type');
    if (response.status === 204 || !contentType || !contentType.includes('application/json')) {
      // For 204 No Content, or if the response is not JSON, resolve with undefined.
      // This is important for logout or other endpoints that might not return a body.
      return undefined as T; 
    }

    return await response.json();
  } catch (error) {
    console.error('API Client Error:', endpoint, error);
    // Re-throw to be caught by the calling service or component
    throw error; 
  }
}

export default apiClient;
