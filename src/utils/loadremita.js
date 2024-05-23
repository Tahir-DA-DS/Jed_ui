const loadRemitaScript = () => {
  return new Promise((resolve, reject) => {
    if (window.RmPaymentEngine) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = "https://demo.remita.net/payment/v1/remita-pay-inline.bundle.js";
    script.onload = () => {
      if (window.RmPaymentEngine) {
        resolve();
      } else {
        reject(new Error('Remita script not loaded'));
      }
    };
    script.onerror = (error) => {
      console.error('Failed to load Remita script:', error);
      reject(new Error('Failed to load Remita script'));
    };
    document.body.appendChild(script);
  });
};

export default loadRemitaScript;
