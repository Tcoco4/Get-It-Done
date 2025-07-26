"use client";
import TaskModal from "@/components/task-modal";
import DeleteIcon from "@/components/delete-icon";
import EditIcon from "@/components/edit-con";
import { List } from "@/lib/types";

import { Button, Checkbox, Input, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getList,
  updateTaskStatus,
  updateListName,
  deleteList,
} from "@/lib/actions/actions";
import { useParams } from "next/navigation";

export default function ListPage() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [list, setList] = useState<List | null>();
  const [listName, setListName] = useState<string | undefined>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();
  const params = useParams();

  const listId = params.id;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const fetchedList = await getList(parseInt(listId as string));
        setList(fetchedList);
        setListName(fetchedList?.name);
      } catch (err) {
        console.error(err);
      }
    };
    fetchList();
  }, [listId]);

  const updateStatus = async (
    value: boolean,
    taskId: number
  ): Promise<void> => {
    await updateTaskStatus(taskId, value).then((res) => {
      //refresh component to get latest data
    });
  };
  const updateName = async (
    listName: string,
    listId: number
  ): Promise<void> => {
    await updateListName(listId, listName).then((_) => {
      //refresh component to get latest data
    });
  };

  const deleteTheList = async (listId: number): Promise<void> => {
    await deleteList(listId).then((_) => {
      router.push("/dashboard");
    });
  };
  return (
    <div>
      <main className="w-full min-h-screen p-6">
        <div id="title" className="flex items-center justify-center p-2">
          <div className="flex w-3/5">
            <div className=" flex justify-between w-full">
              <Input
                className="text-xl w-40 font-extrabold shadow-none click-events-none"
                size="lg"
                variant="underlined"
                isDisabled={disabled}
                name="list-name"
                value={listName}
                onValueChange={(e) => setListName(e)}
                onBlur={() => {
                  updateName(listName!, list?.id!), setDisabled(!disabled);
                }}
              />

              <div className="  ">
                <div className="flex justify-between">
                  <div className="flex justify-between pt-1.5">
                    <EditIcon
                      className="p-1"
                      onClick={() => setDisabled(!disabled)}
                    />
                    <DeleteIcon
                      className="p-1"
                      onClick={() => deleteTheList(list?.id!)}
                    />
                  </div>

                  <Button
                    className="bg-black text-white px-4 py-2 rounded-md "
                    onPress={onOpen}
                  >
                    + New Task
                  </Button>
                  <TaskModal
                    listId={parseInt(listId as string)}
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
                {list?.tasks?.map((task, index) => (
                  <tr key={index} className="bg-black text-white h-15  ">
                    <td className="px-4 py-2 rounded-l-lg">
                      <Checkbox
                        lineThrough
                        color="default"
                        isSelected={task?.complete}
                        onValueChange={(e) => updateStatus(e, task.id)}
                      >
                        ,<p className="text-white">{task?.name}</p>
                      </Checkbox>
                    </td>

                    <td className="px-4 py-2 rounded-r-lg flex justify-end gap-2 ">
                      {task?.complete ? (
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
