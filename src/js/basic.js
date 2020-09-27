export default function showHealth(info) {
  if (info.health > 50) {
    return 'healthy';
  } else if (info.health <= 50 && info.health >= 15) {
    return 'wounded';
  } return 'critical';
}
