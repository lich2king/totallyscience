importScripts("epoxy-bundled.js");

self.onmessage = async function(event) {
    const { url } = event.data;

    // Initialize EpoxyClient
    const { EpoxyClient, certs } = await epoxy();
    let client = await new EpoxyClient("wss://localhost:8000", navigator.userAgent, 10);

    try {
        // Fetch data using EpoxyClient
        let response = await client.fetch(url);
        let text = await response.text();

        // Post the result back to the main script
        self.postMessage({ success: true, data: text });
    } catch (error) {
        // Post the error back to the main script
        self.postMessage({ success: false, error: error.message });
    }
};