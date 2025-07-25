import DeleteIcon from "@/components/delete-icon";
import EditIcon from "@/components/edit-con";
import { List } from "@/lib/types";
import { Button, Checkbox } from "@heroui/react";

export default function Task() {
  const List: List = {
    title: "Get Started",
    total: 0,
    completed: 0,
  };
  return (
    <div>
      <main className="w-full min-h-screen p-6">
        <div id="title" className="flex items-center justify-center p-2">
          <div className="flex w-3/5">
            <div className=" flex justify-between w-full">
              <h1 className="text-4xl font-medium "> {List.title}</h1>
              <div className="  ">
                <div className="flex justify-between">
                  <div className="flex justify-between pt-1.5">
                    <EditIcon className="p-1" />
                    <DeleteIcon className="p-1" />
                  </div>

                  <Button className="bg-black text-white px-4 py-2 rounded-md ">
                    + New Task
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5">
          <div id="new-task" className="flex w-3/5  ">
            <table className=" w-full">
              <tbody className="rounded-md">
                <tr className="bg-black text-white h-15  ">
                  <td className="px-4 py-2 rounded-l-lg">
                    <Checkbox lineThrough color="default">
                      <p className="text-white">Name</p>
                    </Checkbox>
                  </td>

                  <td className="px-4 py-2 rounded-r-lg flex justify-end gap-2 ">
                    <EditIcon className="p-1 fill-white" />
                    <DeleteIcon className="p-1 fill-white" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
