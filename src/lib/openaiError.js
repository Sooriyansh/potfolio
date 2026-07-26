const QUOTA_MESSAGE =
  'OpenAI API credits are exhausted or a project spend limit was reached. Add credits or raise the project limit in the OpenAI Platform billing settings, then try again in a few minutes.';

export function openAIErrorResponse(response, result, fallback = 'OpenAI request failed.') {
  const providerError = result?.error || {};
  const code = providerError.code || providerError.type;
  const message = providerError.message || fallback;

  if (
    response.status === 429 &&
    (code === 'insufficient_quota' ||
      /quota|billing|credit|spend limit/i.test(message))
  ) {
    return {
      error: QUOTA_MESSAGE,
      code: 'OPENAI_QUOTA_EXCEEDED',
      status: 429,
    };
  }

  if (response.status === 429) {
    return {
      error: 'OpenAI is receiving too many requests. Please wait briefly and try again.',
      code: 'OPENAI_RATE_LIMITED',
      status: 429,
    };
  }

  if (response.status === 401) {
    return {
      error: 'The server OpenAI API key is invalid or inactive. Replace OPENAI_API_KEY and restart the server.',
      code: 'OPENAI_AUTH_FAILED',
      status: 503,
    };
  }

  if (response.status === 403) {
    return {
      error: 'This OpenAI project does not have access to the requested model.',
      code: 'OPENAI_ACCESS_DENIED',
      status: 503,
    };
  }

  return {
    error: message,
    code: 'OPENAI_UPSTREAM_ERROR',
    status: response.status >= 500 ? 503 : 502,
  };
}
