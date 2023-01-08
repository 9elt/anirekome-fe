export function color(color: colorsType) {
  return {
    "--color": colorMap[color].normal,
    "--light": colorMap[color].light,
  } as React.CSSProperties;
}

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

export type colorMapType = typeof colorMap;
export type colorsType = keyof colorMapType;