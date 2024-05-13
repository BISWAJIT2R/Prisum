import { z } from "zod";
import {useNavigate} from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpValidation } from "@/lib/validation/Schema";
import Logo from "@/components/custom/Logo";
import FormWarpper from "@/components/custom/FormWarpper";
import FormText from "@/components/custom/FormText";
import { Link } from "react-router-dom";
import { useCreateUser } from "@/lib/react-query/Mutation";

// import FormRow from "@/components/custom/FormRow";

const SignUpForm = () => {

  const naviagte = useNavigate();

  //  use customHook start
  const { mutateAsync: createUser, isPending: isUserCreating } = useCreateUser();
  // signUp  validation
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
      const newUser = await createUser(values);

      if (newUser) {
          naviagte("/")
      }
  }

  return (
    <Form {...form}>
      <FormWarpper>
        <Logo />
        <FormText />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative flex flex-col mt-4 gap-5 w-full "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="create a unique username"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="shad-button_primary"
            disabled={isUserCreating}
          >
            {isUserCreating ? "Loading..." : "Submit"}
          </Button>
        </form>
        <p className="mt-4 text-small-regular text-light-2  text-center ">
          Do you have an account?{" "}
          <Link
            to="/sign-in"
            className="text-small-semibold ml-1 text-primary-600 "
          >
            sign-in
          </Link>{" "}
        </p>
      </FormWarpper>
    </Form>
  );
};

export default SignUpForm;
