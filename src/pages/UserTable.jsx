import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, Users, Calendar } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Edward John",
    userId: "407",
    email: "lawson@example.com",
    phone: "(252) 555-0126",
    status: "online",
    location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    team: ["Ronald Richards", "Floyd Miles", "Savannah Nguyen"],
    birthday: "12/27/1998",
    hrYear: "4 Years",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Edward John",
    userId: "450",
    email: "lawson@example.com",
    phone: "(252) 555-0126",
    status: "online",
    location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    team: ["Ronald Richards", "Floyd Miles", "Savannah Nguyen"],
    birthday: "12/27/1998",
    hrYear: "4 Years",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
];

const UserTable = () => {
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  return (
    <>
    <section>
      <div className="container">
        <div className="w-full h-screen flex justify-center mt-5">
          <div className=" w-full bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 text-sm">
              <th className="p-4">Name</th>
              <th className="p-4">UserID</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const isOpen = openRow === user.id;
              return (
                <React.Fragment key={user.id}>
                  {/* Main Row */}
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 flex items-center gap-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {user.name}
                    </td>
                    <td className="p-4">{user.userId}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.phone}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          user.status === "Full Time"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => toggleRow(user.id)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </td>
                  </tr>

                  {/* Expandable Row */}
                  {isOpen && (
                    <tr className="bg-gray-50 border-b">
                      <td colSpan="7" className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-500" />
                            <span>{user.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} className="text-gray-500" />
                            <span>{user.team.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gray-500" />
                            <span>{user.birthday}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gray-500" />
                            <span>{user.hrYear}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-500" />
                            <span>{user.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-500" />
                            <span>{user.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={16} className="text-gray-500" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default UserTable;