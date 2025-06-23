import { City } from './city.model';

export const CITIES: City[] = [
  // North America
  { id: 'nyc', name: 'New York', timezone: 'America/New_York', lat: 40.7128, lng: -74.006 },
  { id: 'la', name: 'Los Angeles', timezone: 'America/Los_Angeles', lat: 34.0522, lng: -118.2437 },
  { id: 'chi', name: 'Chicago', timezone: 'America/Chicago', lat: 41.8781, lng: -87.6298 },
  { id: 'tor', name: 'Toronto', timezone: 'America/Toronto', lat: 43.6532, lng: -79.3832 },
  { id: 'mex', name: 'Mexico City', timezone: 'America/Mexico_City', lat: 19.4326, lng: -99.1332 },

  // South America
  { id: 'sao', name: 'São Paulo', timezone: 'America/Sao_Paulo', lat: -23.5505, lng: -46.6333 },
  { id: 'bue', name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', lat: -34.6037, lng: -58.3816 },
  { id: 'lim', name: 'Lima', timezone: 'America/Lima', lat: -12.0464, lng: -77.0428 },

  // Europe
  { id: 'lon', name: 'London', timezone: 'Europe/London', lat: 51.5072, lng: -0.1276 },
  { id: 'par', name: 'Paris', timezone: 'Europe/Paris', lat: 48.8566, lng: 2.3522 },
  { id: 'ber', name: 'Berlin', timezone: 'Europe/Berlin', lat: 52.5200, lng: 13.4050 },
  { id: 'rom', name: 'Rome', timezone: 'Europe/Rome', lat: 41.9028, lng: 12.4964 },
  { id: 'mad', name: 'Madrid', timezone: 'Europe/Madrid', lat: 40.4168, lng: -3.7038 },
  { id: 'ams', name: 'Amsterdam', timezone: 'Europe/Amsterdam', lat: 52.3676, lng: 4.9041 },
  { id: 'mos', name: 'Moscow', timezone: 'Europe/Moscow', lat: 55.7558, lng: 37.6176 },

  // Asia
  { id: 'tok', name: 'Tokyo', timezone: 'Asia/Tokyo', lat: 35.6895, lng: 139.6917 },
  { id: 'bei', name: 'Beijing', timezone: 'Asia/Shanghai', lat: 39.9042, lng: 116.4074 },
  { id: 'sha', name: 'Shanghai', timezone: 'Asia/Shanghai', lat: 31.2304, lng: 121.4737 },
  { id: 'hk', name: 'Hong Kong', timezone: 'Asia/Hong_Kong', lat: 22.3193, lng: 114.1694 },
  { id: 'sin', name: 'Singapore', timezone: 'Asia/Singapore', lat: 1.3521, lng: 103.8198 },
  { id: 'mum', name: 'Mumbai', timezone: 'Asia/Kolkata', lat: 19.0760, lng: 72.8777 },
  { id: 'del', name: 'Delhi', timezone: 'Asia/Kolkata', lat: 28.7041, lng: 77.1025 },
  { id: 'bkk', name: 'Bangkok', timezone: 'Asia/Bangkok', lat: 13.7563, lng: 100.5018 },
  { id: 'seo', name: 'Seoul', timezone: 'Asia/Seoul', lat: 37.5665, lng: 126.9780 },
  { id: 'dub', name: 'Dubai', timezone: 'Asia/Dubai', lat: 25.2048, lng: 55.2708 },

  // Africa
  { id: 'cai', name: 'Cairo', timezone: 'Africa/Cairo', lat: 30.0444, lng: 31.2357 },
  { id: 'lag', name: 'Lagos', timezone: 'Africa/Lagos', lat: 6.5244, lng: 3.3792 },
  { id: 'joh', name: 'Johannesburg', timezone: 'Africa/Johannesburg', lat: -26.2041, lng: 28.0473 },
  { id: 'cas', name: 'Casablanca', timezone: 'Africa/Casablanca', lat: 33.5731, lng: -7.5898 },

  // Oceania
  { id: 'syd', name: 'Sydney', timezone: 'Australia/Sydney', lat: -33.8688, lng: 151.2093 },
  { id: 'mel', name: 'Melbourne', timezone: 'Australia/Melbourne', lat: -37.8136, lng: 144.9631 },
  { id: 'per', name: 'Perth', timezone: 'Australia/Perth', lat: -31.9505, lng: 115.8605 },
  { id: 'auc', name: 'Auckland', timezone: 'Pacific/Auckland', lat: -36.8485, lng: 174.7633 },
];