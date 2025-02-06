import Link from 'next/link';
import UserDetails from '@/components/UserDetails';

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <>
      <nav className="text-sm mb-6 mt-6">
        <Link href="/users" className="text-blue-600 hover:text-blue-800">
          All Users
        </Link>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-500">User Details</span>
      </nav>
      <UserDetails userId={params.id} />
    </>
  );
}