// RejectPopup.tsx

"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function RejectPopup({
  isOpen,
  onClose,
  onConfirm,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-100 rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Xác nhận
        </h2>

        <p className="mb-6">
          Bạn muốn từ chối đại lý này không?
        </p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={onClose}
          >
            Hủy
          </button>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={onConfirm}
          >
            Từ chối
          </button>
        </div>
      </div>
    </div>
  );
}