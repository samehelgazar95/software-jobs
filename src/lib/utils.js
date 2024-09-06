import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function numberWithCommas(x) {
  let parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function daysSince(date) {
  const today = new Date();
  const jobDate = new Date(date);
  const diffInTime = today - jobDate;
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  return diffInDays;
}
