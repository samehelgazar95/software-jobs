import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import useFetch from '@/hooks/useFetch';
import { addNewCompany } from '@/api/companiesApi';
import { useEffect } from 'react';
import Loader from '../Loader';

const schema = z.object({
  name: z.string().min(1, { message: 'Company name is required' }),
  logo: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file[0].type),
      {
        message: 'Only PNG, JPEG, and SVG images are allowed',
      }
    ),
});

const AddCompanyDrawer = ({ fetchCompanies }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    data: dataAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompany);

  const onSubmit = async (data) => {
    fnAddCompany({
      ...data,
      logo: data.logo[0],
    });
  };

  useEffect(() => {
    if (!loadingAddCompany && dataAddCompany?.length > 0) {
      fetchCompanies();
    }
  }, [loadingAddCompany, dataAddCompany]);

  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="button" size="sm" variant="secondary">
          Add Company
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto w-3/4 px-28">
        <DrawerHeader>
          <DrawerTitle>Add a New Company</DrawerTitle>
        </DrawerHeader>
        <form className="flex gap-2 justify-between p-4 pb-0">
          {/* Company Name */}
          <Input placeholder="Company name" {...register('name')} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          {/* Company Logo */}
          <Input
            type="file"
            accept="image/png, image/jpeg, image/svg+xml"
            className=" file:text-gray-500"
            {...register('logo')}
          />
          {errors.logo && (
            <p className="text-red-500 text-sm">{errors.logo.message}</p>
          )}

          {/* Add Button */}
          <Button
            type="button"
            onClick={handleSubmit(onSubmit)}
            variant="green"
            className="w-40"
            disabled={loadingAddCompany}
          >
            {loadingAddCompany ? 'Adding...' : 'Add'}
          </Button>
        </form>
        <DrawerFooter>
          {errorAddCompany?.message && (
            <p className="text-red-500">{errorAddCompany?.message}</p>
          )}
          {loadingAddCompany && <Loader />}
          <DrawerClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCompanyDrawer;
