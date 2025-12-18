const API_URL = process.env.REACT_APP_API_URL || 'https://api-consumet-org-maqo.onrender.com';

export const search = async (query) => {
  // TODO: Implement search functionality
  console.log('Searching for:', query);
  return [];
};

export const getAnimeInfo = async (id) => {
  // TODO: Implement getAnimeInfo functionality
  console.log('Getting info for:', id);
  return {};
};

export const getEpisodeStreamLinks = async (episodeId) => {
  // TODO: Implement getEpisodeStreamLinks functionality
  console.log('Getting stream links for:', episodeId);
  return {};
};

export const getTrending = async () => {
  try {
    const response = await fetch(`${API_URL}/meta/anilist/trending`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending anime:', error);
    return [];
  }
};

export const getPopular = async () => {
  // TODO: Implement getPopular functionality
  console.log('Getting popular anime');
  return [];
};
