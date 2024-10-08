/* eslint-disable react/prop-types */
import { Boxes, BriefcaseBusiness, Download, School } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { updateApplicationStatus } from '@/api/applicationApi';
import useFetch from '@/hooks/useFetch';
import Loader from '../Loader';
import { Button } from '@/components/ui/button';

export default function ApplicationCard({ application, isCandidate = false }) {
  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateApplicationStatus,
    {
      job_id: application.job_id,
    }
  );

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = application?.resume;
    link.target = '_blank';
    link.click();
  };

  const handleStatusChange = (status) => {
    fnHiringStatus(status).then(() => fnHiringStatus());
  };

  return (
    <Card>
      {loadingHiringStatus && <Loader />}
      <CardHeader>
        <CardTitle className="font-bold">
          {isCandidate
            ? `${application?.job?.title} at ${application?.job?.company?.name}`
            : application?.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex gap-2 items-center">
            <BriefcaseBusiness size={15} /> {application?.experience} years of
            experience
          </div>
          <div className="flex gap-2 items-center">
            <School size={15} />
            {application?.education}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex gap-2 items-center">
            <Boxes size={15} /> Skills: {application?.skills}
          </div>
          <Button
            variant="outline"
            className="flex gap-4"
            onClick={handleDownload}
          >
            <span>Download resume</span>
            <Download
              size={18}
              className="bg-white text-black cursor-pointer"
            />
          </Button>
        </div>
        <hr />
      </CardContent>

      <CardFooter className="flex justify-between">
        <span>{new Date(application?.created_at).toLocaleString()}</span>
        {isCandidate ? (
          <span className="capitalize font-bold">
            Status: {application.status}
          </span>
        ) : (
          <Select
            onValueChange={handleStatusChange}
            defaultValue={application.status}
          >
            <SelectTrigger className="w-52">
              <SelectValue placeholder="Application Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="applied">Applied</SelectItem>
              <SelectItem value="interviewing">Interviewing</SelectItem>
              <SelectItem value="hired">Hired</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        )}
      </CardFooter>
    </Card>
  );
}
