import { City } from './city.model';

export const CITIES: City[] = [
  // ========== NORTH AMERICA ==========
  
  // United States - Major Cities
  { id: 'nyc', name: 'New York', timezone: 'America/New_York', lat: 40.7128, lng: -74.006 },
  { id: 'la', name: 'Los Angeles', timezone: 'America/Los_Angeles', lat: 34.0522, lng: -118.2437 },
  { id: 'chi', name: 'Chicago', timezone: 'America/Chicago', lat: 41.8781, lng: -87.6298 },
  { id: 'hou', name: 'Houston', timezone: 'America/Chicago', lat: 29.7604, lng: -95.3698 },
  { id: 'phx', name: 'Phoenix', timezone: 'America/Phoenix', lat: 33.4484, lng: -112.0740 },
  { id: 'phi', name: 'Philadelphia', timezone: 'America/New_York', lat: 39.9526, lng: -75.1652 },
  { id: 'san', name: 'San Antonio', timezone: 'America/Chicago', lat: 29.4241, lng: -98.4936 },
  { id: 'sd', name: 'San Diego', timezone: 'America/Los_Angeles', lat: 32.7157, lng: -117.1611 },
  { id: 'dal', name: 'Dallas', timezone: 'America/Chicago', lat: 32.7767, lng: -96.7970 },
  { id: 'sj', name: 'San Jose', timezone: 'America/Los_Angeles', lat: 37.3382, lng: -121.8863 },
  { id: 'aus', name: 'Austin', timezone: 'America/Chicago', lat: 30.2672, lng: -97.7431 },
  { id: 'jax', name: 'Jacksonville', timezone: 'America/New_York', lat: 30.3322, lng: -81.6557 },
  { id: 'sf', name: 'San Francisco', timezone: 'America/Los_Angeles', lat: 37.7749, lng: -122.4194 },
  { id: 'col', name: 'Columbus', timezone: 'America/New_York', lat: 39.9612, lng: -82.9988 },
  { id: 'ind', name: 'Indianapolis', timezone: 'America/Indiana/Indianapolis', lat: 39.7684, lng: -86.1581 },
  { id: 'ftw', name: 'Fort Worth', timezone: 'America/Chicago', lat: 32.7555, lng: -97.3308 },
  { id: 'cha', name: 'Charlotte', timezone: 'America/New_York', lat: 35.2271, lng: -80.8431 },
  { id: 'sea', name: 'Seattle', timezone: 'America/Los_Angeles', lat: 47.6062, lng: -122.3321 },
  { id: 'den', name: 'Denver', timezone: 'America/Denver', lat: 39.7392, lng: -104.9903 },
  { id: 'dc', name: 'Washington DC', timezone: 'America/New_York', lat: 38.9072, lng: -77.0369 },
  { id: 'bos', name: 'Boston', timezone: 'America/New_York', lat: 42.3601, lng: -71.0589 },
  { id: 'det', name: 'Detroit', timezone: 'America/Detroit', lat: 42.3314, lng: -83.0458 },
  { id: 'nas', name: 'Nashville', timezone: 'America/Chicago', lat: 36.1627, lng: -86.7816 },
  { id: 'mem', name: 'Memphis', timezone: 'America/Chicago', lat: 35.1495, lng: -90.0490 },
  { id: 'por', name: 'Portland', timezone: 'America/Los_Angeles', lat: 45.5152, lng: -122.6784 },
  { id: 'okc', name: 'Oklahoma City', timezone: 'America/Chicago', lat: 35.4676, lng: -97.5164 },
  { id: 'lv', name: 'Las Vegas', timezone: 'America/Los_Angeles', lat: 36.1699, lng: -115.1398 },
  { id: 'lou', name: 'Louisville', timezone: 'America/Kentucky/Louisville', lat: 38.2527, lng: -85.7585 },
  { id: 'bal', name: 'Baltimore', timezone: 'America/New_York', lat: 39.2904, lng: -76.6122 },
  { id: 'mil', name: 'Milwaukee', timezone: 'America/Chicago', lat: 43.0389, lng: -87.9065 },
  { id: 'alb', name: 'Albuquerque', timezone: 'America/Denver', lat: 35.0844, lng: -106.6504 },
  { id: 'tuc', name: 'Tucson', timezone: 'America/Phoenix', lat: 32.2226, lng: -110.9747 },
  { id: 'fre', name: 'Fresno', timezone: 'America/Los_Angeles', lat: 36.7378, lng: -119.7871 },
  { id: 'sac', name: 'Sacramento', timezone: 'America/Los_Angeles', lat: 38.5816, lng: -121.4944 },
  { id: 'kc', name: 'Kansas City', timezone: 'America/Chicago', lat: 39.0997, lng: -94.5786 },
  { id: 'mia', name: 'Miami', timezone: 'America/New_York', lat: 25.7617, lng: -80.1918 },
  { id: 'atl', name: 'Atlanta', timezone: 'America/New_York', lat: 33.7490, lng: -84.3880 },
  { id: 'cle', name: 'Cleveland', timezone: 'America/New_York', lat: 41.4993, lng: -81.6944 },
  { id: 'no', name: 'New Orleans', timezone: 'America/Chicago', lat: 29.9511, lng: -90.0715 },
  { id: 'tb', name: 'Tampa', timezone: 'America/New_York', lat: 27.9506, lng: -82.4572 },
  { id: 'hnl', name: 'Honolulu', timezone: 'Pacific/Honolulu', lat: 21.3099, lng: -157.8581 },
  { id: 'anc', name: 'Anchorage', timezone: 'America/Anchorage', lat: 61.2181, lng: -149.9003 },

  // Canada
  { id: 'tor', name: 'Toronto', timezone: 'America/Toronto', lat: 43.6532, lng: -79.3832 },
  { id: 'mon', name: 'Montreal', timezone: 'America/Montreal', lat: 45.5017, lng: -73.5673 },
  { id: 'van', name: 'Vancouver', timezone: 'America/Vancouver', lat: 49.2827, lng: -123.1207 },
  { id: 'cal', name: 'Calgary', timezone: 'America/Edmonton', lat: 51.0447, lng: -114.0719 },
  { id: 'edm', name: 'Edmonton', timezone: 'America/Edmonton', lat: 53.5461, lng: -113.4938 },
  { id: 'ott', name: 'Ottawa', timezone: 'America/Toronto', lat: 45.4215, lng: -75.6972 },
  { id: 'win', name: 'Winnipeg', timezone: 'America/Winnipeg', lat: 49.8951, lng: -97.1384 },
  { id: 'que', name: 'Quebec City', timezone: 'America/Montreal', lat: 46.8139, lng: -71.2080 },
  { id: 'ham', name: 'Hamilton', timezone: 'America/Toronto', lat: 43.2557, lng: -79.8711 },
  { id: 'kit', name: 'Kitchener', timezone: 'America/Toronto', lat: 43.4516, lng: -80.4925 },
  { id: 'hal', name: 'Halifax', timezone: 'America/Halifax', lat: 44.6488, lng: -63.5752 },
  { id: 'vic', name: 'Victoria', timezone: 'America/Vancouver', lat: 48.4284, lng: -123.3656 },
  { id: 'sas', name: 'Saskatoon', timezone: 'America/Regina', lat: 52.1579, lng: -106.6702 },
  { id: 'reg', name: 'Regina', timezone: 'America/Regina', lat: 50.4452, lng: -104.6189 },
  { id: 'sjo', name: 'St. Johns', timezone: 'America/St_Johns', lat: 47.5615, lng: -52.7126 },

  // Mexico
  { id: 'mex', name: 'Mexico City', timezone: 'America/Mexico_City', lat: 19.4326, lng: -99.1332 },
  { id: 'gua', name: 'Guadalajara', timezone: 'America/Mexico_City', lat: 20.6597, lng: -103.3496 },
  { id: 'mon_mx', name: 'Monterrey', timezone: 'America/Monterrey', lat: 25.6866, lng: -100.3161 },
  { id: 'pue', name: 'Puebla', timezone: 'America/Mexico_City', lat: 19.0414, lng: -98.2063 },
  { id: 'tij', name: 'Tijuana', timezone: 'America/Tijuana', lat: 32.5149, lng: -117.0382 },
  { id: 'leo', name: 'León', timezone: 'America/Mexico_City', lat: 21.1525, lng: -101.6953 },
  { id: 'jua', name: 'Juárez', timezone: 'America/Ojinaga', lat: 31.6904, lng: -106.4245 },
  { id: 'tor_mx', name: 'Torreón', timezone: 'America/Mexico_City', lat: 25.5428, lng: -103.4068 },
  { id: 'que_mx', name: 'Querétaro', timezone: 'America/Mexico_City', lat: 20.5888, lng: -100.3899 },
  { id: 'san_mx', name: 'San Luis Potosí', timezone: 'America/Mexico_City', lat: 22.1565, lng: -100.9855 },
  { id: 'mer', name: 'Mérida', timezone: 'America/Merida', lat: 20.9674, lng: -89.5926 },
  { id: 'ags', name: 'Aguascalientes', timezone: 'America/Mexico_City', lat: 21.8853, lng: -102.2916 },
  { id: 'mor', name: 'Morelia', timezone: 'America/Mexico_City', lat: 19.7069, lng: -101.1906 },
  { id: 'mex_mex', name: 'Mexicali', timezone: 'America/Tijuana', lat: 32.6245, lng: -115.4523 },
  { id: 'cul', name: 'Culiacán', timezone: 'America/Mazatlan', lat: 24.7993, lng: -107.3938 },
  { id: 'can', name: 'Cancún', timezone: 'America/Cancun', lat: 21.1619, lng: -86.8515 },

  // ========== CENTRAL AMERICA & CARIBBEAN ==========
  { id: 'gua_gt', name: 'Guatemala City', timezone: 'America/Guatemala', lat: 14.6349, lng: -90.5069 },
  { id: 'bel', name: 'Belize City', timezone: 'America/Belize', lat: 17.5015, lng: -88.1962 },
  { id: 'teg', name: 'Tegucigalpa', timezone: 'America/Tegucigalpa', lat: 14.0723, lng: -87.1921 },
  { id: 'man', name: 'Managua', timezone: 'America/Managua', lat: 12.1364, lng: -86.2514 },
  { id: 'sjo_cr', name: 'San José', timezone: 'America/Costa_Rica', lat: 9.9281, lng: -84.0907 },
  { id: 'pan', name: 'Panama City', timezone: 'America/Panama', lat: 8.9824, lng: -79.5199 },
  { id: 'hav', name: 'Havana', timezone: 'America/Havana', lat: 23.1136, lng: -82.3666 },
  { id: 'kin', name: 'Kingston', timezone: 'America/Jamaica', lat: 17.9712, lng: -76.7936 },
  { id: 'pos', name: 'Port of Spain', timezone: 'America/Port_of_Spain', lat: 10.6918, lng: -61.2225 },
  { id: 'bri', name: 'Bridgetown', timezone: 'America/Barbados', lat: 13.1939, lng: -59.5432 },
  { id: 'sd_do', name: 'Santo Domingo', timezone: 'America/Santo_Domingo', lat: 18.4861, lng: -69.9312 },
  { id: 'sj_pr', name: 'San Juan', timezone: 'America/Puerto_Rico', lat: 18.4655, lng: -66.1057 },

  // ========== SOUTH AMERICA ==========
  
  // Brazil
  { id: 'sao', name: 'São Paulo', timezone: 'America/Sao_Paulo', lat: -23.5505, lng: -46.6333 },
  { id: 'rio', name: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', lat: -22.9068, lng: -43.1729 },
  { id: 'bsb', name: 'Brasília', timezone: 'America/Sao_Paulo', lat: -15.8267, lng: -47.9218 },
  { id: 'sal', name: 'Salvador', timezone: 'America/Bahia', lat: -12.9714, lng: -38.5014 },
  { id: 'for', name: 'Fortaleza', timezone: 'America/Fortaleza', lat: -3.7319, lng: -38.5267 },
  { id: 'bh', name: 'Belo Horizonte', timezone: 'America/Sao_Paulo', lat: -19.9191, lng: -43.9386 },
  { id: 'man_br', name: 'Manaus', timezone: 'America/Manaus', lat: -3.1190, lng: -60.0217 },
  { id: 'cur', name: 'Curitiba', timezone: 'America/Sao_Paulo', lat: -25.4284, lng: -49.2733 },
  { id: 'rec', name: 'Recife', timezone: 'America/Recife', lat: -8.0476, lng: -34.8770 },
  { id: 'poa', name: 'Porto Alegre', timezone: 'America/Sao_Paulo', lat: -30.0346, lng: -51.2177 },
  { id: 'bel_br', name: 'Belém', timezone: 'America/Belem', lat: -1.4558, lng: -48.5044 },
  { id: 'goi', name: 'Goiânia', timezone: 'America/Sao_Paulo', lat: -16.6869, lng: -49.2648 },
  { id: 'cgr', name: 'Campo Grande', timezone: 'America/Campo_Grande', lat: -20.4697, lng: -54.6201 },
  { id: 'cui', name: 'Cuiabá', timezone: 'America/Cuiaba', lat: -15.6014, lng: -56.0979 },

  // Argentina
  { id: 'bue', name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', lat: -34.6037, lng: -58.3816 },
  { id: 'cor', name: 'Córdoba', timezone: 'America/Argentina/Cordoba', lat: -31.4201, lng: -64.1888 },
  { id: 'ros', name: 'Rosario', timezone: 'America/Argentina/Buenos_Aires', lat: -32.9442, lng: -60.6505 },
  { id: 'men', name: 'Mendoza', timezone: 'America/Argentina/Mendoza', lat: -32.8895, lng: -68.8458 },
  { id: 'tuc', name: 'Tucumán', timezone: 'America/Argentina/Tucuman', lat: -26.8083, lng: -65.2176 },
  { id: 'lp', name: 'La Plata', timezone: 'America/Argentina/Buenos_Aires', lat: -34.9215, lng: -57.9545 },
  { id: 'mdp', name: 'Mar del Plata', timezone: 'America/Argentina/Buenos_Aires', lat: -38.0055, lng: -57.5426 },
  { id: 'sj_ar', name: 'San Juan', timezone: 'America/Argentina/San_Juan', lat: -31.5375, lng: -68.5364 },

  // Chile
  { id: 'scl', name: 'Santiago', timezone: 'America/Santiago', lat: -33.4489, lng: -70.6693 },
  { id: 'val', name: 'Valparaíso', timezone: 'America/Santiago', lat: -33.0458, lng: -71.6197 },
  { id: 'con', name: 'Concepción', timezone: 'America/Santiago', lat: -36.8201, lng: -73.0444 },
  { id: 'ant', name: 'Antofagasta', timezone: 'America/Santiago', lat: -23.6509, lng: -70.3975 },
  { id: 'tem', name: 'Temuco', timezone: 'America/Santiago', lat: -38.7359, lng: -72.5904 },
  { id: 'iq', name: 'Iquique', timezone: 'America/Santiago', lat: -20.2307, lng: -70.1394 },
  { id: 'pua', name: 'Punta Arenas', timezone: 'America/Punta_Arenas', lat: -53.1638, lng: -70.9171 },

  // Other South American Countries
  { id: 'lim', name: 'Lima', timezone: 'America/Lima', lat: -12.0464, lng: -77.0428 },
  { id: 'bog', name: 'Bogotá', timezone: 'America/Bogota', lat: 4.7110, lng: -74.0721 },
  { id: 'car', name: 'Caracas', timezone: 'America/Caracas', lat: 10.4806, lng: -66.9036 },
  { id: 'qui', name: 'Quito', timezone: 'America/Guayaquil', lat: -0.1807, lng: -78.4678 },
  { id: 'lpz', name: 'La Paz', timezone: 'America/La_Paz', lat: -16.5000, lng: -68.1193 },
  { id: 'asu', name: 'Asunción', timezone: 'America/Asuncion', lat: -25.2637, lng: -57.5759 },
  { id: 'mvd', name: 'Montevideo', timezone: 'America/Montevideo', lat: -34.9011, lng: -56.1645 },
  { id: 'geo', name: 'Georgetown', timezone: 'America/Guyana', lat: 6.8013, lng: -58.1551 },
  { id: 'par_sr', name: 'Paramaribo', timezone: 'America/Paramaribo', lat: 5.8520, lng: -55.2038 },
  { id: 'cay', name: 'Cayenne', timezone: 'America/Cayenne', lat: 4.9333, lng: -52.3333 },

  // ========== EUROPE ==========
  
  // United Kingdom & Ireland
  { id: 'lon', name: 'London', timezone: 'Europe/London', lat: 51.5072, lng: -0.1276 },
  { id: 'bir', name: 'Birmingham', timezone: 'Europe/London', lat: 52.4862, lng: -1.8904 },
  { id: 'man_uk', name: 'Manchester', timezone: 'Europe/London', lat: 53.4808, lng: -2.2426 },
  { id: 'gla', name: 'Glasgow', timezone: 'Europe/London', lat: 55.8642, lng: -4.2518 },
  { id: 'liv', name: 'Liverpool', timezone: 'Europe/London', lat: 53.4084, lng: -2.9916 },
  { id: 'edi', name: 'Edinburgh', timezone: 'Europe/London', lat: 55.9533, lng: -3.1883 },
  { id: 'bri_uk', name: 'Bristol', timezone: 'Europe/London', lat: 51.4545, lng: -2.5879 },
  { id: 'dub_ie', name: 'Dublin', timezone: 'Europe/Dublin', lat: 53.3498, lng: -6.2603 },
  { id: 'cor_ie', name: 'Cork', timezone: 'Europe/Dublin', lat: 51.8985, lng: -8.4756 },

  // France
  { id: 'par', name: 'Paris', timezone: 'Europe/Paris', lat: 48.8566, lng: 2.3522 },
  { id: 'mar', name: 'Marseille', timezone: 'Europe/Paris', lat: 43.2965, lng: 5.3698 },
  { id: 'lyo', name: 'Lyon', timezone: 'Europe/Paris', lat: 45.7640, lng: 4.8357 },
  { id: 'tou', name: 'Toulouse', timezone: 'Europe/Paris', lat: 43.6047, lng: 1.4442 },
  { id: 'nic', name: 'Nice', timezone: 'Europe/Paris', lat: 43.7102, lng: 7.2620 },
  { id: 'nan', name: 'Nantes', timezone: 'Europe/Paris', lat: 47.2184, lng: -1.5536 },
  { id: 'str', name: 'Strasbourg', timezone: 'Europe/Paris', lat: 48.5734, lng: 7.7521 },
  { id: 'mon_fr', name: 'Montpellier', timezone: 'Europe/Paris', lat: 43.6110, lng: 3.8767 },
  { id: 'bor', name: 'Bordeaux', timezone: 'Europe/Paris', lat: 44.8378, lng: -0.5792 },
  { id: 'lil', name: 'Lille', timezone: 'Europe/Paris', lat: 50.6292, lng: 3.0573 },

  // Germany
  { id: 'ber', name: 'Berlin', timezone: 'Europe/Berlin', lat: 52.5200, lng: 13.4050 },
  { id: 'ham_de', name: 'Hamburg', timezone: 'Europe/Berlin', lat: 53.5511, lng: 9.9937 },
  { id: 'mun', name: 'Munich', timezone: 'Europe/Berlin', lat: 48.1351, lng: 11.5820 },
  { id: 'col_de', name: 'Cologne', timezone: 'Europe/Berlin', lat: 50.9375, lng: 6.9603 },
  { id: 'fra', name: 'Frankfurt', timezone: 'Europe/Berlin', lat: 50.1109, lng: 8.6821 },
  { id: 'stu', name: 'Stuttgart', timezone: 'Europe/Berlin', lat: 48.7758, lng: 9.1829 },
  { id: 'dus', name: 'Düsseldorf', timezone: 'Europe/Berlin', lat: 51.2277, lng: 6.7735 },
  { id: 'dor', name: 'Dortmund', timezone: 'Europe/Berlin', lat: 51.5136, lng: 7.4653 },
  { id: 'ess', name: 'Essen', timezone: 'Europe/Berlin', lat: 51.4556, lng: 7.0116 },
  { id: 'lei', name: 'Leipzig', timezone: 'Europe/Berlin', lat: 51.3397, lng: 12.3731 },

  // Italy
  { id: 'rom', name: 'Rome', timezone: 'Europe/Rome', lat: 41.9028, lng: 12.4964 },
  { id: 'mil', name: 'Milan', timezone: 'Europe/Rome', lat: 45.4642, lng: 9.1900 },
  { id: 'nap', name: 'Naples', timezone: 'Europe/Rome', lat: 40.8518, lng: 14.2681 },
  { id: 'tur', name: 'Turin', timezone: 'Europe/Rome', lat: 45.0703, lng: 7.6869 },
  { id: 'pal', name: 'Palermo', timezone: 'Europe/Rome', lat: 38.1157, lng: 13.3615 },
  { id: 'gen', name: 'Genoa', timezone: 'Europe/Rome', lat: 44.4056, lng: 8.9463 },
  { id: 'bol', name: 'Bologna', timezone: 'Europe/Rome', lat: 44.4949, lng: 11.3426 },
  { id: 'flo', name: 'Florence', timezone: 'Europe/Rome', lat: 43.7696, lng: 11.2558 },
  { id: 'cat', name: 'Catania', timezone: 'Europe/Rome', lat: 37.5079, lng: 15.0830 },
  { id: 've', name: 'Venice', timezone: 'Europe/Rome', lat: 45.4408, lng: 12.3155 },

  // Spain
  { id: 'mad', name: 'Madrid', timezone: 'Europe/Madrid', lat: 40.4168, lng: -3.7038 },
  { id: 'bar', name: 'Barcelona', timezone: 'Europe/Madrid', lat: 41.3851, lng: 2.1734 },
  { id: 'val_es', name: 'Valencia', timezone: 'Europe/Madrid', lat: 39.4699, lng: -0.3763 },
  { id: 'sev', name: 'Seville', timezone: 'Europe/Madrid', lat: 37.3891, lng: -5.9845 },
  { id: 'zar', name: 'Zaragoza', timezone: 'Europe/Madrid', lat: 41.6488, lng: -0.8891 },
  { id: 'mal', name: 'Málaga', timezone: 'Europe/Madrid', lat: 36.7213, lng: -4.4214 },
  { id: 'bil', name: 'Bilbao', timezone: 'Europe/Madrid', lat: 43.2627, lng: -2.9253 },
  { id: 'las', name: 'Las Palmas', timezone: 'Atlantic/Canary', lat: 28.1248, lng: -15.4300 },

  // Netherlands
  { id: 'ams', name: 'Amsterdam', timezone: 'Europe/Amsterdam', lat: 52.3676, lng: 4.9041 },
  { id: 'rot', name: 'Rotterdam', timezone: 'Europe/Amsterdam', lat: 51.9244, lng: 4.4777 },
  { id: 'hag', name: 'The Hague', timezone: 'Europe/Amsterdam', lat: 52.0705, lng: 4.3007 },
  { id: 'utr', name: 'Utrecht', timezone: 'Europe/Amsterdam', lat: 52.0907, lng: 5.1214 },
  { id: 'ein', name: 'Eindhoven', timezone: 'Europe/Amsterdam', lat: 51.4416, lng: 5.4697 },

  // Belgium
  { id: 'bru', name: 'Brussels', timezone: 'Europe/Brussels', lat: 50.8503, lng: 4.3517 },
  { id: 'ant', name: 'Antwerp', timezone: 'Europe/Brussels', lat: 51.2194, lng: 4.4025 },
  { id: 'ghe', name: 'Ghent', timezone: 'Europe/Brussels', lat: 51.0543, lng: 3.7174 },
  { id: 'cha_be', name: 'Charleroi', timezone: 'Europe/Brussels', lat: 50.4108, lng: 4.4446 },

  // Switzerland
  { id: 'zur', name: 'Zurich', timezone: 'Europe/Zurich', lat: 47.3769, lng: 8.5417 },
  { id: 'gen_ch', name: 'Geneva', timezone: 'Europe/Zurich', lat: 46.2044, lng: 6.1432 },
  { id: 'bas', name: 'Basel', timezone: 'Europe/Zurich', lat: 47.5596, lng: 7.5886 },
  { id: 'ber_ch', name: 'Bern', timezone: 'Europe/Zurich', lat: 46.9481, lng: 7.4474 },
  { id: 'lau', name: 'Lausanne', timezone: 'Europe/Zurich', lat: 46.5197, lng: 6.6323 },

  // Austria
  { id: 'vie', name: 'Vienna', timezone: 'Europe/Vienna', lat: 48.2082, lng: 16.3738 },
  { id: 'gra', name: 'Graz', timezone: 'Europe/Vienna', lat: 47.0707, lng: 15.4395 },
  { id: 'lin', name: 'Linz', timezone: 'Europe/Vienna', lat: 48.3069, lng: 14.2858 },
  { id: 'sal', name: 'Salzburg', timezone: 'Europe/Vienna', lat: 47.8095, lng: 13.0550 },
  { id: 'inn', name: 'Innsbruck', timezone: 'Europe/Vienna', lat: 47.2692, lng: 11.4041 },

  // Portugal
  { id: 'lis', name: 'Lisbon', timezone: 'Europe/Lisbon', lat: 38.7223, lng: -9.1393 },
  { id: 'por_pt', name: 'Porto', timezone: 'Europe/Lisbon', lat: 41.1579, lng: -8.6291 },
  { id: 'bra_pt', name: 'Braga', timezone: 'Europe/Lisbon', lat: 41.5518, lng: -8.4229 },
  { id: 'coi', name: 'Coimbra', timezone: 'Europe/Lisbon', lat: 40.2033, lng: -8.4103 },

  // Scandinavian Countries
  { id: 'sto', name: 'Stockholm', timezone: 'Europe/Stockholm', lat: 59.3293, lng: 18.0686 },
  { id: 'got', name: 'Gothenburg', timezone: 'Europe/Stockholm', lat: 57.7089, lng: 11.9746 },
  { id: 'mal_se', name: 'Malmö', timezone: 'Europe/Stockholm', lat: 55.6050, lng: 13.0038 },
  { id: 'osl', name: 'Oslo', timezone: 'Europe/Oslo', lat: 59.9139, lng: 10.7522 },
  { id: 'ber_no', name: 'Bergen', timezone: 'Europe/Oslo', lat: 60.3913, lng: 5.3221 },
  { id: 'tro', name: 'Trondheim', timezone: 'Europe/Oslo', lat: 63.4305, lng: 10.3951 },
  { id: 'cop', name: 'Copenhagen', timezone: 'Europe/Copenhagen', lat: 55.6761, lng: 12.5683 },
  { id: 'aar', name: 'Aarhus', timezone: 'Europe/Copenhagen', lat: 56.1629, lng: 10.2039 },
  { id: 'ode', name: 'Odense', timezone: 'Europe/Copenhagen', lat: 55.4038, lng: 10.4024 },
  { id: 'hel', name: 'Helsinki', timezone: 'Europe/Helsinki', lat: 60.1699, lng: 24.9384 },
  { id: 'esp', name: 'Espoo', timezone: 'Europe/Helsinki', lat: 60.2055, lng: 24.6559 },
  { id: 'tam', name: 'Tampere', timezone: 'Europe/Helsinki', lat: 61.4991, lng: 23.7871 },
  { id: 'rey', name: 'Reykjavik', timezone: 'Atlantic/Reykjavik', lat: 64.1466, lng: -21.9426 },

  // Eastern Europe
  { id: 'war', name: 'Warsaw', timezone: 'Europe/Warsaw', lat: 52.2297, lng: 21.0122 },
  { id: 'kra', name: 'Krakow', timezone: 'Europe/Warsaw', lat: 50.0647, lng: 19.9450 },
  { id: 'gda', name: 'Gdansk', timezone: 'Europe/Warsaw', lat: 54.3520, lng: 18.6466 },
  { id: 'wro', name: 'Wroclaw', timezone: 'Europe/Warsaw', lat: 51.1079, lng: 17.0385 },
  { id: 'poz', name: 'Poznan', timezone: 'Europe/Warsaw', lat: 52.4064, lng: 16.9252 },
  { id: 'pra', name: 'Prague', timezone: 'Europe/Prague', lat: 50.0755, lng: 14.4378 },
  { id: 'brn', name: 'Brno', timezone: 'Europe/Prague', lat: 49.1951, lng: 16.6068 },
  { id: 'bra_sk', name: 'Bratislava', timezone: 'Europe/Bratislava', lat: 48.1486, lng: 17.1077 },
  { id: 'bud', name: 'Budapest', timezone: 'Europe/Budapest', lat: 47.4979, lng: 19.0402 },
  { id: 'deb', name: 'Debrecen', timezone: 'Europe/Budapest', lat: 47.5316, lng: 21.6273 },
  { id: 'sze', name: 'Szeged', timezone: 'Europe/Budapest', lat: 46.2530, lng: 20.1414 },

  // Balkans
  { id: 'zag', name: 'Zagreb', timezone: 'Europe/Zagreb', lat: 45.8150, lng: 15.9819 },
  { id: 'spl', name: 'Split', timezone: 'Europe/Zagreb', lat: 43.5081, lng: 16.4402 },
  { id: 'bel', name: 'Belgrade', timezone: 'Europe/Belgrade', lat: 44.7866, lng: 20.4489 },
  { id: 'nov', name: 'Novi Sad', timezone: 'Europe/Belgrade', lat: 45.2671, lng: 19.8335 },
  { id: 'sar', name: 'Sarajevo', timezone: 'Europe/Sarajevo', lat: 43.8563, lng: 18.4131 },
  { id: 'pod', name: 'Podgorica', timezone: 'Europe/Podgorica', lat: 42.4411, lng: 19.2636 },
  { id: 'sko', name: 'Skopje', timezone: 'Europe/Skopje', lat: 41.9973, lng: 21.4280 },
  { id: 'tir', name: 'Tirana', timezone: 'Europe/Tirane', lat: 41.3275, lng: 19.8187 },
  { id: 'lju', name: 'Ljubljana', timezone: 'Europe/Ljubljana', lat: 46.0569, lng: 14.5058 },

  // Romania & Bulgaria
  { id: 'buc', name: 'Bucharest', timezone: 'Europe/Bucharest', lat: 44.4268, lng: 26.1025 },
  { id: 'clu', name: 'Cluj-Napoca', timezone: 'Europe/Bucharest', lat: 46.7712, lng: 23.6236 },
  { id: 'tim', name: 'Timisoara', timezone: 'Europe/Bucharest', lat: 45.7489, lng: 21.2087 },
  { id: 'sof', name: 'Sofia', timezone: 'Europe/Sofia', lat: 42.6977, lng: 23.3219 },
  { id: 'plo', name: 'Plovdiv', timezone: 'Europe/Sofia', lat: 42.1354, lng: 24.7453 },
  { id: 'var', name: 'Varna', timezone: 'Europe/Sofia', lat: 43.2141, lng: 27.9147 },

  // Greece & Cyprus
  { id: 'ath', name: 'Athens', timezone: 'Europe/Athens', lat: 37.9755, lng: 23.7348 },
  { id: 'the', name: 'Thessaloniki', timezone: 'Europe/Athens', lat: 40.6401, lng: 22.9444 },
  { id: 'pat', name: 'Patras', timezone: 'Europe/Athens', lat: 38.2466, lng: 21.7346 },
  { id: 'nic_cy', name: 'Nicosia', timezone: 'Europe/Nicosia', lat: 35.1856, lng: 33.3823 },
  { id: 'lim_cy', name: 'Limassol', timezone: 'Europe/Nicosia', lat: 34.6851, lng: 33.0432 },

  // Russia
  { id: 'mos', name: 'Moscow', timezone: 'Europe/Moscow', lat: 55.7558, lng: 37.6176 },
  { id: 'spb', name: 'St. Petersburg', timezone: 'Europe/Moscow', lat: 59.9311, lng: 30.3609 },
  { id: 'niz', name: 'Nizhny Novgorod', timezone: 'Europe/Moscow', lat: 56.2965, lng: 43.9361 },
  { id: 'eka', name: 'Yekaterinburg', timezone: 'Asia/Yekaterinburg', lat: 56.8431, lng: 60.6454 },
  { id: 'nov', name: 'Novosibirsk', timezone: 'Asia/Novosibirsk', lat: 55.0084, lng: 82.9357 },
  { id: 'sam', name: 'Samara', timezone: 'Europe/Samara', lat: 53.2001, lng: 50.1500 },
  { id: 'omsk', name: 'Omsk', timezone: 'Asia/Omsk', lat: 54.9885, lng: 73.3242 },
  { id: 'kaz', name: 'Kazan', timezone: 'Europe/Moscow', lat: 55.8304, lng: 49.0661 },
  { id: 'ros', name: 'Rostov-on-Don', timezone: 'Europe/Moscow', lat: 47.2357, lng: 39.7015 },
  { id: 'ufa', name: 'Ufa', timezone: 'Asia/Yekaterinburg', lat: 54.7388, lng: 55.9721 },
  { id: 'kra', name: 'Krasnoyarsk', timezone: 'Asia/Krasnoyarsk', lat: 56.0184, lng: 92.8672 },
  { id: 'per', name: 'Perm', timezone: 'Asia/Yekaterinburg', lat: 58.0105, lng: 56.2502 },
  { id: 'vol', name: 'Volgograd', timezone: 'Europe/Volgograd', lat: 48.7080, lng: 44.5133 },
  { id: 'vor', name: 'Voronezh', timezone: 'Europe/Moscow', lat: 51.6720, lng: 39.1843 },
  { id: 'sar', name: 'Saratov', timezone: 'Europe/Saratov', lat: 51.5924, lng: 46.0348 },
  { id: 'tol', name: 'Tolyatti', timezone: 'Europe/Samara', lat: 53.5303, lng: 49.3461 },
  { id: 'irk', name: 'Irkutsk', timezone: 'Asia/Irkutsk', lat: 52.2978, lng: 104.2964 },
  { id: 'yar', name: 'Yaroslavl', timezone: 'Europe/Moscow', lat: 57.6261, lng: 39.8845 },
  { id: 'uly', name: 'Ulyanovsk', timezone: 'Europe/Ulyanovsk', lat: 54.3142, lng: 48.4031 },
  { id: 'bar', name: 'Barnaul', timezone: 'Asia/Barnaul', lat: 53.3606, lng: 83.7636 },
  { id: 'vla', name: 'Vladivostok', timezone: 'Asia/Vladivostok', lat: 43.1056, lng: 131.8735 },
  { id: 'iru', name: 'Irkutsk', timezone: 'Asia/Irkutsk', lat: 52.2978, lng: 104.2964 },
  { id: 'hab', name: 'Khabarovsk', timezone: 'Asia/Vladivostok', lat: 48.4827, lng: 135.0839 },
  { id: 'yak', name: 'Yakutsk', timezone: 'Asia/Yakutsk', lat: 62.0355, lng: 129.6755 },

  // Baltic States
  { id: 'vil', name: 'Vilnius', timezone: 'Europe/Vilnius', lat: 54.6872, lng: 25.2797 },
  { id: 'kau', name: 'Kaunas', timezone: 'Europe/Vilnius', lat: 54.8985, lng: 23.9036 },
  { id: 'rig', name: 'Riga', timezone: 'Europe/Riga', lat: 56.9496, lng: 24.1052 },
  { id: 'dau', name: 'Daugavpils', timezone: 'Europe/Riga', lat: 55.8745, lng: 26.5422 },
  { id: 'tal', name: 'Tallinn', timezone: 'Europe/Tallinn', lat: 59.4370, lng: 24.7536 },
  { id: 'tar', name: 'Tartu', timezone: 'Europe/Tallinn', lat: 58.3776, lng: 26.7290 },

  // Belarus & Ukraine
  { id: 'min', name: 'Minsk', timezone: 'Europe/Minsk', lat: 53.9045, lng: 27.5615 },
  { id: 'gom', name: 'Gomel', timezone: 'Europe/Minsk', lat: 52.4345, lng: 30.9754 },
  { id: 'kie', name: 'Kiev', timezone: 'Europe/Kiev', lat: 50.4501, lng: 30.5234 },
  { id: 'kha', name: 'Kharkiv', timezone: 'Europe/Kiev', lat: 49.9935, lng: 36.2304 },
  { id: 'ode', name: 'Odessa', timezone: 'Europe/Kiev', lat: 46.4825, lng: 30.7233 },
  { id: 'dni', name: 'Dnipro', timezone: 'Europe/Kiev', lat: 48.4647, lng: 35.0462 },
  { id: 'don', name: 'Donetsk', timezone: 'Europe/Kiev', lat: 48.0159, lng: 37.8034 },
  { id: 'zap', name: 'Zaporizhzhia', timezone: 'Europe/Kiev', lat: 47.8388, lng: 35.1396 },
  { id: 'lvi', name: 'Lviv', timezone: 'Europe/Kiev', lat: 49.8397, lng: 24.0297 },

  // Moldova
  { id: 'chi', name: 'Chisinau', timezone: 'Europe/Chisinau', lat: 47.0105, lng: 28.8638 },

  // Turkey
  { id: 'ist', name: 'Istanbul', timezone: 'Europe/Istanbul', lat: 41.0082, lng: 28.9784 },
  { id: 'ank', name: 'Ankara', timezone: 'Europe/Istanbul', lat: 39.9334, lng: 32.8597 },
  { id: 'izm', name: 'Izmir', timezone: 'Europe/Istanbul', lat: 38.4192, lng: 27.1287 },
  { id: 'bur', name: 'Bursa', timezone: 'Europe/Istanbul', lat: 40.1826, lng: 29.0665 },
  { id: 'ada', name: 'Adana', timezone: 'Europe/Istanbul', lat: 37.0000, lng: 35.3213 },
  { id: 'gaz', name: 'Gaziantep', timezone: 'Europe/Istanbul', lat: 37.0662, lng: 37.3833 },
  { id: 'kon', name: 'Konya', timezone: 'Europe/Istanbul', lat: 37.8713, lng: 32.4846 },

  // ========== ASIA ==========
  
  // Japan
  { id: 'tok', name: 'Tokyo', timezone: 'Asia/Tokyo', lat: 35.6895, lng: 139.6917 },
  { id: 'osa', name: 'Osaka', timezone: 'Asia/Tokyo', lat: 34.6937, lng: 135.5023 },
  { id: 'yok', name: 'Yokohama', timezone: 'Asia/Tokyo', lat: 35.4437, lng: 139.6380 },
  { id: 'nag', name: 'Nagoya', timezone: 'Asia/Tokyo', lat: 35.1815, lng: 136.9066 },
  { id: 'sap', name: 'Sapporo', timezone: 'Asia/Tokyo', lat: 43.0642, lng: 141.3469 },
  { id: 'kob', name: 'Kobe', timezone: 'Asia/Tokyo', lat: 34.6901, lng: 135.1956 },
  { id: 'kyo', name: 'Kyoto', timezone: 'Asia/Tokyo', lat: 35.0116, lng: 135.7681 },
  { id: 'fuk', name: 'Fukuoka', timezone: 'Asia/Tokyo', lat: 33.5904, lng: 130.4017 },
  { id: 'sen', name: 'Sendai', timezone: 'Asia/Tokyo', lat: 38.2682, lng: 140.8694 },
  { id: 'hir', name: 'Hiroshima', timezone: 'Asia/Tokyo', lat: 34.3853, lng: 132.4553 },

  // China
  { id: 'bei', name: 'Beijing', timezone: 'Asia/Shanghai', lat: 39.9042, lng: 116.4074 },
  { id: 'sha', name: 'Shanghai', timezone: 'Asia/Shanghai', lat: 31.2304, lng: 121.4737 },
  { id: 'gua', name: 'Guangzhou', timezone: 'Asia/Shanghai', lat: 23.1291, lng: 113.2644 },
  { id: 'she', name: 'Shenzhen', timezone: 'Asia/Shanghai', lat: 22.5431, lng: 114.0579 },
  { id: 'tia', name: 'Tianjin', timezone: 'Asia/Shanghai', lat: 39.3434, lng: 117.3616 },
  { id: 'wuh', name: 'Wuhan', timezone: 'Asia/Shanghai', lat: 30.5928, lng: 114.3055 },
  { id: 'don', name: 'Dongguan', timezone: 'Asia/Shanghai', lat: 23.0489, lng: 113.7447 },
  { id: 'che', name: 'Chengdu', timezone: 'Asia/Shanghai', lat: 30.5728, lng: 104.0668 },
  { id: 'nan', name: 'Nanjing', timezone: 'Asia/Shanghai', lat: 32.0603, lng: 118.7969 },
  { id: 'xi', name: 'Xi\'an', timezone: 'Asia/Shanghai', lat: 34.3416, lng: 108.9398 },
  { id: 'han', name: 'Hangzhou', timezone: 'Asia/Shanghai', lat: 30.2741, lng: 120.1551 },
  { id: 'fos', name: 'Foshan', timezone: 'Asia/Shanghai', lat: 23.0218, lng: 113.1219 },
  { id: 'shen', name: 'Shenyang', timezone: 'Asia/Shanghai', lat: 41.8057, lng: 123.4315 },
  { id: 'har', name: 'Harbin', timezone: 'Asia/Shanghai', lat: 45.8038, lng: 126.5349 },
  { id: 'sue', name: 'Suzhou', timezone: 'Asia/Shanghai', lat: 31.2989, lng: 120.5853 },
  { id: 'dal', name: 'Dalian', timezone: 'Asia/Shanghai', lat: 38.9140, lng: 121.6147 },
  { id: 'qin', name: 'Qingdao', timezone: 'Asia/Shanghai', lat: 36.0986, lng: 120.3719 },
  { id: 'zheng', name: 'Zhengzhou', timezone: 'Asia/Shanghai', lat: 34.7466, lng: 113.6253 },
  { id: 'jinan', name: 'Jinan', timezone: 'Asia/Shanghai', lat: 36.6512, lng: 117.1201 },
  { id: 'kun', name: 'Kunming', timezone: 'Asia/Shanghai', lat: 25.0389, lng: 102.7183 },
  { id: 'chang', name: 'Changchun', timezone: 'Asia/Shanghai', lat: 43.8171, lng: 125.3235 },
  { id: 'uru', name: 'Urumqi', timezone: 'Asia/Urumqi', lat: 43.8256, lng: 87.6168 },

  // Hong Kong & Macau & Taiwan
  { id: 'hk', name: 'Hong Kong', timezone: 'Asia/Hong_Kong', lat: 22.3193, lng: 114.1694 },
  { id: 'mac', name: 'Macau', timezone: 'Asia/Macau', lat: 22.1987, lng: 113.5439 },
  { id: 'tai', name: 'Taipei', timezone: 'Asia/Taipei', lat: 25.0330, lng: 121.5654 },
  { id: 'kao', name: 'Kaohsiung', timezone: 'Asia/Taipei', lat: 22.6273, lng: 120.3014 },
  { id: 'taic', name: 'Taichung', timezone: 'Asia/Taipei', lat: 24.1477, lng: 120.6736 },
  { id: 'tain', name: 'Tainan', timezone: 'Asia/Taipei', lat: 22.9999, lng: 120.2269 },

  // South Korea
  { id: 'seo', name: 'Seoul', timezone: 'Asia/Seoul', lat: 37.5665, lng: 126.9780 },
  { id: 'bus', name: 'Busan', timezone: 'Asia/Seoul', lat: 35.1796, lng: 129.0756 },
  { id: 'inc', name: 'Incheon', timezone: 'Asia/Seoul', lat: 37.4563, lng: 126.7052 },
  { id: 'dae', name: 'Daegu', timezone: 'Asia/Seoul', lat: 35.8714, lng: 128.6014 },
  { id: 'daj', name: 'Daejeon', timezone: 'Asia/Seoul', lat: 36.3504, lng: 127.3845 },
  { id: 'gwa', name: 'Gwangju', timezone: 'Asia/Seoul', lat: 35.1595, lng: 126.8526 },
  { id: 'suw', name: 'Suwon', timezone: 'Asia/Seoul', lat: 37.2636, lng: 127.0286 },
  { id: 'ulsan', name: 'Ulsan', timezone: 'Asia/Seoul', lat: 35.5384, lng: 129.3114 },

  // North Korea
  { id: 'pyo', name: 'Pyongyang', timezone: 'Asia/Pyongyang', lat: 39.0392, lng: 125.7625 },

  // Mongolia
  { id: 'ulaanbaatar', name: 'Ulaanbaatar', timezone: 'Asia/Ulaanbaatar', lat: 47.8864, lng: 106.9057 },
  { id: 'darkhan', name: 'Darkhan', timezone: 'Asia/Ulaanbaatar', lat: 49.4869, lng: 105.9228 },
  { id: 'erdenet', name: 'Erdenet', timezone: 'Asia/Ulaanbaatar', lat: 49.0347, lng: 104.0861 },

  // Southeast Asia
  
  // Thailand
  { id: 'bkk', name: 'Bangkok', timezone: 'Asia/Bangkok', lat: 13.7563, lng: 100.5018 },
  { id: 'cm', name: 'Chiang Mai', timezone: 'Asia/Bangkok', lat: 18.7883, lng: 98.9853 },
  { id: 'hat', name: 'Hat Yai', timezone: 'Asia/Bangkok', lat: 7.0167, lng: 100.4833 },
  { id: 'kho', name: 'Khon Kaen', timezone: 'Asia/Bangkok', lat: 16.4419, lng: 102.8359 },
  { id: 'nak', name: 'Nakhon Ratchasima', timezone: 'Asia/Bangkok', lat: 14.9799, lng: 102.0977 },

  // Vietnam
  { id: 'hcm', name: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', lat: 10.8231, lng: 106.6297 },
  { id: 'han_vn', name: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', lat: 21.0285, lng: 105.8542 },
  { id: 'da', name: 'Da Nang', timezone: 'Asia/Ho_Chi_Minh', lat: 16.0544, lng: 108.2022 },
  { id: 'hai', name: 'Haiphong', timezone: 'Asia/Ho_Chi_Minh', lat: 20.8449, lng: 106.6881 },
  { id: 'can', name: 'Can Tho', timezone: 'Asia/Ho_Chi_Minh', lat: 10.0452, lng: 105.7469 },

  // Cambodia
  { id: 'pp', name: 'Phnom Penh', timezone: 'Asia/Phnom_Penh', lat: 11.5564, lng: 104.9282 },
  { id: 'sr', name: 'Siem Reap', timezone: 'Asia/Phnom_Penh', lat: 13.3671, lng: 103.8448 },
  { id: 'bat', name: 'Battambang', timezone: 'Asia/Phnom_Penh', lat: 13.0957, lng: 103.2027 },

  // Laos
  { id: 'vie_la', name: 'Vientiane', timezone: 'Asia/Vientiane', lat: 17.9757, lng: 102.6331 },
  { id: 'lp_la', name: 'Luang Prabang', timezone: 'Asia/Vientiane', lat: 19.8845, lng: 102.1348 },

  // Myanmar
  { id: 'yan', name: 'Yangon', timezone: 'Asia/Yangon', lat: 16.8661, lng: 96.1951 },
  { id: 'nay', name: 'Naypyidaw', timezone: 'Asia/Yangon', lat: 19.7633, lng: 96.0785 },
  { id: 'man_mm', name: 'Mandalay', timezone: 'Asia/Yangon', lat: 21.9588, lng: 96.0891 },

  // Malaysia
  { id: 'kul', name: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', lat: 3.1390, lng: 101.6869 },
  { id: 'jb', name: 'Johor Bahru', timezone: 'Asia/Kuala_Lumpur', lat: 1.4927, lng: 103.7414 },
  { id: 'ip', name: 'Ipoh', timezone: 'Asia/Kuala_Lumpur', lat: 4.5975, lng: 101.0901 },
  { id: 'kuc', name: 'Kuching', timezone: 'Asia/Kuching', lat: 1.5535, lng: 110.3593 },
  { id: 'pen', name: 'Penang', timezone: 'Asia/Kuala_Lumpur', lat: 5.4164, lng: 100.3327 },

  // Singapore
  { id: 'sin', name: 'Singapore', timezone: 'Asia/Singapore', lat: 1.3521, lng: 103.8198 },

  // Indonesia
  { id: 'jkt', name: 'Jakarta', timezone: 'Asia/Jakarta', lat: -6.2088, lng: 106.8456 },
  { id: 'sur', name: 'Surabaya', timezone: 'Asia/Jakarta', lat: -7.2575, lng: 112.7521 },
  { id: 'ban', name: 'Bandung', timezone: 'Asia/Jakarta', lat: -6.9175, lng: 107.6191 },
  { id: 'med', name: 'Medan', timezone: 'Asia/Jakarta', lat: 3.5952, lng: 98.6722 },
  { id: 'pal', name: 'Palembang', timezone: 'Asia/Jakarta', lat: -2.9761, lng: 104.7754 },
  { id: 'mak', name: 'Makassar', timezone: 'Asia/Makassar', lat: -5.1477, lng: 119.4327 },
  { id: 'den', name: 'Denpasar', timezone: 'Asia/Makassar', lat: -8.6705, lng: 115.2126 },
  { id: 'yog', name: 'Yogyakarta', timezone: 'Asia/Jakarta', lat: -7.7956, lng: 110.3695 },

  // Philippines
  { id: 'man_ph', name: 'Manila', timezone: 'Asia/Manila', lat: 14.5995, lng: 120.9842 },
  { id: 'ceb', name: 'Cebu City', timezone: 'Asia/Manila', lat: 10.3157, lng: 123.8854 },
  { id: 'dav', name: 'Davao City', timezone: 'Asia/Manila', lat: 7.1907, lng: 125.4553 },
  { id: 'que', name: 'Quezon City', timezone: 'Asia/Manila', lat: 14.6760, lng: 121.0437 },
  { id: 'zam', name: 'Zamboanga City', timezone: 'Asia/Manila', lat: 6.9214, lng: 122.0790 },

  // Brunei
  { id: 'bsb', name: 'Bandar Seri Begawan', timezone: 'Asia/Brunei', lat: 4.9031, lng: 114.9398 },

  // ========== SOUTH ASIA ==========
  
  // India
  { id: 'mum', name: 'Mumbai', timezone: 'Asia/Kolkata', lat: 19.0760, lng: 72.8777 },
  { id: 'del', name: 'Delhi', timezone: 'Asia/Kolkata', lat: 28.7041, lng: 77.1025 },
  { id: 'ban_in', name: 'Bangalore', timezone: 'Asia/Kolkata', lat: 12.9716, lng: 77.5946 },
  { id: 'hyd', name: 'Hyderabad', timezone: 'Asia/Kolkata', lat: 17.3850, lng: 78.4867 },
  { id: 'che_in', name: 'Chennai', timezone: 'Asia/Kolkata', lat: 13.0827, lng: 80.2707 },
  { id: 'kol', name: 'Kolkata', timezone: 'Asia/Kolkata', lat: 22.5726, lng: 88.3639 },
  { id: 'pun', name: 'Pune', timezone: 'Asia/Kolkata', lat: 18.5204, lng: 73.8567 },
  { id: 'ahm', name: 'Ahmedabad', timezone: 'Asia/Kolkata', lat: 23.0225, lng: 72.5714 },
  { id: 'jaipur', name: 'Jaipur', timezone: 'Asia/Kolkata', lat: 26.9124, lng: 75.7873 },
  { id: 'sur_in', name: 'Surat', timezone: 'Asia/Kolkata', lat: 21.1702, lng: 72.8311 },
  { id: 'luc', name: 'Lucknow', timezone: 'Asia/Kolkata', lat: 26.8467, lng: 80.9462 },
  { id: 'kan', name: 'Kanpur', timezone: 'Asia/Kolkata', lat: 26.4499, lng: 80.3319 },
  { id: 'nag_in', name: 'Nagpur', timezone: 'Asia/Kolkata', lat: 21.1458, lng: 79.0882 },
  { id: 'ind_in', name: 'Indore', timezone: 'Asia/Kolkata', lat: 22.7196, lng: 75.8577 },
  { id: 'thi', name: 'Thiruvananthapuram', timezone: 'Asia/Kolkata', lat: 8.5241, lng: 76.9366 },
  { id: 'bho', name: 'Bhopal', timezone: 'Asia/Kolkata', lat: 23.2599, lng: 77.4126 },
  { id: 'vis', name: 'Visakhapatnam', timezone: 'Asia/Kolkata', lat: 17.6868, lng: 83.2185 },
  { id: 'pat_in', name: 'Patna', timezone: 'Asia/Kolkata', lat: 25.5941, lng: 85.1376 },
  { id: 'lud', name: 'Ludhiana', timezone: 'Asia/Kolkata', lat: 30.9010, lng: 75.8573 },
  { id: 'agr', name: 'Agra', timezone: 'Asia/Kolkata', lat: 27.1767, lng: 78.0081 },

  // Pakistan
  { id: 'kar', name: 'Karachi', timezone: 'Asia/Karachi', lat: 24.8607, lng: 67.0011 },
  { id: 'lah', name: 'Lahore', timezone: 'Asia/Karachi', lat: 31.5204, lng: 74.3587 },
  { id: 'fai', name: 'Faisalabad', timezone: 'Asia/Karachi', lat: 31.4504, lng: 73.1350 },
  { id: 'raw', name: 'Rawalpindi', timezone: 'Asia/Karachi', lat: 33.5651, lng: 73.0169 },
  { id: 'guj', name: 'Gujranwala', timezone: 'Asia/Karachi', lat: 32.1877, lng: 74.1945 },
  { id: 'pes', name: 'Peshawar', timezone: 'Asia/Karachi', lat: 34.0151, lng: 71.5249 },
  { id: 'mul', name: 'Multan', timezone: 'Asia/Karachi', lat: 30.1575, lng: 71.5249 },
  { id: 'isl', name: 'Islamabad', timezone: 'Asia/Karachi', lat: 33.6844, lng: 73.0479 },
  { id: 'que_pk', name: 'Quetta', timezone: 'Asia/Karachi', lat: 30.1798, lng: 66.9750 },
  { id: 'sil', name: 'Sialkot', timezone: 'Asia/Karachi', lat: 32.4945, lng: 74.5229 },

  // Bangladesh
  { id: 'dha', name: 'Dhaka', timezone: 'Asia/Dhaka', lat: 23.8103, lng: 90.4125 },
  { id: 'chi_bd', name: 'Chittagong', timezone: 'Asia/Dhaka', lat: 22.3569, lng: 91.7832 },
  { id: 'khu', name: 'Khulna', timezone: 'Asia/Dhaka', lat: 22.8456, lng: 89.5403 },
  { id: 'raj', name: 'Rajshahi', timezone: 'Asia/Dhaka', lat: 24.3745, lng: 88.6042 },
  { id: 'syl', name: 'Sylhet', timezone: 'Asia/Dhaka', lat: 24.8949, lng: 91.8687 },

  // Sri Lanka
  { id: 'col_lk', name: 'Colombo', timezone: 'Asia/Colombo', lat: 6.9271, lng: 79.8612 },
  { id: 'kan_lk', name: 'Kandy', timezone: 'Asia/Colombo', lat: 7.2906, lng: 80.6337 },
  { id: 'gal', name: 'Galle', timezone: 'Asia/Colombo', lat: 6.0535, lng: 80.2210 },

  // Nepal
  { id: 'kat', name: 'Kathmandu', timezone: 'Asia/Kathmandu', lat: 27.7172, lng: 85.3240 },
  { id: 'pok', name: 'Pokhara', timezone: 'Asia/Kathmandu', lat: 28.2096, lng: 83.9856 },
  { id: 'bir_np', name: 'Biratnagar', timezone: 'Asia/Kathmandu', lat: 26.4525, lng: 87.2718 },

  // Bhutan
  { id: 'thi_bt', name: 'Thimphu', timezone: 'Asia/Thimphu', lat: 27.4728, lng: 89.6390 },

  // Maldives
  { id: 'mal_mv', name: 'Malé', timezone: 'Indian/Maldives', lat: 4.1755, lng: 73.5093 },

  // ========== MIDDLE EAST ==========
  
  // United Arab Emirates
  { id: 'dub', name: 'Dubai', timezone: 'Asia/Dubai', lat: 25.2048, lng: 55.2708 },
  { id: 'abu', name: 'Abu Dhabi', timezone: 'Asia/Dubai', lat: 24.4539, lng: 54.3773 },
  { id: 'sha_ae', name: 'Sharjah', timezone: 'Asia/Dubai', lat: 25.3548, lng: 55.4033 },
  { id: 'ajm', name: 'Ajman', timezone: 'Asia/Dubai', lat: 25.4052, lng: 55.5136 },

  // Saudi Arabia
  { id: 'riy', name: 'Riyadh', timezone: 'Asia/Riyadh', lat: 24.7136, lng: 46.6753 },
  { id: 'jed', name: 'Jeddah', timezone: 'Asia/Riyadh', lat: 21.4858, lng: 39.1925 },
  { id: 'mec', name: 'Mecca', timezone: 'Asia/Riyadh', lat: 21.3891, lng: 39.8579 },
  { id: 'med_sa', name: 'Medina', timezone: 'Asia/Riyadh', lat: 24.5247, lng: 39.5692 },
  { id: 'dam_sa', name: 'Dammam', timezone: 'Asia/Riyadh', lat: 26.4282, lng: 50.1016 },

  // Iran
  { id: 'teh', name: 'Tehran', timezone: 'Asia/Tehran', lat: 35.6892, lng: 51.3890 },
  { id: 'mas', name: 'Mashhad', timezone: 'Asia/Tehran', lat: 36.2605, lng: 59.6168 },
  { id: 'isf', name: 'Isfahan', timezone: 'Asia/Tehran', lat: 32.6546, lng: 51.6680 },
  { id: 'tab', name: 'Tabriz', timezone: 'Asia/Tehran', lat: 38.0804, lng: 46.2919 },
  { id: 'kara', name: 'Karaj', timezone: 'Asia/Tehran', lat: 35.8327, lng: 50.9916 },
  { id: 'shi', name: 'Shiraz', timezone: 'Asia/Tehran', lat: 29.5918, lng: 52.5837 },

  // Iraq
  { id: 'bag', name: 'Baghdad', timezone: 'Asia/Baghdad', lat: 33.3152, lng: 44.3661 },
  { id: 'bas_iq', name: 'Basra', timezone: 'Asia/Baghdad', lat: 30.5085, lng: 47.7804 },
  { id: 'mos_iq', name: 'Mosul', timezone: 'Asia/Baghdad', lat: 36.3350, lng: 43.1189 },

  // Kuwait
  { id: 'kuw', name: 'Kuwait City', timezone: 'Asia/Kuwait', lat: 29.3759, lng: 47.9774 },

  // Qatar
  { id: 'doh', name: 'Doha', timezone: 'Asia/Qatar', lat: 25.2854, lng: 51.5310 },

  // Bahrain
  { id: 'man_bh', name: 'Manama', timezone: 'Asia/Bahrain', lat: 26.0667, lng: 50.5577 },

  // Oman
  { id: 'mus', name: 'Muscat', timezone: 'Asia/Muscat', lat: 23.5859, lng: 58.4059 },

  // Yemen
  { id: 'san_ye', name: 'Sanaa', timezone: 'Asia/Aden', lat: 15.3694, lng: 44.1910 },
  { id: 'ade', name: 'Aden', timezone: 'Asia/Aden', lat: 12.7794, lng: 45.0367 },

  // Syria
  { id: 'dam', name: 'Damascus', timezone: 'Asia/Damascus', lat: 33.5138, lng: 36.2765 },
  { id: 'ale', name: 'Aleppo', timezone: 'Asia/Damascus', lat: 36.2021, lng: 37.1343 },

  // Lebanon
  { id: 'bei_lb', name: 'Beirut', timezone: 'Asia/Beirut', lat: 33.8938, lng: 35.5018 },

  // Jordan
  { id: 'amm', name: 'Amman', timezone: 'Asia/Amman', lat: 31.9454, lng: 35.9284 },

  // Israel & Palestine
  { id: 'jer', name: 'Jerusalem', timezone: 'Asia/Jerusalem', lat: 31.7683, lng: 35.2137 },
  { id: 'tel', name: 'Tel Aviv', timezone: 'Asia/Jerusalem', lat: 32.0853, lng: 34.7818 },

  // Cyprus
  { id: 'nic_cy', name: 'Nicosia', timezone: 'Asia/Nicosia', lat: 35.1856, lng: 33.3823 },
  { id: 'lim_cy', name: 'Limassol', timezone: 'Asia/Nicosia', lat: 34.6851, lng: 33.0432 },

  // ========== CENTRAL ASIA ==========
  
  // Kazakhstan
  { id: 'alm', name: 'Almaty', timezone: 'Asia/Almaty', lat: 43.2220, lng: 76.8512 },
  { id: 'nur', name: 'Nur-Sultan', timezone: 'Asia/Almaty', lat: 51.1694, lng: 71.4491 },
  { id: 'shi_kz', name: 'Shymkent', timezone: 'Asia/Almaty', lat: 42.3417, lng: 69.5901 },

  // Uzbekistan
  { id: 'tas', name: 'Tashkent', timezone: 'Asia/Tashkent', lat: 41.2995, lng: 69.2401 },
  { id: 'sam_uz', name: 'Samarkand', timezone: 'Asia/Samarkand', lat: 39.6270, lng: 66.9750 },

  // Turkmenistan
  { id: 'ash', name: 'Ashgabat', timezone: 'Asia/Ashgabat', lat: 37.9601, lng: 58.3261 },

  // Tajikistan
  { id: 'dus_tj', name: 'Dushanbe', timezone: 'Asia/Dushanbe', lat: 38.5598, lng: 68.7870 },

  // Kyrgyzstan
  { id: 'bis', name: 'Bishkek', timezone: 'Asia/Bishkek', lat: 42.8746, lng: 74.5698 },

  // Afghanistan
  { id: 'kab', name: 'Kabul', timezone: 'Asia/Kabul', lat: 34.5553, lng: 69.2075 },

  // ========== AFRICA ==========
  
  // Egypt
  { id: 'cai', name: 'Cairo', timezone: 'Africa/Cairo', lat: 30.0444, lng: 31.2357 },
  { id: 'ale_eg', name: 'Alexandria', timezone: 'Africa/Cairo', lat: 31.2001, lng: 29.9187 },
  { id: 'giz', name: 'Giza', timezone: 'Africa/Cairo', lat: 30.0131, lng: 31.2089 },

  // Nigeria
  { id: 'lag', name: 'Lagos', timezone: 'Africa/Lagos', lat: 6.5244, lng: 3.3792 },
  { id: 'abu_ng', name: 'Abuja', timezone: 'Africa/Lagos', lat: 9.0579, lng: 7.4951 },
  { id: 'kan_ng', name: 'Kano', timezone: 'Africa/Lagos', lat: 12.0022, lng: 8.5920 },
  { id: 'iba', name: 'Ibadan', timezone: 'Africa/Lagos', lat: 7.3775, lng: 3.9470 },

  // South Africa
  { id: 'joh', name: 'Johannesburg', timezone: 'Africa/Johannesburg', lat: -26.2041, lng: 28.0473 },
  { id: 'cap', name: 'Cape Town', timezone: 'Africa/Johannesburg', lat: -33.9249, lng: 18.4241 },
  { id: 'dur', name: 'Durban', timezone: 'Africa/Johannesburg', lat: -29.8587, lng: 31.0218 },
  { id: 'pre', name: 'Pretoria', timezone: 'Africa/Johannesburg', lat: -25.7479, lng: 28.2293 },

  // Morocco
  { id: 'cas', name: 'Casablanca', timezone: 'Africa/Casablanca', lat: 33.5731, lng: -7.5898 },
  { id: 'rab', name: 'Rabat', timezone: 'Africa/Casablanca', lat: 34.0209, lng: -6.8416 },
  { id: 'mar', name: 'Marrakech', timezone: 'Africa/Casablanca', lat: 31.6295, lng: -7.9811 },
  { id: 'fez', name: 'Fez', timezone: 'Africa/Casablanca', lat: 34.0181, lng: -5.0078 },

  // Algeria
  { id: 'alg', name: 'Algiers', timezone: 'Africa/Algiers', lat: 36.7538, lng: 3.0588 },
  { id: 'ora', name: 'Oran', timezone: 'Africa/Algiers', lat: 35.6911, lng: -0.6417 },

  // Tunisia
  { id: 'tun', name: 'Tunis', timezone: 'Africa/Tunis', lat: 36.8065, lng: 10.1815 },

  // Libya
  { id: 'tri', name: 'Tripoli', timezone: 'Africa/Tripoli', lat: 32.8872, lng: 13.1913 },
  { id: 'ben', name: 'Benghazi', timezone: 'Africa/Tripoli', lat: 32.1167, lng: 20.0683 },

  // Sudan
  { id: 'kha_sd', name: 'Khartoum', timezone: 'Africa/Khartoum', lat: 15.5007, lng: 32.5599 },

  // Ethiopia
  { id: 'add', name: 'Addis Ababa', timezone: 'Africa/Addis_Ababa', lat: 9.1450, lng: 40.4897 },

  // Kenya
  { id: 'nai', name: 'Nairobi', timezone: 'Africa/Nairobi', lat: -1.2921, lng: 36.8219 },
  { id: 'mom', name: 'Mombasa', timezone: 'Africa/Nairobi', lat: -4.0435, lng: 39.6682 },

  // Tanzania
  { id: 'dar', name: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', lat: -6.7924, lng: 39.2083 },

  // Uganda
  { id: 'kam', name: 'Kampala', timezone: 'Africa/Kampala', lat: 0.3476, lng: 32.5825 },

  // Ghana
  { id: 'acc', name: 'Accra', timezone: 'Africa/Accra', lat: 5.6037, lng: -0.1870 },

  // Ivory Coast
  { id: 'abi', name: 'Abidjan', timezone: 'Africa/Abidjan', lat: 5.3600, lng: -4.0083 },

  // Senegal
  { id: 'dak', name: 'Dakar', timezone: 'Africa/Dakar', lat: 14.7167, lng: -17.4677 },

  // Angola
  { id: 'lua', name: 'Luanda', timezone: 'Africa/Luanda', lat: -8.8390, lng: 13.2894 },

  // Zimbabwe
  { id: 'har_zw', name: 'Harare', timezone: 'Africa/Harare', lat: -17.8252, lng: 31.0335 },

  // Zambia
  { id: 'lus', name: 'Lusaka', timezone: 'Africa/Lusaka', lat: -15.3875, lng: 28.3228 },

  // Mozambique
  { id: 'map', name: 'Maputo', timezone: 'Africa/Maputo', lat: -25.9655, lng: 32.5832 },

  // Madagascar
  { id: 'ant', name: 'Antananarivo', timezone: 'Indian/Antananarivo', lat: -18.8792, lng: 47.5079 },

  // ========== OCEANIA ==========
  
  // Australia
  { id: 'syd', name: 'Sydney', timezone: 'Australia/Sydney', lat: -33.8688, lng: 151.2093 },
  { id: 'mel', name: 'Melbourne', timezone: 'Australia/Melbourne', lat: -37.8136, lng: 144.9631 },
  { id: 'bri_au', name: 'Brisbane', timezone: 'Australia/Brisbane', lat: -27.4698, lng: 153.0251 },
  { id: 'per', name: 'Perth', timezone: 'Australia/Perth', lat: -31.9505, lng: 115.8605 },
  { id: 'ade', name: 'Adelaide', timezone: 'Australia/Adelaide', lat: -34.9285, lng: 138.6007 },
  { id: 'gol', name: 'Gold Coast', timezone: 'Australia/Brisbane', lat: -28.0167, lng: 153.4000 },
  { id: 'new', name: 'Newcastle', timezone: 'Australia/Sydney', lat: -32.9283, lng: 151.7817 },
  { id: 'can_au', name: 'Canberra', timezone: 'Australia/Sydney', lat: -35.2809, lng: 149.1300 },
  { id: 'cai_au', name: 'Cairns', timezone: 'Australia/Brisbane', lat: -16.9186, lng: 145.7781 },
  { id: 'tow', name: 'Townsville', timezone: 'Australia/Brisbane', lat: -19.2590, lng: 146.8169 },
  { id: 'dar_au', name: 'Darwin', timezone: 'Australia/Darwin', lat: -12.4634, lng: 130.8456 },
  { id: 'hob', name: 'Hobart', timezone: 'Australia/Hobart', lat: -42.8821, lng: 147.3272 },

  // New Zealand
  { id: 'auc', name: 'Auckland', timezone: 'Pacific/Auckland', lat: -36.8485, lng: 174.7633 },
  { id: 'wel', name: 'Wellington', timezone: 'Pacific/Auckland', lat: -41.2865, lng: 174.7762 },
  { id: 'chr', name: 'Christchurch', timezone: 'Pacific/Auckland', lat: -43.5321, lng: 172.6362 },
  { id: 'ham_nz', name: 'Hamilton', timezone: 'Pacific/Auckland', lat: -37.7870, lng: 175.2793 },
  { id: 'dun', name: 'Dunedin', timezone: 'Pacific/Auckland', lat: -45.8788, lng: 170.5028 },

  // Papua New Guinea
  { id: 'por_pg', name: 'Port Moresby', timezone: 'Pacific/Port_Moresby', lat: -9.4438, lng: 147.1803 },

  // Fiji
  { id: 'suv', name: 'Suva', timezone: 'Pacific/Fiji', lat: -18.1248, lng: 178.4501 },

  // New Caledonia
  { id: 'nou', name: 'Nouméa', timezone: 'Pacific/Noumea', lat: -22.2758, lng: 166.4581 },

  // Vanuatu
  { id: 'por_vu', name: 'Port Vila', timezone: 'Pacific/Efate', lat: -17.7334, lng: 168.3273 },

  // Samoa
  { id: 'api', name: 'Apia', timezone: 'Pacific/Apia', lat: -13.8506, lng: -171.7513 },

  // Tonga
  { id: 'nuk', name: 'Nuku\'alofa', timezone: 'Pacific/Tongatapu', lat: -21.1789, lng: -175.1982 },

  // Tahiti (French Polynesia)
  { id: 'pap', name: 'Papeete', timezone: 'Pacific/Tahiti', lat: -17.5516, lng: -149.5585 },

]