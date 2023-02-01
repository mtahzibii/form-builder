import { Button } from "@/components/Button";
import Link from "next/link";
import { DynamicForm } from "@/components/DynamicForm";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-12">Bugloos Form Builder</h1>
          <h3>Create your custom forms using this dynamic form builder!</h3>
          <div className="my-4">
            <Link href="/add_new_form">
              <Button>Create New Form</Button>
            </Link>
          </div>
        </div>
        <DynamicForm />
      </div>
    </>
  );
}
