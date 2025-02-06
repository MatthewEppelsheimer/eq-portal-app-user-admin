'use client';

// Temporary mock data
const mockUser = {
  id: '1',
  email: 'user1@example.com',
  name: 'John Doe',
  assignedRoles: ['Admin', 'Editor'],
  assignedPermissions: ['create:users', 'edit:users'],
  effectivePermissions: [
    'create:users',
    'edit:users',
    'delete:users',
    'view:roles',
    'assign:roles',
  ],
};

export default function UserDetails({ userId }: { userId: string }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-blue-50/50 shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={mockUser.email}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-blue-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                defaultValue={mockUser.name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Assigned Roles</h2>
          <div className="flex flex-wrap gap-2">
            {mockUser.assignedRoles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50/50 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Assigned Permissions</h2>
          <div className="flex flex-wrap gap-2">
            {mockUser.assignedPermissions.map((permission) => (
              <span
                key={permission}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
              >
                {permission}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="bg-blue-50/50 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Effective Permissions</h2>
          <div className="space-y-2">
            {mockUser.effectivePermissions.map((permission) => (
              <div
                key={permission}
                className="p-2 bg-blue-100/50 rounded text-sm text-gray-700"
              >
                {permission}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}