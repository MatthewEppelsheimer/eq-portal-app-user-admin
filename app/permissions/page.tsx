'use client';

import { useRouter } from 'next/navigation';

export default function PermissionsPage() {
  const router = useRouter();

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-4">Permissions</h1>
      <p className="text-gray-600">Permission management coming soon...</p>
    </div>
  );
}