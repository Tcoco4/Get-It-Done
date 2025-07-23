"use client";
import { Button } from "@heroui/react";
import { Divider, Form, Input } from "@heroui/react";
import { Text } from "@/components/text";
import "../../globals.css";

export default function SignIn() {
  return (
    <div
      style={{ padding: " 16px" }}
      className="flex w-3/5 flex-col gap self-center justify-self-center md:w-2/5 lg:col-span-2"
    >
      <h2 className="text-4xl font-bold text-primary dark:text-white center">
        Sign in
      </h2>
      <Divider />

      <div className="grid gap">
        <Form>
          <fieldset style={{ padding: " 16px" }}>
            <Input
              isRequired
              label="Username"
              name="username"
              type="text"
              variant="bordered"
            ></Input>
            <Input
              isRequired
              label="Password"
              labelPlacement="outside"
              name="password"
              type="password"
              variant="bordered"
            />

            <div className="flex gap-2">
              <Input type="checkbox" label="Remember me" className="text-sm " />

              <Text className="text-sm underline">Forgot password?</Text>
            </div>
            <div className="flex gap-2">
              <Button color="primary" type="submit" variant="solid">
                Submit
              </Button>
              <Button color="success" type="reset" variant="faded">
                Reset
              </Button>
            </div>

            <div className="p-4">
              <h1 className="text-2xl font-bold text-blue-500 mb-4">
                Tailwind v4 + HeroUI
              </h1>
              <Button variant="solid" color="primary">
                HeroUI Button
              </Button>
            </div>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}
