export function getTimeAgo(dateString: string): string {
  const now = new Date();
  const updated = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - updated.getTime()) / 1000);

  if (diffInSeconds < 60) return "now";
  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo`;
  const years = Math.floor(months / 12);
  return `${years}y`;
}