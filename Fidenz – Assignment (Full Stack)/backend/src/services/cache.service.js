const cache = require("../config/cache");

const getCache = (key) => {
  const item = cache[key];

  if (!item) return null;

  if (Date.now() > item.expiresAt) {
    delete cache[key];
    return null;
  }

  return item.data;
};

// _________ save cache ___________

const setCache = (key, data, ttl = 300000) => {
  cache[key] = {
    data,
    expiresAt: Date.now() + ttl,
  };
};

// ______ cache debug ____________
const cacheStatus = (key) => {
  const item = cache[key];

  if (!item) return { status: "MISS" };

  const remaining = Math.max(0, item.expiresAt - Date.now());

  return {
    status: "HIT",
    expiresIn: Math.floor(remaining / 1000),
  };
};
module.exports = { getCache, setCache, cacheStatus };
