"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Modal({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-2xl font-bold">{title}</Dialog.Title>
          <p className="mt-4">{content}</p>
          <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
}