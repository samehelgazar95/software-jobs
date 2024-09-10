import { categories } from '@/lib/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';

export default function JobsFilters({
  setFilterTitle,
  setFilterSearchQuery,
  setFilterCompanyId,
  setFilterCountry,
  setFilterCity,
}) {
  return (
    <section className="px-10 py-6 xl:w-2/3 xl:mx-auto">
      <div className="flex flex-wrap gap-6 justify-center">
        {categories.map((jobCategory) => (
          <div
            key={jobCategory.category}
            className="category-section bg-white shadow-lg hover:shadow-xl transition-shadow px-6 py-3 rounded-lg"
          >
            {/* Display category heading */}
            <DropdownMenu>
              {/* Trigger for category dropdown */}
              <DropdownMenuTrigger className="text-lg font-semibold text-gray-700 hover:text-green-600 focus:outline-none">
                {jobCategory.category} <ChevronDown className="inline" />
              </DropdownMenuTrigger>
              {/* Dropdown content for each category */}
              <DropdownMenuContent
                className="w-64 bg-white shadow-md rounded-md py-2 z-20"
                sideOffset={5}
              >
                {jobCategory.roles.map((role) => (
                  <DropdownMenuItem
                    key={role}
                    className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                    onClick={() => setFilterTitle(role.toLowerCase())}
                  >
                    {role}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </section>
  );
}
