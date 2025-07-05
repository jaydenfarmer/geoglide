import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private timezoneToCountry: { [key: string]: string } = {
    // ========== NORTH AMERICA ==========
    
    // United States
    'America/New_York': 'United States',
    'America/Los_Angeles': 'United States',
    'America/Chicago': 'United States',
    'America/Denver': 'United States',
    'America/Phoenix': 'United States',
    'America/Anchorage': 'United States',
    'Pacific/Honolulu': 'United States',
    'America/Detroit': 'United States',
    'America/Miami': 'United States',
    'America/Seattle': 'United States',
    'America/Las_Vegas': 'United States',
    'America/Boise': 'United States',
    'America/Nome': 'United States',
    
    // Canada
    'America/Toronto': 'Canada',
    'America/Vancouver': 'Canada',
    'America/Montreal': 'Canada',
    'America/Edmonton': 'Canada',
    'America/Winnipeg': 'Canada',
    'America/Halifax': 'Canada',
    'America/St_Johns': 'Canada',
    'America/Regina': 'Canada',
    'America/Yellowknife': 'Canada',
    'America/Iqaluit': 'Canada',
    
    // Mexico
    'America/Mexico_City': 'Mexico',
    'America/Tijuana': 'Mexico',
    'America/Mazatlan': 'Mexico',
    'America/Monterrey': 'Mexico',
    'America/Cancun': 'Mexico',
    'America/Merida': 'Mexico',
    'America/Chihuahua': 'Mexico',
    
    // Central America & Caribbean
    'America/Guatemala': 'Guatemala',
    'America/Belize': 'Belize',
    'America/Tegucigalpa': 'Honduras',
    'America/Managua': 'Nicaragua',
    'America/Costa_Rica': 'Costa Rica',
    'America/Panama': 'Panama',
    'America/Havana': 'Cuba',
    'America/Jamaica': 'Jamaica',
    'America/Port_of_Spain': 'Trinidad and Tobago',
    'America/Barbados': 'Barbados',
    'America/Santo_Domingo': 'Dominican Republic',
    'America/Puerto_Rico': 'Puerto Rico',
    
    // ========== SOUTH AMERICA ==========
    
    'America/Sao_Paulo': 'Brazil',
    'America/Rio_Branco': 'Brazil',
    'America/Manaus': 'Brazil',
    'America/Fortaleza': 'Brazil',
    'America/Recife': 'Brazil',
    'America/Bahia': 'Brazil',
    'America/Campo_Grande': 'Brazil',
    'America/Cuiaba': 'Brazil',
    'America/Porto_Velho': 'Brazil',
    'America/Boa_Vista': 'Brazil',
    'America/Belem': 'Brazil',
    'America/Maceio': 'Brazil',
    'America/Noronha': 'Brazil',
    
    'America/Argentina/Buenos_Aires': 'Argentina',
    'America/Argentina/Cordoba': 'Argentina',
    'America/Argentina/Mendoza': 'Argentina',
    'America/Argentina/Ushuaia': 'Argentina',
    'America/Argentina/La_Rioja': 'Argentina',
    'America/Argentina/San_Juan': 'Argentina',
    'America/Argentina/Catamarca': 'Argentina',
    'America/Argentina/Jujuy': 'Argentina',
    'America/Argentina/Tucuman': 'Argentina',
    
    'America/Lima': 'Peru',
    'America/Bogota': 'Colombia',
    'America/Caracas': 'Venezuela',
    'America/Guyana': 'Guyana',
    'America/Paramaribo': 'Suriname',
    'America/Cayenne': 'French Guiana',
    'America/La_Paz': 'Bolivia',
    'America/Santiago': 'Chile',
    'America/Punta_Arenas': 'Chile',
    'Pacific/Easter': 'Chile',
    'America/Asuncion': 'Paraguay',
    'America/Montevideo': 'Uruguay',
    'Atlantic/Stanley': 'Falkland Islands',
    
    // ========== EUROPE ==========
    
    // Western Europe
    'Europe/London': 'United Kingdom',
    'Europe/Dublin': 'Ireland',
    'Europe/Lisbon': 'Portugal',
    'Atlantic/Azores': 'Portugal',
    'Atlantic/Madeira': 'Portugal',
    'Europe/Madrid': 'Spain',
    'Europe/Paris': 'France',
    'Europe/Monaco': 'Monaco',
    'Europe/Andorra': 'Andorra',
    
    // Central Europe
    'Europe/Berlin': 'Germany',
    'Europe/Zurich': 'Switzerland',
    'Europe/Vienna': 'Austria',
    'Europe/Amsterdam': 'Netherlands',
    'Europe/Brussels': 'Belgium',
    'Europe/Luxembourg': 'Luxembourg',
    'Europe/Rome': 'Italy',
    'Europe/Vatican': 'Vatican City',
    'Europe/San_Marino': 'San Marino',
    'Europe/Malta': 'Malta',
    
    // Northern Europe
    'Europe/Stockholm': 'Sweden',
    'Europe/Oslo': 'Norway',
    'Europe/Copenhagen': 'Denmark',
    'Europe/Helsinki': 'Finland',
    'Europe/Mariehamn': 'Finland',
    'Atlantic/Reykjavik': 'Iceland',
    'Atlantic/Faroe': 'Faroe Islands',
    
    // Eastern Europe
    'Europe/Warsaw': 'Poland',
    'Europe/Prague': 'Czech Republic',
    'Europe/Bratislava': 'Slovakia',
    'Europe/Budapest': 'Hungary',
    'Europe/Ljubljana': 'Slovenia',
    'Europe/Zagreb': 'Croatia',
    'Europe/Belgrade': 'Serbia',
    'Europe/Sarajevo': 'Bosnia and Herzegovina',
    'Europe/Podgorica': 'Montenegro',
    'Europe/Skopje': 'North Macedonia',
    'Europe/Tirane': 'Albania',
    'Europe/Sofia': 'Bulgaria',
    'Europe/Bucharest': 'Romania',
    'Europe/Chisinau': 'Moldova',
    'Europe/Kiev': 'Ukraine',
    'Europe/Minsk': 'Belarus',
    'Europe/Vilnius': 'Lithuania',
    'Europe/Riga': 'Latvia',
    'Europe/Tallinn': 'Estonia',
    'Europe/Moscow': 'Russia',
    'Europe/Kaliningrad': 'Russia',
    'Europe/Samara': 'Russia',
    'Europe/Volgograd': 'Russia',
    'Europe/Saratov': 'Russia',
    'Europe/Astrakhan': 'Russia',
    'Europe/Ulyanovsk': 'Russia',
    
    // Southern Europe
    'Europe/Athens': 'Greece',
    'Europe/Istanbul': 'Turkey',
    'Asia/Istanbul': 'Turkey',
    'Europe/Nicosia': 'Cyprus',
    
    // ========== ASIA ==========
    
    // East Asia
    'Asia/Tokyo': 'Japan',
    'Asia/Shanghai': 'China',
    'Asia/Urumqi': 'China',
    'Asia/Hong_Kong': 'Hong Kong',
    'Asia/Macau': 'Macau',
    'Asia/Taipei': 'Taiwan',
    'Asia/Seoul': 'South Korea',
    'Asia/Pyongyang': 'North Korea',
    'Asia/Ulaanbaatar': 'Mongolia',
    'Asia/Choibalsan': 'Mongolia',
    'Asia/Hovd': 'Mongolia',
    
    // Southeast Asia
    'Asia/Bangkok': 'Thailand',
    'Asia/Ho_Chi_Minh': 'Vietnam',
    'Asia/Phnom_Penh': 'Cambodia',
    'Asia/Vientiane': 'Laos',
    'Asia/Yangon': 'Myanmar',
    'Asia/Singapore': 'Singapore',
    'Asia/Kuala_Lumpur': 'Malaysia',
    'Asia/Kuching': 'Malaysia',
    'Asia/Brunei': 'Brunei',
    'Asia/Jakarta': 'Indonesia',
    'Asia/Jayapura': 'Indonesia',
    'Asia/Makassar': 'Indonesia',
    'Asia/Pontianak': 'Indonesia',
    'Asia/Manila': 'Philippines',
    'Pacific/Palau': 'Palau',
    'Asia/Dili': 'East Timor',
    
    // South Asia
    'Asia/Kolkata': 'India',
    'Asia/Karachi': 'Pakistan',
    'Asia/Dhaka': 'Bangladesh',
    'Asia/Kathmandu': 'Nepal',
    'Asia/Thimphu': 'Bhutan',
    'Asia/Colombo': 'Sri Lanka',
    'Indian/Maldives': 'Maldives',
    
    // Central Asia
    'Asia/Tashkent': 'Uzbekistan',
    'Asia/Samarkand': 'Uzbekistan',
    'Asia/Almaty': 'Kazakhstan',
    'Asia/Qyzylorda': 'Kazakhstan',
    'Asia/Aqtobe': 'Kazakhstan',
    'Asia/Aqtau': 'Kazakhstan',
    'Asia/Atyrau': 'Kazakhstan',
    'Asia/Oral': 'Kazakhstan',
    'Asia/Bishkek': 'Kyrgyzstan',
    'Asia/Dushanbe': 'Tajikistan',
    'Asia/Ashgabat': 'Turkmenistan',
    'Asia/Kabul': 'Afghanistan',
    
    // Western Asia (Middle East)
    'Asia/Tehran': 'Iran',
    'Asia/Baghdad': 'Iraq',
    'Asia/Kuwait': 'Kuwait',
    'Asia/Riyadh': 'Saudi Arabia',
    'Asia/Qatar': 'Qatar',
    'Asia/Bahrain': 'Bahrain',
    'Asia/Dubai': 'UAE',
    'Asia/Muscat': 'Oman',
    'Asia/Aden': 'Yemen',
    'Asia/Damascus': 'Syria',
    'Asia/Beirut': 'Lebanon',
    'Asia/Jerusalem': 'Israel',
    'Asia/Gaza': 'Palestine',
    'Asia/Hebron': 'Palestine',
    'Asia/Amman': 'Jordan',
    'Asia/Nicosia': 'Cyprus',
    
    // Russia (Asian part)
    'Asia/Yekaterinburg': 'Russia',
    'Asia/Omsk': 'Russia',
    'Asia/Novosibirsk': 'Russia',
    'Asia/Barnaul': 'Russia',
    'Asia/Tomsk': 'Russia',
    'Asia/Novokuznetsk': 'Russia',
    'Asia/Krasnoyarsk': 'Russia',
    'Asia/Irkutsk': 'Russia',
    'Asia/Chita': 'Russia',
    'Asia/Yakutsk': 'Russia',
    'Asia/Khandyga': 'Russia',
    'Asia/Vladivostok': 'Russia',
    'Asia/Ust-Nera': 'Russia',
    'Asia/Magadan': 'Russia',
    'Asia/Sakhalin': 'Russia',
    'Asia/Srednekolymsk': 'Russia',
    'Asia/Kamchatka': 'Russia',
    'Asia/Anadyr': 'Russia',
    
    // ========== AFRICA ==========
    
    // North Africa
    'Africa/Cairo': 'Egypt',
    'Africa/Tripoli': 'Libya',
    'Africa/Tunis': 'Tunisia',
    'Africa/Algiers': 'Algeria',
    'Africa/Casablanca': 'Morocco',
    'Africa/El_Aaiun': 'Western Sahara',
    'Africa/Ceuta': 'Spain',
    
    // West Africa
    'Africa/Lagos': 'Nigeria',
    'Africa/Accra': 'Ghana',
    'Africa/Abidjan': 'Ivory Coast',
    'Africa/Dakar': 'Senegal',
    'Africa/Bamako': 'Mali',
    'Africa/Ouagadougou': 'Burkina Faso',
    'Africa/Niamey': 'Niger',
    'Africa/Nouakchott': 'Mauritania',
    'Africa/Conakry': 'Guinea',
    'Africa/Bissau': 'Guinea-Bissau',
    'Africa/Freetown': 'Sierra Leone',
    'Africa/Monrovia': 'Liberia',
    'Africa/Lome': 'Togo',
    'Africa/Porto-Novo': 'Benin',
    'Atlantic/Cape_Verde': 'Cape Verde',
    'Africa/Sao_Tome': 'São Tomé and Príncipe',
    
    // Central Africa
    'Africa/Kinshasa': 'Democratic Republic of Congo',
    'Africa/Lubumbashi': 'Democratic Republic of Congo',
    'Africa/Brazzaville': 'Republic of Congo',
    'Africa/Douala': 'Cameroon',
    'Africa/Bangui': 'Central African Republic',
    'Africa/Ndjamena': 'Chad',
    'Africa/Malabo': 'Equatorial Guinea',
    'Africa/Libreville': 'Gabon',
    
    // East Africa
    'Africa/Nairobi': 'Kenya',
    'Africa/Kampala': 'Uganda',
    'Africa/Dar_es_Salaam': 'Tanzania',
    'Africa/Kigali': 'Rwanda',
    'Africa/Bujumbura': 'Burundi',
    'Africa/Addis_Ababa': 'Ethiopia',
    'Africa/Asmara': 'Eritrea',
    'Africa/Djibouti': 'Djibouti',
    'Africa/Mogadishu': 'Somalia',
    'Indian/Comoro': 'Comoros',
    'Indian/Antananarivo': 'Madagascar',
    'Indian/Mauritius': 'Mauritius',
    'Indian/Reunion': 'Réunion',
    'Indian/Mayotte': 'Mayotte',
    
    // Southern Africa
    'Africa/Johannesburg': 'South Africa',
    'Africa/Windhoek': 'Namibia',
    'Africa/Gaborone': 'Botswana',
    'Africa/Maseru': 'Lesotho',
    'Africa/Mbabane': 'Eswatini',
    'Africa/Maputo': 'Mozambique',
    'Africa/Harare': 'Zimbabwe',
    'Africa/Lusaka': 'Zambia',
    'Africa/Blantyre': 'Malawi',
    
    // ========== OCEANIA ==========
    
    // Australia
    'Australia/Sydney': 'Australia',
    'Australia/Melbourne': 'Australia',
    'Australia/Brisbane': 'Australia',
    'Australia/Perth': 'Australia',
    'Australia/Adelaide': 'Australia',
    'Australia/Hobart': 'Australia',
    'Australia/Darwin': 'Australia',
    'Australia/Canberra': 'Australia',
    'Australia/Broken_Hill': 'Australia',
    'Australia/Lord_Howe': 'Australia',
    'Antarctica/Macquarie': 'Australia',
    
    // New Zealand
    'Pacific/Auckland': 'New Zealand',
    'Pacific/Chatham': 'New Zealand',
    
    // Pacific Islands
    'Pacific/Fiji': 'Fiji',
    'Pacific/Tongatapu': 'Tonga',
    'Pacific/Apia': 'Samoa',
    'Pacific/Pago_Pago': 'American Samoa',
    'Pacific/Tahiti': 'French Polynesia',
    'Pacific/Marquesas': 'French Polynesia',
    'Pacific/Gambier': 'French Polynesia',
    'Pacific/Rarotonga': 'Cook Islands',
    'Pacific/Niue': 'Niue',
    'Pacific/Port_Moresby': 'Papua New Guinea',
    'Pacific/Bougainville': 'Papua New Guinea',
    'Pacific/Guadalcanal': 'Solomon Islands',
    'Pacific/Efate': 'Vanuatu',
    'Pacific/Noumea': 'New Caledonia',
    'Pacific/Norfolk': 'Norfolk Island',
    'Pacific/Nauru': 'Nauru',
    'Pacific/Tarawa': 'Kiribati',
    'Pacific/Enderbury': 'Kiribati',
    'Pacific/Kiritimati': 'Kiribati',
    'Pacific/Funafuti': 'Tuvalu',
    'Pacific/Majuro': 'Marshall Islands',
    'Pacific/Kwajalein': 'Marshall Islands',
    'Pacific/Chuuk': 'Micronesia',
    'Pacific/Pohnpei': 'Micronesia',
    'Pacific/Kosrae': 'Micronesia',
    'Pacific/Wake': 'Wake Island',
    'Pacific/Midway': 'United States',
    'Pacific/Guam': 'Guam',
    'Pacific/Saipan': 'Northern Mariana Islands',
    
    // ========== ANTARCTICA ==========
    'Antarctica/McMurdo': 'Antarctica',
    'Antarctica/Casey': 'Antarctica',
    'Antarctica/Davis': 'Antarctica',
    'Antarctica/DumontDUrville': 'Antarctica',
    'Antarctica/Mawson': 'Antarctica',
    'Antarctica/Palmer': 'Antarctica',
    'Antarctica/Rothera': 'Antarctica',
    'Antarctica/Syowa': 'Antarctica',
    'Antarctica/Troll': 'Antarctica',
    'Antarctica/Vostok': 'Antarctica',
    
    // ========== ATLANTIC ISLANDS ==========
    'Atlantic/Bermuda': 'Bermuda',
    'Atlantic/Canary': 'Spain',
    'Atlantic/South_Georgia': 'South Georgia',
    'Atlantic/St_Helena': 'Saint Helena',
    
    // ========== INDIAN OCEAN ==========
    'Indian/Kerguelen': 'French Southern Territories',
    'Indian/Cocos': 'Cocos Islands',
    'Indian/Christmas': 'Christmas Island',
    'Indian/Chagos': 'British Indian Ocean Territory'
  };

  getCountryFromTimezone(timezone: string): string {
    return this.timezoneToCountry[timezone] || this.extractRegionFromTimezone(timezone);
  }

  private extractRegionFromTimezone(timezone: string): string {
    const parts = timezone.split('/');
    const region = parts[0];
    
    // Convert region prefixes to readable names
    const regionMap: { [key: string]: string } = {
      'America': 'Americas',
      'Europe': 'Europe',
      'Asia': 'Asia',
      'Africa': 'Africa',
      'Australia': 'Australia',
      'Pacific': 'Pacific Islands',
      'Atlantic': 'Atlantic Islands',
      'Indian': 'Indian Ocean',
      'Antarctica': 'Antarctica'
    };
    
    return regionMap[region] || region;
  }

  // Get all countries
  getAllCountries(): string[] {
    const countries = Array.from(new Set(Object.values(this.timezoneToCountry)));
    return countries.sort();
  }

  // Get all timezones for a specific country
  getTimezonesForCountry(country: string): string[] {
    return Object.entries(this.timezoneToCountry)
      .filter(([_, countryName]) => countryName === country)
      .map(([timezone, _]) => timezone);
  }

  // Check if timezone exists
  isValidTimezone(timezone: string): boolean {
    return timezone in this.timezoneToCountry;
  }

  // Get region from timezone
  getRegionFromTimezone(timezone: string): string {
    const region = timezone.split('/')[0];
    return region;
  }
}