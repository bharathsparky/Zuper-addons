"use client";

import { useState } from "react";
import {
  IconX,
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

interface GroupItem {
  id: string;
  name: string;
  description?: string;
  unitCost: number;
  markup: string;
  quantity: number;
  price: number;
}

interface Group {
  id: string;
  name: string;
  description?: string;
  status: "Active" | "Inactive";
  totalItems: number;
  items: GroupItem[];
}

interface ChooseGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (groups: Group[]) => void;
}

// Mock data for groups with items
const mockGroups: Group[] = [
  {
    id: "1",
    name: "Roofing Shingle Add-ons",
    description: "Premium shingle upgrades and accessories",
    status: "Active",
    totalItems: 2,
    items: [
      { id: "1-1", name: "Architectural Shingles Upgrade", description: "Premium dimensional shingles", unitCost: 150, markup: "2x", quantity: 1, price: 300 },
      { id: "1-2", name: "Shingle Color Upgrade", description: "Designer color options", unitCost: 75, markup: "2x", quantity: 1, price: 150 },
    ],
  },
  {
    id: "2",
    name: "Roof Flashing Kit",
    status: "Inactive",
    totalItems: 1,
    items: [
      { id: "2-1", name: "Aluminum Drip Edge Flashing", description: "Premium aluminum drip edge", unitCost: 100, markup: "1.5x", quantity: 1, price: 150 },
    ],
  },
  {
    id: "3",
    name: "Gutter Protection Bundle",
    status: "Active",
    totalItems: 3,
    items: [
      { id: "3-1", name: "Gutter Guards", description: "Aluminum mesh guards", unitCost: 200, markup: "2x", quantity: 1, price: 400 },
      { id: "3-2", name: "Downspout Extensions", description: "Flexible extensions", unitCost: 50, markup: "2x", quantity: 2, price: 200 },
      { id: "3-3", name: "Splash Blocks", description: "Decorative splash blocks", unitCost: 25, markup: "2x", quantity: 4, price: 200 },
    ],
  },
  {
    id: "4",
    name: "Roof Ventilation Package",
    description: "Ridge vents and soffit vents combo",
    status: "Active",
    totalItems: 2,
    items: [
      { id: "4-1", name: "Ridge Vent", description: "Continuous ridge vent", unitCost: 180, markup: "1.5x", quantity: 1, price: 270 },
      { id: "4-2", name: "Soffit Vents", description: "Aluminum soffit vents", unitCost: 80, markup: "1.5x", quantity: 4, price: 480 },
    ],
  },
  {
    id: "5",
    name: "Roof Underlayment Options",
    status: "Active",
    totalItems: 2,
    items: [
      { id: "5-1", name: "Synthetic Underlayment", description: "Premium synthetic felt", unitCost: 120, markup: "2x", quantity: 1, price: 240 },
      { id: "5-2", name: "Self-Adhesive Underlayment", description: "Peel and stick", unitCost: 200, markup: "1.5x", quantity: 1, price: 300 },
    ],
  },
  {
    id: "6",
    name: "Premium Roofing Bundle",
    description: "Complete roofing materials package",
    status: "Active",
    totalItems: 5,
    items: [
      { id: "6-1", name: "30-Year Shingles", description: "Lifetime warranty shingles", unitCost: 500, markup: "2x", quantity: 1, price: 1000 },
      { id: "6-2", name: "Ice & Water Shield", description: "Self-adhering membrane", unitCost: 150, markup: "2x", quantity: 1, price: 300 },
      { id: "6-3", name: "Starter Strip", description: "Pre-cut starter shingles", unitCost: 80, markup: "2x", quantity: 1, price: 160 },
      { id: "6-4", name: "Hip & Ridge Caps", description: "Matching ridge caps", unitCost: 100, markup: "2x", quantity: 1, price: 200 },
      { id: "6-5", name: "Roofing Nails", description: "Galvanized roofing nails", unitCost: 40, markup: "2x", quantity: 2, price: 160 },
    ],
  },
  {
    id: "7",
    name: "Ice & Water Shield Kit",
    description: "Protection for eaves and valleys",
    status: "Active",
    totalItems: 3,
    items: [
      { id: "7-1", name: "Eave Protection", description: "6-foot eave coverage", unitCost: 180, markup: "1.5x", quantity: 1, price: 270 },
      { id: "7-2", name: "Valley Protection", description: "Valley membrane", unitCost: 120, markup: "1.5x", quantity: 1, price: 180 },
      { id: "7-3", name: "Pipe Boot Flashing", description: "Self-sealing pipe boots", unitCost: 60, markup: "2x", quantity: 3, price: 360 },
    ],
  },
  {
    id: "8",
    name: "Skylight Installation Add-ons",
    description: "Skylights with flashing and accessories",
    status: "Inactive",
    totalItems: 3,
    items: [
      { id: "8-1", name: "Fixed Skylight", description: "22x46 fixed skylight", unitCost: 400, markup: "2x", quantity: 1, price: 800 },
      { id: "8-2", name: "Skylight Flashing Kit", description: "Complete flashing set", unitCost: 150, markup: "2x", quantity: 1, price: 300 },
      { id: "8-3", name: "Skylight Blinds", description: "Remote control blinds", unitCost: 200, markup: "2x", quantity: 1, price: 400 },
    ],
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
          <h2 className="text-lg font-semibold text-[#111827]">Choose Item Group</h2>
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
                placeholder="Search Item Group"
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
                  Item Group Name
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
            Add Item Group
          </button>
        </div>
      </div>
    </div>
  );
}

