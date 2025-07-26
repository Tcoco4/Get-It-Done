"use client";
import TaskModal from "@/components/task-modal";
import DeleteIcon from "@/components/delete-icon";
import EditIcon from "@/components/edit-con";
import { List } from "@/lib/types";

import { Button, Checkbox, useDisclosure } from "@heroui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Task() {
  const [isSelected, setIsSelected] = useState(false);
  const router = useRouter();
  type Task = {
    name: string;
    complete: boolean;
    taskDue?: Date | string;
    additionalInformation?: string;
  };

  // const list: List = {
  //   name: "Get Started",
  //   total: 0,
  //   completed: 0,
  //   tasks: [
  //     {
  //       name: " Create to do List",
  //       complete: true,
  //       taskDue: "25/07/25",
  //       additionalInformation: "",
  //     },
  //     {
  //       name: " Investigate failing workflow",
  //       complete: false,
  //       taskDue: "25/07/25",
  //       additionalInformation: "",
  //     },
  //     {
  //       name: " Investigating failing nextfont in docker application",
  //       complete: false,
  //       taskDue: "25/07/25",
  //       additionalInformation: "",
  //     },
  //     {
  //       name: " Deploy to Develop",
  //       complete: false,
  //       taskDue: "25/07/25",
  //       additionalInformation: "",
  //     },
  //     {
  //       name: " Develop to Production",
  //       complete: false,
  //       taskDue: "25/07/25",
  //       additionalInformation: "",
  //     },
  //     {
  //       name: " Submit Assessment",
  //       complete: false,
  //       taskDue: "25/07/25",
  //       additionalInformation: "",
  //     },
  //   ],
  // };
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const updateTaskStatus = (task: Task): void => {
    console.log({ task });
    setIsSelected(!isSelected);
    // task.complete = !task.complete;
    //Server action call to change object and save to db
  };

  return (
    <div>
      <main className="w-full min-h-screen p-6">
        <div id="title" className="flex items-center justify-center p-2">
          <div className="flex w-3/5">
            <div className=" flex justify-between w-full">
              <h1 className="text-4xl font-medium "> {list.name}</h1>
              <div className="  ">
                <div className="flex justify-between">
                  <div className="flex justify-between pt-1.5">
                    <EditIcon className="p-1" />
                    <DeleteIcon className="p-1" />
                  </div>

                  <Button
                    className="bg-black text-white px-4 py-2 rounded-md "
                    onPress={onOpen}
                  >
                    + New Task
                  </Button>
                  <TaskModal
                    isOpen={isOpen}
                    onClose={onClose}
                    onOpenChange={onOpenChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5">
          <div id="new-task" className="flex w-3/5  ">
            <table className=" w-full border-separate border-spacing-y-4 ">
              <tbody className="rounded-md">
                {list.tasks?.map((task, index) => (
                  <tr key={index} className="bg-black text-white h-15  ">
                    <td className="px-4 py-2 rounded-l-lg">
                      <Checkbox
                        lineThrough
                        color="default"
                        isSelected={task.complete}
                        onValueChange={() => updateTaskStatus(task)}
                      >
                        <p className="text-white">{task.name}</p>
                      </Checkbox>
                    </td>

                    <td className="px-4 py-2 rounded-r-lg flex justify-end gap-2 ">
                      {task.complete ? (
                        <></>
                      ) : (
                        <EditIcon className="p-1 fill-white" />
                      )}
                      <DeleteIcon className="p-1 fill-white" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-center pt-25">
          <div className=" w-3/5 flex justify-start">
            <Button
              color="primary"
              type="submit"
              variant="solid"
              className="bg-black text-white px-4 py-2 rounded-md "
              onPress={async () => router.push("/dashboard")}
            >
              Back
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
