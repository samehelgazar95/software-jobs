// import { categories } from '@/lib/data';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Button } from '@/components/ui/button';
// import countries from 'i18n-iso-countries';
// import enLocale from 'i18n-iso-countries/langs/en.json';
// import { Input } from 'postcss';

// countries.registerLocale(enLocale); // Register English locale

// export default function JobsFilters({
//   setSearchQuery,
//   setFilterCompanyId,
//   setFilterCountry,
//   dataCompanies,
// }) {
//   const countryList = countries.getNames('en', { select: 'official' }); // Get the country names
//   const countryOptions = Object.entries(countryList); // Convert to [code, name] pairs

//   const cleatFiltersHandler = () => {
//     setSearchQuery('');
//     setFilterCompanyId('');
//     setFilterCountry('');
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchQuery(searchQuery); // Update filterTitle with the search query
//   };

//   return (
//     <section className="px-10 py-6 xl:w-2/3 xl:mx-auto">
//       <form
//         onSubmit={handleSearch}
//         className="h-14 flex flex-row w-full gap-2 items-center mb-3"
//       >
//         <Input
//           type="text"
//           placeholder="Search Jobs by Title.."
//           name="search-query"
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="h-full flex-1 px-4 text-md"
//         />
//         <Button type="submit" className="h-full sm:w-28" variant="blue">
//           Search
//         </Button>
//       </form>
//     </section>
//   );
// }

// // <div className="flex flex-wrap gap-6 justify-center">
// //         {/* Category Select Dropdown */}
// //         <div>
// //           <Select>
// //             <SelectTrigger className="w-[180px]">
// //               <SelectValue placeholder="Select a category" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectGroup>
// //                 <SelectLabel>Categories</SelectLabel>
// //                 {categories.map((jobCategory) => (
// //                   <SelectItem
// //                     key={jobCategory.category}
// //                     value={jobCategory.category}
// //                     onClick={() =>
// //                       setFilterTitle(jobCategory.category.toLowerCase())
// //                     }
// //                   >
// //                     {jobCategory.category}
// //                   </SelectItem>
// //                 ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </div>

// //       <div className="flex pt-6 justify-center gap-6">
// //         {/* Country Select Dropdown */}
// //         <div>
// //           <Select>
// //             <SelectTrigger className="w-[180px]">
// //               <SelectValue placeholder="Select a country" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectGroup>
// //                 <SelectLabel>Countries</SelectLabel>
// //                 {countryOptions?.map(([code, name]) => (
// //                   <SelectItem
// //                     key={code}
// //                     value={code}
// //                     onClick={() => setFilterCountry(code)}
// //                   >
// //                     {name}
// //                   </SelectItem>
// //                 ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         {/* Company Select Dropdown */}
// //         <div>
// //           <Select>
// //             <SelectTrigger className="w-[180px]">
// //               <SelectValue placeholder="Select a company" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectGroup>
// //                 <SelectLabel>Companies</SelectLabel>
// //                 {dataCompanies?.map((company) => (
// //                   <SelectItem
// //                     key={company?.id}
// //                     value={company?.name}
// //                     onClick={() => setFilterCompanyId(company?.id)}
// //                   >
// //                     {company?.name}
// //                   </SelectItem>
// //                 ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         {/* Clear Filters Button */}
// //         <div>
// //           <Button variant="outline" onClick={cleatFiltersHandler}>
// //             Clear Filters
// //           </Button>
// //         </div>
// //       </div>
