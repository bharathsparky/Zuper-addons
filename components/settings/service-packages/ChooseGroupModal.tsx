"use client";

import { useState } from "react";
import {
  IconX,
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

interface Group {
  id: string;
  name: string;
  description?: string;
  status: "Active" | "Inactive";
  totalItems: number;
}

interface ChooseGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (groups: Group[]) => void;
}

// Mock data for groups
const mockGroups: Group[] = [
  {
    id: "1",
    name: "Roofing Shingle Add-ons",
    description: "Premium shingle upgrades and accessories",
    status: "Active",
    totalItems: 2,
  },
  {
    id: "2",
    name: "Roof Flashing Kit",
    status: "Inactive",
    totalItems: 1,
  },
  {
    id: "3",
    name: "Gutter Protection Bundle",
    status: "Active",
    totalItems: 0,
  },
  {
    id: "4",
    name: "Roof Ventilation Package",
    description: "Ridge vents and soffit vents combo",
    status: "Active",
    totalItems: 0,
  },
  {
    id: "5",
    name: "Roof Underlayment Options",
    status: "Active",
    totalItems: 0,
  },
  {
    id: "6",
    name: "Premium Roofing Bundle",
    description: "Complete roofing materials package",
    status: "Active",
    totalItems: 5,
  },
  {
    id: "7",
    name: "Ice & Water Shield Kit",
    description: "Protection for eaves and valleys",
    status: "Active",
    totalItems: 8,
  },
  {
    id: "8",
    name: "Skylight Installation Add-ons",
    description: "Skylights with flashing and accessories",
    status: "Inactive",
    totalItems: 3,
  },
];

export default function ChooseGroupModal({ isOpen, onClose, onAdd }: ChooseGroupModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredGroups = mockGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (group.description && group.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const paginatedGroups = filteredGroups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleToggleGroup = (groupId: string) => {
    setSelectedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleAddGroups = () => {
    const groupsToAdd = mockGroups.filter((group) =>
      selectedGroups.includes(group.id)
    );
    onAdd(groupsToAdd);
    setSelectedGroups([]);
    setSearchQuery("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl w-[700px] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-lg font-semibold text-[#111827]">Choose Group</h2>
          <button
            onClick={onClose}
            className="p-1 text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] rounded-md transition-colors"
          >
            <IconX size={20} stroke={2} />
          </button>
        </div>

        {/* Search and Pagination */}
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <IconSearch
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search Group"
                className="w-full pl-10 pr-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              />
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <span>Page {currentPage} of {totalPages || 1}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-1 text-[#9CA3AF] hover:text-[#6B7280] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <IconChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1 text-[#9CA3AF] hover:text-[#6B7280] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <IconChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead className="bg-[#F9FAFB] sticky top-0">
              <tr>
                <th className="w-12 px-4 py-3"></th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Group Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Total Items
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {paginatedGroups.map((group) => (
                <tr
                  key={group.id}
                  className="hover:bg-[#F9FAFB] transition-colors"
                >
                  <td className="px-4 py-4">
                    <label className="relative flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedGroups.includes(group.id)}
                        onChange={() => handleToggleGroup(group.id)}
                        className="sr-only peer"
                      />
                      <div className={`w-5 h-5 border-2 rounded transition-all ${
                        selectedGroups.includes(group.id)
                          ? "bg-[#3B82F6] border-[#3B82F6]"
                          : "bg-white border-[#D1D5DB]"
                      }`}>
                        {selectedGroups.includes(group.id) && (
                          <svg className="w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </label>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-[#111827]">
                        {group.name}
                      </p>
                      {group.description && (
                        <p className="text-sm text-[#6B7280] mt-0.5">
                          {group.description}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-sm font-medium rounded border ${
                        group.status === "Active"
                          ? "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]"
                          : "bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]"
                      }`}
                    >
                      {group.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#111827]">
                      {group.totalItems}
                    </span>
                  </td>
                </tr>
              ))}
              {paginatedGroups.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-sm text-[#6B7280]">
                    No groups found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E5E7EB] bg-white">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#374151] bg-white border border-[#D1D5DB] rounded-lg hover:bg-[#F9FAFB] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAddGroups}
            disabled={selectedGroups.length === 0}
            className="px-4 py-2 text-sm font-medium text-white bg-[#EA580C] rounded-lg hover:bg-[#DC2626] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Group
          </button>
        </div>
      </div>
    </div>
  );
}

