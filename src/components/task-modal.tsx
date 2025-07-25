"use client";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@heroui/react";

type TaskProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  edit?: boolean;
};
export default function TaskModal({
  isOpen,
  onClose,
  onOpenChange,
}: TaskProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h2> Add New Task</h2>
        </ModalHeader>
        <ModalBody>
          <Form>
            <fieldset className="flex w-full flex-wrap pt-2">
              <Input
                isRequired
                label="Name"
                labelPlacement="outside"
                name="name"
                type="text"
                variant="bordered"
              ></Input>
              <Input
                className="pt-2"
                label="Task Due"
                labelPlacement="outside"
                name="due-date"
                type="text"
                variant="bordered"
              />
              <Textarea
                className="pt-2"
                rows={7}
                label="Additional Notes"
                name="additional-notes"
                type="textarea"
                variant="bordered"
              />
            </fieldset>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="default" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            onPress={onClose}
            className=" bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            Add Task
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
