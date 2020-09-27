export default function sortByHealth(characters) {
  characters.sort((a, b) => (a.health > b.health ? -1 : 1));
}
