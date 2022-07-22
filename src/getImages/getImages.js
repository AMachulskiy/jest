import axios from 'axios';

const getImages = async (num) => {
  const response = await axios.get('https://picsum.photos/v2/list');
  const images = [];

  for (let i = 0; i < num; i++) {
    const { author, url } = response.data[i];
    images.push({ author, url });
  }

  console.log(images);
  return images;
};

export default getImages;
