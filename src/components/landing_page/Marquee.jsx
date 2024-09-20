import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';

// Updated reviews array with correct image sources
const reviews = [
  {
    name: 'Microsoft',
    img: 'microsoft.svg',
  },
  {
    name: 'Apple',
    img: 'apple.svg',
  },
  {
    name: 'Google',
    img: 'google.svg',
  },
  {
    name: 'Amazon',
    img: 'amazon.svg',
  },
  {
    name: 'Meta',
    img: 'meta.svg',
  },
  {
    name: 'IBM',
    img: 'ibm.svg',
  },
  {
    name: 'Uber',
    img: 'uber.svg',
  },
  {
    name: 'Salesforce',
    img: 'salesforce.svg',
  },
  {
    name: 'Adobe',
    img: 'adobe.svg',
  },
  {
    name: 'VMware',
    img: 'vmware.svg',
  },
  {
    name: 'Cisco',
    img: 'cisco.svg',
  },
  {
    name: 'Atlassian',
    img: 'atlassian.svg',
  },
  {
    name: 'Slack',
    img: 'slack.svg',
  },
];

const ReviewCard = ({ img, name }) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="w-full h-24 object-contain rounded-3xl"
          alt={name}
          src={`/${img}`}
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="pb-4 mt-4 relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h2 className="py-4 my-4 text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
        Trusted by Leading Software Companies
      </h2>
      <Marquee pauseOnHover className="[--duration:45s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
