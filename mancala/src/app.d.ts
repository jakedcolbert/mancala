// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  type hexLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  type hexNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  type hexChar = hexLetter | hexNumber;
  type hexBit = `${hexChar}${hexChar}`;
  type hexCode = `#${hexBit}${hexBit}${hexBit}`;

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

    interface colorScheme {
      primary: hexCode, 
      secondary: hexCode, 
      tertiary: hexCode
    }
	}
}

export {};
