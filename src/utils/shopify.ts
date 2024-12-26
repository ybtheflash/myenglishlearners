import Client from 'shopify-buy';

if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN) {
  console.error('Missing Shopify configuration. Please check your .env.local file.');
}

// Initialize the client with apiVersion
export const shopifyClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN || '',
  apiVersion: '2023-10' // Add this line - use the latest stable version
});

// Helper to format price
export const formatPrice = (amount: string) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(amount));
};
