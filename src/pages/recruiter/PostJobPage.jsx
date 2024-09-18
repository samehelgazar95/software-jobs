import { getCompanies } from '@/api/companiesApi';
import { addNewJob } from '@/api/jobsApi';
import AddCompanyDrawer from '@/components/jobs/AddCompanyDrawer';
import Loader from '@/components/Loader';
// import AddCompanyDrawer from '@/components/add-company-drawer';
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
import { Textarea } from '@/components/ui/textarea';
import useFetch from '@/hooks/useFetch';
import { generateRandomId } from '@/lib/utils';
import { useUser } from '@clerk/clerk-react';
import { zodResolver } from '@hookform/resolvers/zod';
import MDEditor from '@uiw/react-md-editor';
import { Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  country: z.string().min(1, { message: 'Select a country' }),
  city: z.string().min(1, { message: 'Select a city' }),
  company_id: z.string().min(1, { message: 'Select or Add a new Company' }),
  requirements: z.string().min(1, { message: 'Requirements are required' }),
  currency: z.string().min(1, { message: 'Currency is required' }),
  salary: z.number().min(0),
  min_experience: z.number().min(0),
  max_experience: z.number().min(0),
  work_mode: z.enum(['on site', 'remote', 'hybrid']),
  job_type: z.enum(['full time', 'part time', 'contract']),
  level: z.enum(['junior', 'mid', 'senior']),
});

export default function PostJobPage() {
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: '',
      city: '',
      company_id: '',
      requirements: '',
    },
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingCreateJob,
    error: errorCreateJob,
    data: dataCreateJob,
    fn: fnCreateJob,
  } = useFetch(addNewJob);

  const onSubmit = (data) => {
    console.log(data);

    fnCreateJob({
      id: generateRandomId(),
      recruiter_id: user.id,
      is_open: true,
      ...data,
    });
  };

  useEffect(() => {
    if (dataCreateJob?.length > 0) navigate('/jobs');
  }, [loadingCreateJob]);

  const {
    loading: loadingCompanies,
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (country) {
      const countryISO = Country.getAllCountries().find(
        (c) => c.name === country
      )?.isoCode;
      if (countryISO) {
        setCities(State.getStatesOfCountry(countryISO).map((s) => s.name));
      }
    }
  }, [country]);

  if (!isLoaded || loadingCompanies) <Loader />;

  if (user?.unsafeMetadata?.role !== 'recruiter') {
    return <Navigate to="/jobs" />;
  }

  return (
    <div>
      <h1 className="font-bold text-4xl sm:text-6xl text-center pb-6 text-slate-700">
        Post a Job
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 pb-0"
      >
        <Input placeholder="Job Title" {...register('title')} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Textarea placeholder="Job Description" {...register('description')} />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="flex gap-4 items-center">
          {/* Experience */}
          <Input
            type="number"
            placeholder="Min Experience"
            {...register('min_experience', { valueAsNumber: true })}
          />
          {errors.min_experience && (
            <p className="text-red-500">{errors.min_experience.message}</p>
          )}

          <Input
            type="number"
            placeholder="Max Experience"
            {...register('max_experience', { valueAsNumber: true })}
          />
          {errors.max_experience && (
            <p className="text-red-500">{errors.max_experience.message}</p>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {/* Salary */}
          <Input
            type="number"
            placeholder="Salary"
            {...register('salary', { valueAsNumber: true })}
          />
          {errors.salary && (
            <p className="text-red-500">{errors.salary.message}</p>
          )}

          {/* Currency */}
          <Input type="text" placeholder="Currency" {...register('currency')} />
          {errors.currency && (
            <p className="text-red-500">{errors.currency.message}</p>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {/* Job Type */}
          <Controller
            name="job_type"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="full time">Full Time</SelectItem>
                    <SelectItem value="part time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.job_type && (
            <p className="text-red-500">{errors.job_type.message}</p>
          )}

          {/* Work Mode */}
          <Controller
            name="level"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Job Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="mid">Mid</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.level && (
            <p className="text-red-500">{errors.level.message}</p>
          )}
        </div>

        {/* Job Level */}
        <div className="flex gap-4 w-full">
          <div className="w-1/2">
            <Controller
              name="work_mode"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Work Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="on site">On Site</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.work_mode && (
              <p className="text-red-500">{errors.work_mode.message}</p>
            )}
          </div>

          <div className="w-1/2 flex gap-2">
            <Controller
              name="company_id"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Company">
                      {field.value
                        ? companies?.find(
                            (com) => com.id === Number(field.value)
                          )?.name
                        : 'Company'}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies?.map(({ name, id }) => (
                        <SelectItem key={name} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <AddCompanyDrawer fetchCompanies={fnCompanies} />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {/* Country Selection */}
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select
                value={selectedCountry}
                onValueChange={(value) => {
                  setSelectedCountry(value);
                  field.onChange(value);
                  setSelectedCity('');
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Country.getAllCountries().map(({ name, isoCode }) => (
                      <SelectItem key={isoCode} value={isoCode}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          {/* City Selection */}
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                value={selectedCity}
                onValueChange={(value) => {
                  setSelectedCity(value);
                  field.onChange(value);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {selectedCountry &&
                      State.getStatesOfCountry(selectedCountry).map(
                        ({ name }) => (
                          <SelectItem key={name} value={name}>
                            {name}
                          </SelectItem>
                        )
                      )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>

        {errors.location && (
          <p className="text-red-500">{errors.location.message}</p>
        )}
        {errors.company_id && (
          <p className="text-red-500">{errors.company_id.message}</p>
        )}

        <Controller
          name="requirements"
          control={control}
          render={({ field }) => (
            <MDEditor value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.requirements && (
          <p className="text-red-500">{errors.requirements.message}</p>
        )}
        {errors.errorCreateJob && (
          <p className="text-red-500">{errors?.errorCreateJob?.message}</p>
        )}
        {errorCreateJob?.message && (
          <p className="text-red-500">{errorCreateJob?.message}</p>
        )}
        {loadingCreateJob && <Loader />}
        <Button
          type="submit"
          variant="green"
          size="lg"
          className="mt-2 w-fit mx-auto mb-4 font-bold"
        >
          {loadingCreateJob ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

// import { useUser } from '@clerk/clerk-react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Country, State } from 'country-state-city';
// import { useEffect, useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { z } from 'zod';

// import useFetch from '@/hooks/useFetch';
// import { getCompanies } from '@/api/companiesApi';
// import { addNewJob } from '@/api/jobsApi';
// import Loader from '@/components/Loader';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

// const schema = z.object({
//   title: z.string().min(1, { message: 'Title is required' }),
//   description: z.string().min(1, { message: 'Description is required' }),
//   country: z.string().min(1, { message: 'Select a country' }),
//   city: z.string().min(1, { message: 'Select a city' }),
//   company_id: z.string().min(1, { message: 'Select or Add a new Company' }),
//   requirements: z.string().min(1, { message: 'Requirements are required' }),
//   work_mode: z.enum(['on site', 'remote', 'hybrid']),
//   min_experience: z.number().min(0),
//   max_experience: z.number().min(0),
//   salary: z.number().min(0),
//   currency: z.string().min(1, { message: 'Currency is required' }),
//   job_type: z.enum(['full time', 'part time', 'contract']),
//   level: z.enum(['junior', 'mid', 'senior']),
// });

// export default function PostJobPage() {
//   const [country, setCountry] = useState('');
//   const [cities, setCities] = useState([]);
//   const { user, isLoaded } = useUser();
//   const navigate = useNavigate();

//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     // defaultValues: { country: '', company_id: '', requirements: '' },
//     resolver: zodResolver(schema),
//   });

//   const {
//     loading: loadingCreateJob,
//     error: errorCreateJob,
//     data: dataCreateJob,
//     fn: fnCreateJob,
//   } = useFetch(addNewJob);

//   const onSubmit = async (data) => {
//     try {
//       console.log('Submitting:', data);
//       await fnCreateJob({
//         ...data,
//         recruiter_id: user.id,
//         is_open: true,
//       });
//       console.log('Job submitted successfully');
//       navigate('/jobs');
//     } catch (error) {
//       console.error('Error submitting job:', error);
//       // Handle error (e.g., show error message to user)
//     }
//   };

//   useEffect(() => {
//     if (dataCreateJob?.length > 0) navigate('/jobs');
//   }, [loadingCreateJob]);

//   const {
//     loading: loadingCompanies,
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   useEffect(() => {
//     if (isLoaded) {
//       fnCompanies();
//     }
//   }, [isLoaded]);

//   useEffect(() => {
//     if (country) {
//       const countryISO = Country.getAllCountries().find(
//         (c) => c.name === country
//       )?.isoCode;
//       if (countryISO) {
//         setCities(State.getStatesOfCountry(countryISO).map((s) => s.name));
//       }
//     }
//   }, [country]);

//   if (!isLoaded || loadingCompanies) return <Loader />;

//   if (user?.unsafeMetadata?.role !== 'recruiter') {
//     return <Navigate to="/jobs" />;
//   }

//   return (
//     <div>
//       <h1 className="font-bold text-4xl sm:text-6xl text-center pb-6 text-slate-700">
//         Post a Job
//       </h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-4 p-4 pb-0"
//       >
//         <Input placeholder="Job Title" {...register('title')} />
//         {errors.title && <p className="text-red-500">{errors.title.message}</p>}

//         <Textarea placeholder="Job Description" {...register('description')} />
//         {errors.description && (
//           <p className="text-red-500">{errors.description.message}</p>
//         )}

//         <div className="flex gap-4 items-center">
//           {/* Experience */}
//           <Input
//             type="number"
//             placeholder="Min Experience"
//             {...register('min_experience', { valueAsNumber: true })}
//           />
//           {errors.min_experience && (
//             <p className="text-red-500">{errors.min_experience.message}</p>
//           )}

//           <Input
//             type="number"
//             placeholder="Max Experience"
//             {...register('max_experience', { valueAsNumber: true })}
//           />
//           {errors.max_experience && (
//             <p className="text-red-500">{errors.max_experience.message}</p>
//           )}
//         </div>

//         <div className="flex gap-4 items-center">
//           {/* Salary */}
//           <Input
//             type="number"
//             placeholder="Salary"
//             {...register('salary', { valueAsNumber: true })}
//           />
//           {errors.salary && (
//             <p className="text-red-500">{errors.salary.message}</p>
//           )}

//           {/* Currency */}
//           <Input type="text" placeholder="Currency" {...register('currency')} />
//           {errors.currency && (
//             <p className="text-red-500">{errors.currency.message}</p>
//           )}
//         </div>

//         <div className="flex gap-4 items-center">
//           <Controller
//             name="company_id"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Company">
//                     {field.value
//                       ? companies?.find((com) => com.id === Number(field.value))
//                           ?.name
//                       : 'Company'}
//                   </SelectValue>
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {companies?.map(({ name, id }) => (
//                       <SelectItem key={name} value={id}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors.company_id && (
//             <p className="text-red-500">{errors.company_id.message}</p>
//           )}

//           {/* Work Mode */}
//           <Controller
//             name="work_mode"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Work Mode" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectItem value="on site">On Site</SelectItem>
//                     <SelectItem value="remote">Remote</SelectItem>
//                     <SelectItem value="hybrid">Hybrid</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors.work_mode && (
//             <p className="text-red-500">{errors.work_mode.message}</p>
//           )}
//         </div>

//         <div className="flex gap-4 items-center">
//           {/* Job Type */}
//           <Controller
//             name="job_type"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Job Type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectItem value="full time">Full Time</SelectItem>
//                     <SelectItem value="part time">Part Time</SelectItem>
//                     <SelectItem value="contract">Contract</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors.job_type && (
//             <p className="text-red-500">{errors.job_type.message}</p>
//           )}

//           {/* Job Level */}
//           <Controller
//             name="level"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Job Level" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectItem value="junior">Junior</SelectItem>
//                     <SelectItem value="mid">Mid</SelectItem>
//                     <SelectItem value="senior">Senior</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors.level && (
//             <p className="text-red-500">{errors.level.message}</p>
//           )}
//         </div>

//         <div className="flex gap-4 items-center">
//           {/* Country Selection */}
//           <Controller
//             name="country"
//             control={control}
//             render={({ field }) => (
//               <Select
//                 value={selectedCountry}
//                 onValueChange={(value) => {
//                   setSelectedCountry(value);
//                   field.onChange(value);
//                   setSelectedCity('');
//                 }}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a Country" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {Country.getAllCountries().map(({ name, isoCode }) => (
//                       <SelectItem key={isoCode} value={isoCode}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />

//           {/* City Selection */}
//           <Controller
//             name="city"
//             control={control}
//             render={({ field }) => (
//               <Select
//                 value={selectedCity}
//                 onValueChange={(value) => {
//                   setSelectedCity(value);
//                   field.onChange(value);
//                 }}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a City" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {selectedCountry &&
//                       State.getStatesOfCountry(selectedCountry).map(
//                         ({ name }) => (
//                           <SelectItem key={name} value={name}>
//                             {name}
//                           </SelectItem>
//                         )
//                       )}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors.city && <p className="text-red-500">{errors.city.message}</p>}
//         </div>

//         {loadingCreateJob && <Loader />}
//         <Button
//           variant="green"
//           type="submit"
//           size="lg"
//           className="my-4 mx-auto font-bold text-xl w-fit"
//         >
//           Post Job
//         </Button>
//       </form>
//     </div>
//   );
// }
