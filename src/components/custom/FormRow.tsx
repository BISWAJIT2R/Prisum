import React from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";

const FormRow = ({control, name, customPlaceholder, customeType}) => {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input
              type={customeType}
              placeholder={customPlaceholder}
              className="shad-input"
              {...field}
            />

          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
  );
};

export default FormRow;
