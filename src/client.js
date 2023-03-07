import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'f73cjxwr'  ,
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: 'sk39XkxcRNB9hGDQJthrxAPpK1MkSDfeVGn0bm0aX79o62t0Yc0x7O24tyz1awqpTLo6GIHOvYOoK2ZVdqKUeH1qsSHHDM3pdNEqsx1q5kWr4Ta5PALnaUCxSCWGPlXQnCI9GPYkKlFSXEbxTzgOwlkJFngf8kIh0RgB9LL3wU5EYClKvbpL'   ,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

