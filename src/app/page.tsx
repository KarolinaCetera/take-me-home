import Button from "@/app/ui/Button/Button";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@/app/ui/Typography/Typography";
import Title from "@/app/ui/Title/Title";
import Input from "@/app/ui/Input/Input";
import Checkbox from "@/app/ui/Checkbox/Checkbox";
import Select from "@/app/ui/Select/Select";
import Radio from "@/app/ui/Radio/Radio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button>Click me</Button>
      <Button intent="secondary" icon={<AddIcon />} iconOnly rounded></Button>
      <Title level={1}>Title h1</Title>
      <Title level={2}>Title h2</Title>
      <Title level={3}>Title h3</Title>
      <Title level={4}>Title h4</Title>
      <Title level={5}>Title h5</Title>
      <Typography as="p">Medium normal</Typography>
      <Typography as="p" size="sm">
        Medium bold
      </Typography>
      <Typography as="span" size="xs">
        xs normal
      </Typography>
      <div className="flex flex-col gap-y-2">
        <Input name="my input" label="Amazing input" />
        <Checkbox name="my checkbox" label="Amazing checkbox" />
        <Select
          options={[
            { value: "DE", label: "Germany" },
            { value: "PL", label: "Poland" },
            { value: "GB", label: "Great Britain" },
          ]}
        />
        <Radio name="radio" label="Awesome radio" />
      </div>
    </main>
  );
}
