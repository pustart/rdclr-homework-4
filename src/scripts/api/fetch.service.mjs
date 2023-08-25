class FetchService {
  constructor() {
    this._abortController = new AbortController();
  }

  async fetchData(url, options = {}) {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: this._abortController.signal,
      ...options,
    };

    try {
      const response = await fetch(url, mergedOptions);
      const data = await response.json();
      return data;
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch request aborted');
      } else {
        console.error('Fetch request failed: ', err);
      }
    }
  }
}

export default FetchService;
