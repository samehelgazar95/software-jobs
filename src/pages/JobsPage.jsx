/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Country } from 'country-state-city'; // Use Country instead of State
import { BarLoader } from 'react-spinners';
import useFetch from '@/hooks/useFetch';
import JobCard from '@/components/jobs/JobCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCompanies } from '@/api/companiesApi';
import { getJobs } from '@/api/jobsApi';
import Loader from '@/components/Loader';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function JobListing() {
  const { isLoaded } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('');
  const [company_id, setCompany_id] = useState('');
  const [page, setPage] = useState(1);
  const [jobsPerPage] = useState(14);
  const { data: companies, fn: fnCompanies } = useFetch(getCompanies);
  const {
    loading: loadingJobs,
    data: jobs,
    fn: fnJobs,
  } = useFetch(getJobs, {
    country,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, country, company_id, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const query = formData.get('search-query');
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setCompany_id('');
    setCountry('');
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (!isLoaded) {
    return <Loader />;
  }

  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const paginatedJobs = jobs?.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-10 lg:px-32">
      <h1 className="font-bold text-4xl sm:text-6xl text-center pb-4 text-slate-700">
        Latest Jobs
      </h1>
      <form
        onSubmit={handleSearch}
        className="h-14 flex flex-row w-full gap-2 items-center mb-3"
      >
        <Input
          type="text"
          placeholder="Search Jobs by Title.."
          name="search-query"
          className="h-full flex-1 px-4 text-md"
        />
        <Button
          type="submit"
          className="h-full sm:w-28 text-xl font-bold"
          variant="green"
        >
          Search
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <Select value={country} onValueChange={(value) => setCountry(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Country.getAllCountries().map(({ name, isoCode }) => (
                <SelectItem key={isoCode} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          value={company_id}
          onValueChange={(value) => setCompany_id(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {companies?.map(({ name, id }) => (
                <SelectItem key={id} value={id}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="sm:w-1/2 text-lg font-semibold text-white"
          variant="blue"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>

      {loadingJobs && <Loader />}

      {!loadingJobs && (
        <>
          {jobs?.length ? (
            <>
              <ul className="mt-8 grid md:grid-cols-2 gap-4">
                {paginatedJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    savedInit={job?.saved?.length > 0}
                  />
                ))}
              </ul>

              {jobs.length > jobsPerPage && (
                <Stack
                  spacing={2}
                  alignItems="center"
                  className="sticky bottom-0 bg-white py-4 shadow-lg rounded-lg"
                  sx={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 10,
                  }}
                >
                  <Pagination
                    count={Math.ceil(jobs.length / jobsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    className="pagination"
                  />
                </Stack>
              )}
            </>
          ) : (
            <div>No Jobs Found 😢</div>
          )}
        </>
      )}
    </div>
  );
}
