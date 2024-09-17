import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFetch from '@/hooks/useFetch';
import { applyToJob } from '@/api/applicationApi';
import Loader from '../Loader';

const schema = z.object({
  experience: z
    .number()
    .min(0, { message: 'Experience must be at least 0' })
    .int(),
  skills: z.string().min(1, { message: 'Skills are required' }),
  education: z.enum(['intermediate', 'graduate', 'post graduate'], {
    message: 'Education is required',
  }),
  resume: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === 'application/pdf' ||
          file[0].type === 'application/msword'),
      { message: 'Only PDF or Word documents are allowed' }
    ),
});

export default function ApplyJobDrawer({
  user,
  job,
  applied = false,
  fetchJob,
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingApply,
    error: errorApply,
    fn: fnApply,
  } = useFetch(applyToJob);

  const onSubmit = async (data) => {
    console.log(data);
    fnApply({
      ...data,
      job_id: job.id,
      candidate_id: user.id,
      name: user.fullName,
      status: 'applied',
      resume: data.resume[0],
    }).then(() => {
      fetchJob();
      reset();
    });
  };

  return (
    <Drawer>
      <DrawerTrigger open={applied ? false : undefined}>
        <Button
          variant={job?.is_open && !applied ? 'outline' : 'green'}
          disabled={!job?.is_open || applied}
          className="mx-auto my-4 block hover:text-green-500 border-green-500 w-[120px] font-bold"
        >
          {job?.is_open ? (applied ? 'Applied' : 'Apply') : 'Hiring Closed'}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto w-3/4 px-28">
        <DrawerHeader>
          <DrawerTitle>
            Apply for {job?.title} at {job?.company?.name}
          </DrawerTitle>
          <DrawerDescription>Please fill the form below.</DrawerDescription>
        </DrawerHeader>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Added some spacing between fields */}
          <Input
            type="number"
            placeholder="Years of experience"
            className="w-full p-2"
            {...register('experience', {
              valueAsNumber: true,
            })}
          />
          {errors.experience && (
            <p className="text-red-500">{errors.experience.message}</p>
          )}

          <Input
            type="text"
            placeholder="Skills (Comma Separated)"
            className="w-full p-2"
            {...register('skills')}
          />
          {errors.skills && (
            <p className="text-red-500">{errors.skills.message}</p>
          )}

          <Controller
            name="education"
            control={control}
            render={({ field }) => (
              <RadioGroup
                className="flex flex-col space-y-2"
                onValueChange={field.onChange}
                {...field}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="graduate" id="graduate" />
                  <Label htmlFor="graduate">Graduate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="post graduate" id="post-graduate" />
                  <Label htmlFor="post-graduate">Post Graduate</Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.education && (
            <p className="text-red-500">{errors.education.message}</p>
          )}

          <Input
            type="file"
            accept=".pdf, .doc, .docx"
            className="w-full p-2 border-none underline cursor-pointer"
            {...register('resume')}
          />
          {errors.resume && (
            <p className="text-red-500">{errors.resume.message}</p>
          )}
          {errorApply?.message && (
            <p className="text-red-500">{errorApply.message}</p>
          )}

          {loadingApply && <Loader />}

          <Button
            type="submit"
            variant="green"
            className="w-full  text-white py-2"
          >
            Apply
          </Button>
        </form>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
