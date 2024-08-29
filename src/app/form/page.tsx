"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/ui/Input/Input";
import Title from "@/app/ui/Title/Title";
import Radio from "@/app/ui/Radio/Radio";
import Checkbox from "@/app/ui/Checkbox/Checkbox";
import Dropdown from "@/app/ui/Dropdown/Dropdown";

type PreferenceForm = {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  hasPets: string;
  hasPetsAmount: number;
  hasPetsType: {
    label: string;
    value: string;
  }[];
  petType: string;
  apartment: "own" | "rent" | "other";
  apartmentDetails: string;
  job: "unemployed" | "student" | "permanent" | "temporary" | "other";
  jobDetails: string;
};

const petsTypes = [
  { label: "Dogs", value: "dogs" },
  { label: "Cats", value: "cats" },
  { label: "Rodents", value: "rodents" },
  { label: "Birds", value: "birds" },
  { label: "Reptiles", value: "Reptiles" },
  { label: "Others", value: "others" },
];

const Page = () => {
  const { register, handleSubmit, watch } = useForm<PreferenceForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      city: "",
      hasPets: "no",
      hasPetsAmount: 0,
      hasPetsType: [],
      apartment: "own",
      apartmentDetails: "",
      job: "permanent",
      jobDetails: "",
    },
  });

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<PreferenceForm> = (data) => console.log(data);

  return (
    <div className="w-full flex flex-col items-center">
      <Title level={2} className="my-2">
        Hello! Let&apos;s get to know each other a little better!
      </Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 md:w-3/5"
      >
        <div className="p-3 bg-white rounded-md shadow-lg">
          <Title level={4} className="pb-2">
            Let us know who you are!
          </Title>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
            <div className="grid grid-cols-2 gap-2">
              <Input
                {...register("firstName")}
                placeholder="First name..."
                className="basis-1/2"
              />
              <Input
                placeholder="Last name..."
                {...register("lastName")}
                className="basis-1/2"
              />
              <Input
                className="basis-1/2"
                placeholder="Birth date..."
                {...register("birthDate")}
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <Input
                className="basis-1/2"
                placeholder="City..."
                {...register("city")}
              />
            </div>
          </div>
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <Title level={4} className="pb-2">
            So, you want to adopt a pet! That&apos;s great! We would love to
            hear about your experience!
          </Title>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
            <Title level={5}>Do you already have any pets?</Title>
            <div className="flex gap-x-2">
              {[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ].map(({ value, label }) => (
                <Radio
                  {...register("hasPets")}
                  key={value}
                  value={value}
                  label={label}
                />
              ))}
            </div>
            {watch("hasPets") === "yes" ? (
              <div className="w-full flex flex-col gap-y-2">
                <Title level={5}>Great! How many and what types of pets?</Title>
                <div className="flex gap-x-2">
                  <Input
                    type="number"
                    {...register("hasPetsAmount")}
                    className="basis-1/5"
                  />
                  <Dropdown triggerText="Pets types" className="basis-4/5">
                    <div className="w-full grid grid-cols-2 gap-2 mt-2">
                      {petsTypes.map((option) => {
                        return (
                          <Checkbox
                            key={option.value}
                            {...register("hasPetsType")}
                            value={option.value}
                            label={option.label}
                          />
                        );
                      })}
                    </div>
                  </Dropdown>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <Title level={4} className="pb-2">
            Tell us more about your apartment and job situation!
          </Title>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
            <Title level={5}>Apartment</Title>
            <div className="flex gap-x-2">
              {[
                { value: "own", label: "Own" },
                { value: "rent", label: "Rent" },
                { value: "other", label: "Other" },
              ].map(({ value, label }) => (
                <Radio
                  {...register("apartment")}
                  key={value}
                  value={value}
                  label={label}
                />
              ))}
            </div>
            {watch("apartment") === "other" ? (
              <div className="w-full flex flex-col gap-y-2">
                <Title level={5}>Please describe your situation:</Title>
                <Input {...register("apartmentDetails")} />
              </div>
            ) : null}
            <Title level={5}>Job</Title>
            <div className="flex flex-col gap-y-2">
              {[
                { value: "permanent", label: "Permanent contract" },
                { value: "temporary", label: "Temporary contract" },
                { value: "unemployed", label: "Unemployed" },
                { value: "student", label: "Student" },
                { value: "other", label: "Other" },
              ].map(({ value, label }) => (
                <Radio
                  {...register("job")}
                  key={value}
                  value={value}
                  label={label}
                />
              ))}
            </div>
            {watch("job") === "other" ? (
              <div className="w-full flex flex-col gap-y-2">
                <Title level={5}>Please describe your situation:</Title>
                <Input {...register("jobDetails")} />
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
