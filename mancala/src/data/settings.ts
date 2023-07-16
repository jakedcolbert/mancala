import { writable } from "svelte/store"
export const settings = {
  delay: 500
}

function createTheme() {
  const external = writable({primary: '#FFFFFF', secondary: '#FFFFFF', tertiary: '#FFFFFF'});
  return {
    randomize: () => {
      let primary, secondary, tertiary;
      primary = `#${Math.random() * 255}${Math.random() * 255}${Math.random() * 255}`;
      secondary = '';
      tertiary = ''; 
      external.set({primary, secondary, tertiary});
    }
  }
}