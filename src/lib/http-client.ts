let alreadyAlertUnauthorizedError = false;

async function httpClient<TData, TBody = unknown>(
  path: string, body?: TBody, additionalHeaders?: HeadersInit,
): Promise<TData> {
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(body || {}),
    headers: {
      ...additionalHeaders,
      'X-Proxy': 'API',
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 401) {
    if (!alreadyAlertUnauthorizedError) {
      alreadyAlertUnauthorizedError = true;
      alert('当前会话已失效，请重新登录!');
    }

    window.location.reload();
    return Promise.reject(new Error('当前会话已失效，请重新登录!'));
  }

  if ([404, 500].includes(response.status)) {
    return Promise.reject(new Error('请求失败!'));
  }

  const { code, msg, data } = await response.json();
  if (code !== 0) {
    const e = new Error(msg);
    if (data) {
      Object.assign(e, { data });
    }
    return Promise.reject(e);
  }

  return data as TData;
}

export default httpClient;
