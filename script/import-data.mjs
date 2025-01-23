import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

// Upload image function definition should be before it is used
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function migrateApiData(apiUrl, type) {
  try {
    console.log(`Fetching data from ${apiUrl}...`);

    const response = await axios.get(apiUrl);
    
    // Check if the response is valid
    if (!response || !response.data) {
      console.error(`Invalid response or empty data from ${apiUrl}`);
      return;
    }

    const items = Array.isArray(response.data) ? response.data : [];
    if (items.length === 0) {
      console.error(`No data found in the API response from ${apiUrl}`);
      return;
    }

    console.log(`Migrating ${items.length} items from ${apiUrl}...`);

    for (const item of items) {
      let imageRef = null;

      if (item.image) {
        imageRef = await uploadImageToSanity(item.image);
      }

      const sanityDocument = {
        _type: type,
        name: item.name,
        category: item.category || null,
        price: item.price,
        originalPrice: item.originalPrice || null,
        tags: item.tags || [],
        description: item.description || '',
        available: item.available !== undefined ? item.available : true,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      await client.create(sanityDocument);
    }

    console.log(`Data from ${apiUrl} migrated successfully!`);
  } catch (error) {
    console.error(`Error in migrating data from ${apiUrl}:`, error);
  }
}

async function importData() {
  try {
    console.log('Starting data migration...');

    // API endpoints and their respective types in Sanity
    const apis = [
      { url: 'https://sanity-nextjs-rouge.vercel.app/api/foods', type: 'food' },
      { url: 'https://sanity-nextjs-rouge.vercel.app/api/chefs', type: 'chef' }, // Correct type for chefs
    ];

    for (const api of apis) {
      console.log(`Migrating data for ${api.type} from ${api.url}`);
      await migrateApiData(api.url, api.type);
    }

    console.log('All data migrated successfully!');
  } catch (error) {
    console.error('Error during data migration:', error);
  }
}

importData();