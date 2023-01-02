export const colorMap = {
  'white': {
    normal: '#fff',
    light: '#fff',
  },
  'blue': {
    normal: '#34a0ff',
    light: '#f4faff',
  },
  'red': {
    normal: '#f05a93',
    light: '#ffd7e7',
  },
  'orange': {
    normal: '#ffa34d',
    light: '#ffebd7',
  },
  'yellow': {
    normal: '#e6d4bb',
    light: '#fff9f2',
  },
  'green': {
    normal: '#8cdc2f',
    light: '#e4ffb4',
  },
  'MAL': {
    normal: '#87acff',
    light: '#abc4ff',
  },
  'black': {
    normal: '#777',
    light: '#aaa',
  },
}

export type colorsType = 'white' | 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'MAL';
export type colorMapType = typeof colorMap;