import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function numberWithCommas(number) {
  // Convert the number to a string and split it at the decimal point
  const [integerPart, decimalPart] = number.toString().split('.');

  // Use a regular expression to insert commas into the integer part
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  // Combine the integer part with the decimal part, if it exists
  return decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
}

export function daysSince(date) {
  const today = new Date();
  const jobDate = new Date(date);
  const diffInTime = today - jobDate;
  const diffInDays = Math.floor(Math.abs(diffInTime) / (1000 * 60 * 60 * 24));
  return diffInDays;
}

export function capitalizeWords(str) {
  if (!str) return ''; // Return an empty string if the input is falsy
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Helper function to capitalize the first letter of the first word only
export function capitalizeFirstLetter(str) {
  if (!str) return ''; // Return an empty string if the input is falsy
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function generateRandomId(min = 21, max = 1000000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
