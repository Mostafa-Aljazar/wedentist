"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import data from "@/content/data/blogs.json";
import { number } from "zod";

type Props = {
  slug: string;
  title: string;
  id: number;
};

export default function DeleteModal({ title, slug, id }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const blogs = data[slug as keyof typeof data][id as keyof typeof number];

  const deleteArticle = () => {
    console.log("title delete :", title);
    console.log("blogs delete :", blogs);
  };
  return (
    <>
      <Button
        onPress={onOpen}
        size="sm"
        className="group flex items-center justify-between gap-1 rounded-lg border border-primary bg-primary px-3 py-0 transition-colors hover:bg-transparent focus:outline-none "
      >
        <span className="font-medium text-sm text-white transition-colors group-hover:text-primary group-active:text-primary">
          حذف
        </span>

        <span className="shrink-0 rounded-full border border-current bg-white p-1  text-primary group-active:text-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-trash-2"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                هل تريد حقا حذف هذا المقال ؟
              </ModalHeader>
              <ModalBody>
                <p className="text-lg font-semibold">{title}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  لا
                </Button>
                <Button color="primary" onPress={deleteArticle}>
                  نعم، احذف
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
